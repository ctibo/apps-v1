import algoClient from './algoClient';
import vars from '../vars';

export async function getNfts() {
  const response = await algoClient.lookupAccountByID(vars.CREATOR_ACCOUNT);
  if (!response.account['created-assets']) return [];
  
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
        )
    }))
    .sort((a,b) => (b.number - a.number));

  return nfts;
}