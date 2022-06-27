const mode = 'MAINNET';

const shared = {
  NFT_PREFIX: 'APP-',
}

const testnet = {
  API_URL: 'https://node.testnet.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.testnet.algoexplorerapi.io',
  NFD_API_URL: 'https://api.nf.domains',
  CREATOR_ACCOUNT: 'APPS6P4CEXCIYI25BNDO46QSNIVVBIYR7SS5BNUZIMMTFW6GNS7UKXVAGM',
  RAND_ACCOUNT: 'RANDGVRRYGVKI3WSDG6OGTZQ7MHDLIN5RYKJBABL46K5RQVHUFV3NY5DUE',
}

const mainnet = {
  API_URL: 'https://node.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.algoexplorerapi.io',
  NFD_API_URL: 'https://api.nf.domains',
  CREATOR_ACCOUNT: 'APPS6P4CEXCIYI25BNDO46QSNIVVBIYR7SS5BNUZIMMTFW6GNS7UKXVAGM',
  RAND_ACCOUNT: 'RANDGVRRYGVKI3WSDG6OGTZQ7MHDLIN5RYKJBABL46K5RQVHUFV3NY5DUE',
  RAND_ESCROW: 'IPKKXJM3HKX7LAUDJ3GLJKU6ZUF4JCTA4PCUTHQEIB5SKCWODG4LKRFR2I',
}

export default {
  ...shared,
  ...(mode === 'TESTNET' ? testnet : mainnet),
}