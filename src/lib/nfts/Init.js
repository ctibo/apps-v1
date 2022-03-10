import algoClient from '../algoClient';

export default class Init {
  constructor () {
    this.loading = false;
    this.statsLoading = false;
    this.all = [];
    this.gen1 = [];
    this.collabs = [];
    this.stats = {
      minted: 0,
      highestSales: [],
      topHolders: [],
    }
  }
  
  init() {
    algoClient.onInit(this.getNfts.bind(this));
  }
}
