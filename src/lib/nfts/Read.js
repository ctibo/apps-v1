import { uniqBy } from 'lodash';
import { tick } from 'svelte'; 
import { get } from 'svelte/store';
import algoClient from '../algoClient';
import vars from '../../vars';
import overrides from '../../nft-overrides';
import { nftsData } from '../../stores/nfts';


export default class Read {

  async getNfts() {
		this.loading = true;
		this.dispatchUpdate();
		
		const response = await algoClient.lookupAccountByID(vars.CREATOR_ACCOUNT);
		if (!response.account['created-assets']) return [];
		
		// Get NFTs list
		const nfts = response.account['created-assets']
			.filter(asset => (
				!asset.deleted
				&& asset.params['unit-name'].startsWith(vars.NFT_PREFIX)
			))
			.map(asset => ({
				...asset.params,
				index: asset.index,
				unit: asset.params['unit-name'],
				number: Number(
					asset.params['unit-name'].replace(vars.NFT_PREFIX, '')
				),
				tag: false,
			}));
	
		// Get holders
		await Promise.all(nfts.map(async (nft) => {
			const asset = await algoClient.lookupAssetBalances(nft.index, {
				'currency-greater-than': 0,
			})

			nft.holder = asset.balances[0].address;
			if (nft.holder === vars.CREATOR_ACCOUNT) {
				nft.tag = 'Soon';
			}

			// Overrides tags and links
			if (overrides[nft.unit]) {
				Object.entries(overrides[nft.unit]).forEach(([key, value]) => {
					nft[key] = value;
				});				
			}
			
		}));
		
		this.all = nfts;
		this.gen1 = nfts.filter(nft => nft.number).sort((a,b) => (b.number - a.number));
		this.collabs = nfts.filter(nft => !nft.number);

		this.stats.minted = this.gen1.length;
		
		this.loading = false;
		this.statsLoading = true;
		this.dispatchUpdate();

		await this.getSalesData();
		// await this.getHoldersData();

		this.statsLoading = false;
		this.dispatchUpdate();
	}


		//
		// Get sales stats
		// ----------------------------------------------
		// async getHoldersData() {
			
		// }


	//
	// Get sales stats
	// ----------------------------------------------
	async getSalesData() {
		const $nftsData = get(nftsData);

		await Promise.all(this.all.map(async (nft) => {
			// Get previous stored data
			let nftData = $nftsData[nft.index];
			if (!nftData) nftData = { sales: [], highestSale: 0, round: 0 };

			// get untracked transfer txns
			const lookupParams = {
				'tx-type': 'axfer',
			};
			if (nftData.round) {
				lookupParams['min-round'] = nftData.round + 1;
			}
			let txns = await algoClient.lookupAssetTransactions(nft.index, lookupParams);
			
			// get only groups
			const txnGroups = uniqBy(txns.transactions.filter(txn => txn.group), 'group');
			txnGroups.sort((a,b) => b['confirmed-round'] - a['confirmed-round']);
					
			
			// get rounds txns for each group
			await Promise.all(txnGroups.map(async (axfer) => {
				const round = await algoClient.lookupBlock(axfer['confirmed-round']);
				// get nft txns from that group
        const group = round.transactions.filter(txn => txn.group === axfer.group);
				
				// payments from group
				const payments = group.filter(txn => (
					txn['tx-type'] === 'pay')
					&& txn.sender == axfer['asset-transfer-transaction'].receiver
				);
        if (!payments.length) return;      
				
				// get sale amount
				const amount = payments.reduce((total, txn) => (total + txn['payment-transaction'].amount), 0);
				
				// push sale data
				if (!nftData.sales.find(sale => sale.round === axfer['confirmed-round'])) {
					nftData.sales.push({
						buyer: axfer['asset-transfer-transaction'].receiver,
						// seller: payment['payment-transaction'].receiver,
						price: Math.round(amount / 10000) / 100,
						round: axfer['confirmed-round'],
					});
				}
			}));

			// gather data
			nftData.sales.sort((b,a) => b.round - a.round);
			nftData.highestSale = nftData.sales
				.reduce((high, sale) => (sale.price > high ? sale.price : high), 0);
			nftData.round = nftData.sales
				.reduce((latest, sale) => (sale.round > latest ? sale.round : latest), 0); 
			
			// Update storage
			$nftsData[nft.index] = nftData;
		}));

		nftsData.set($nftsData);

		// Set sales in nfts object;
		for ( let i=0; i<this.all.length; i++) {
			const nft = this.all[i];
			if (!$nftsData[nft.index]) continue;
			nft.highestSale = $nftsData[nft.index].highestSale;
		}

		// gather highest sales
		this.stats.highestSales = [...this.all]
			.sort((a,b) => b.highestSale - a.highestSale)
			.slice(0, 10);
	}
}
