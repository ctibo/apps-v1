import { uniq, uniqBy, groupBy } from 'lodash';
import { tick } from 'svelte'; 
import { get } from 'svelte/store';
import algoClient from '../algoClient';
import vars from '../../vars';
import overrides from '../../nft-overrides';
import { assets, sales, accounts } from '../../stores/nfts';


export default class Read {

  async getNfts() {
		this.loading = true;
		this.dispatchUpdate();
		const $assets = get(assets);
		console.log($assets)
		const response = await algoClient.lookupAccountByID(vars.CREATOR_ACCOUNT);
		if (!response.account['created-assets']) return [];
		
		// Get NFTs list
		const nfts = response.account['created-assets']
			.filter(asset => (
				!asset.deleted
				&& asset.params['unit-name'].startsWith(vars.NFT_PREFIX)
			))
			.map(asset => {
				if (!$assets[asset.index]) {
					$assets[asset.index] = {
						...asset.params,
						index: asset.index,
						unit: asset.params['unit-name'],
						number: Number(
							asset.params['unit-name'].replace(vars.NFT_PREFIX, '')
						),
						holder: '',
						tag: false,
					};
				}
				return $assets[asset.index];
			});

		// update cache
		assets.set($assets);

		// Overrides tags and links
		nfts.forEach(nft => {
			if (overrides[nft.unit]) {
				Object.entries(overrides[nft.unit]).forEach(([key, value]) => {
					nft[key] = value;
				});				
			}
		});
		
		this.all = nfts;
		this.gen1 = nfts.filter(nft => nft.number)
			.sort((a,b) => (b.number - a.number));
		this.collabs = nfts.filter(nft => !nft.number)
			.sort((a,b) => (a.index - b.index));
		this.stats.minted = this.gen1.length;
		this.loading = false;

		this.statsLoading = true;
		this.dispatchUpdate();

		await this.getHoldersData();
		// await this.getSalesData();

		this.statsLoading = false;
		await tick();
		this.dispatchUpdate();
	}


	//
	// Get sales stats
	// ----------------------------------------------
	async getHoldersData() {
		const $assets = get(assets);
		const $accounts = get(accounts);

		for(let i=0; i<this.all.length; i++) {
			const nft = this.all[i];
	
			// get holder
			const asset = await algoClient.lookupAssetBalances(nft.index, {
				'currency-greater-than': 0,
			})
			nft.holder = asset.balances[0].address;

			// Get previous stored data
			let accountData = $accounts[nft.holder];
			// check if holder is an escrow account
			if (!accountData) {
				accountData = {
					isEscrow: false,
				}
				// check for rand escrow
				if (nft.holder === vars.RAND_ESCROW) {
					accountData.isEscrow = true;
				}
				else {
					let account = await algoClient.lookupAccountByID(nft.holder);
					if (
						(account.data && account.data['total-assets-opted-in'] > 1) 
						|| account.account.assets.length === 1
					) accountData.isEscrow = true
				}
				$accounts[nft.holder] = accountData;
			}

			// if holded by escrow, check previous holder
			if (accountData.isEscrow) {
				let txns = await algoClient.lookupAssetTransactions(nft.index, {
					'currency-greater-than': 0,
					'address': nft.holder,
					'limit': 1,
				});
				// set prev holder
				if (txns.transactions.length) {
					nft.holder = txns.transactions[0].sender;
				}
			}

			$assets[nft.index].holder = nft.holder;
		};

		// Set cache
		accounts.set($accounts);
		assets.set($assets);


		// group holders
		const holders = groupBy(
			this.all.filter(nft => nft.holder !== vars.CREATOR_ACCOUNT),
			'holder'
		);
		this.stats.holders = Object.entries(holders)
		.map(([address, nfts]) => ({ address, nfts, qty: nfts.length }))
		.sort((a,b) => b.qty - a.qty);
		
		// get total
		this.stats.totalHolders = this.stats.holders.length;

		// distribution
		const distribution = groupBy(this.stats.holders, 'qty');
		this.stats.holdersDistribution = Object.entries(distribution)
			.map(([nftsQty, addresses]) => ({ 
				nftsQty,
				holdersQty: addresses.length,  
				ratio: addresses.length/this.stats.totalHolders,
				addresses, 
			}))
			.sort((a,b) => b.nftsQty - a.nftsQty);
	}






	//
	// Get sales stats
	// ----------------------------------------------
	async getSalesData() {
		const $sales = get(sales);
		try {
			for(let i=0; i<this.all.length; i++) {
				const nft = this.all[i];

				// Get previous stored data
				let salesData = $sales[nft.index];
				if (!salesData) salesData = { txns: [], highestSale: 0, round: 0 };
	
				// get untracked transfer txns
				const lookupParams = {
					'tx-type': 'axfer',
				};
				if (salesData.round) {
					lookupParams['min-round'] = salesData.round + 1;
				}
				let txns = await algoClient.lookupAssetTransactions(nft.index, lookupParams);
				if (!txns || !txns.transactions.length) return;

				// get only groups
				const groups = txns.transactions.filter(txn => txn.group && txn['asset-transfer-transaction']);
				const txnGroups = uniqBy(groups, 'group');
				txnGroups.sort((a,b) => b['confirmed-round'] - a['confirmed-round']);
							
				// get rounds txns for each group
				for (let j=0; j<txnGroups.length; j++) {
					const axfer = txnGroups[j];
					const round = await algoClient.lookupBlock(axfer['confirmed-round']);
					// get nft txns from that group
					const group = round.transactions.filter(txn => txn.group === axfer.group);

					
					// payments from group
					const payments = group.filter(txn => (
						txn['tx-type'] === 'pay'
						&& txn.sender == axfer['asset-transfer-transaction'].receiver
					));
					if (!payments.length) return;      
					
					// get sale amount
					const amount = payments.reduce((total, txn) => (total + txn['payment-transaction'].amount), 0);
					
					// get number of nfts in group
					const nftsInGroup = uniq(
						group
							.filter(txn => txn['tx-type'] === 'axfer')
							.map(txn => txn['asset-transfer-transaction']['asset-id'])
					).length || 1;

					// push sale data
					if (!salesData.txns.find(sale => sale.round === axfer['confirmed-round'])) {
						salesData.txns.push({
							buyer: axfer['asset-transfer-transaction'].receiver,
							price: Math.round(amount / 10000) / 100 / nftsInGroup,
							round: axfer['confirmed-round'],
						});
					}
				};
	
				// gather data
				salesData.txns.sort((b,a) => b.round - a.round);
				salesData.highestSale = salesData.txns
					.reduce((high, sale) => (sale.price > high ? sale.price : high), 0);
				salesData.round = salesData.txns
					.reduce((latest, sale) => (sale.round > latest ? sale.round : latest), 0); 
				
				// Update storage
				$sales[nft.index] = salesData;
			};
		}
		catch (e) {
			console.log(e);
		}


		sales.set($sales);

		// Set sales in nfts object;
		for ( let i=0; i<this.all.length; i++) {
			const nft = this.all[i];
			if (!$sales[nft.index]) continue;
			nft.highestSale = $sales[nft.index].highestSale;
		}

		// gather highest sales
		this.stats.highestSales = [...this.all]
			.sort((a,b) => b.highestSale - a.highestSale)
			.slice(0, 10);
	}
}
