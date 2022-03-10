import algoClient from '../algoClient';

export default class Init {
  constructor () {
    this.loading = false;
    this.all = [];
    this.gen1 = [];
    this.collabs = [];
    this.stats = {
      minted: 0,
    }
  }
  
  init() {
    algoClient.onInit(this.getNfts.bind(this));
  }
}
