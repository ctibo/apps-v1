const mode = 'MAINNET';

const shared = {
  NFT_PREFIX: 'APP-',
}

const testnet = {
  API_URL: 'https://node.testnet.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.testnet.algoexplorerapi.io',
  CREATOR_ACCOUNT: 'APPS6P4CEXCIYI25BNDO46QSNIVVBIYR7SS5BNUZIMMTFW6GNS7UKXVAGM',
  RAND_ACCOUNT: 'RANDGVRRYGVKI3WSDG6OGTZQ7MHDLIN5RYKJBABL46K5RQVHUFV3NY5DUE',
}

const mainnet = {
  API_URL: 'https://node.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.algoexplorerapi.io',
  RAND_ACCOUNT: 'RANDGVRRYGVKI3WSDG6OGTZQ7MHDLIN5RYKJBABL46K5RQVHUFV3NY5DUE',
  CREATOR_ACCOUNT: 'APPS6P4CEXCIYI25BNDO46QSNIVVBIYR7SS5BNUZIMMTFW6GNS7UKXVAGM',
}

export default {
  ...shared,
  ...(mode === 'TESTNET' ? testnet : mainnet),
}