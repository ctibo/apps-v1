const mode = 'MAINNET';

const shared = {
  NFT_PREFIX: 'APP-',
}

const testnet = {
  API_URL: 'https://node.testnet.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.testnet.algoexplorerapi.io',
  CREATOR_ACCOUNT: '3X3LP2EGKUI3YHRMGBC2TWSSNYPXIKSECSCVYU5H3G642RQE74XX2DU6BQ',
}

const mainnet = {
  API_URL: 'https://node.algoexplorerapi.io',
  INDEXER_URL: 'https://mainnet-idx.algonode.cloud',
  CREATOR_ACCOUNT: 'APPS6P4CEXCIYI25BNDO46QSNIVVBIYR7SS5BNUZIMMTFW6GNS7UKXVAGM',
}

export default {
  ...shared,
  ...(mode === 'TESTNET' ? testnet : mainnet),
}