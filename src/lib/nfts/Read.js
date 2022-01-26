import algoClient from '../algoClient';
import vars from '../../vars';


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
				number: Number(
					asset.params['unit-name'].replace(vars.NFT_PREFIX, '')
				),
				tag: false,
			}))
			.sort((a,b) => (b.number - a.number));
	
			// Get holders
			await Promise.all(nfts.map(async (nft) => {
			const asset = await algoClient.lookupAssetBalances(nft.index, {
				'currency-greater-than': 0,
			})
			nft.holder = asset.balances[0].address;
			if (nft.holder === vars.CREATOR_ACCOUNT) {
				nft.tag = 'Soon';
			}
		}));
		
		this.gen1 = nfts;
		this.stats.minted = this.gen1.length;
		this.loading = false;
		this.dispatchUpdate();
	}
}
