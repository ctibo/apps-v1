<script>
  import { uniqBy } from 'lodash';
  import algoClient from '../lib/algoClient';
  import nfts from '../lib/nfts';
  import vars from '../vars';
  import { shortenAddress } from '../helpers/address';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  let loading = true;
  let secondary = [];
  $: $nfts, getStats();

  async function getStats() {
    if (!nfts.gen1.length) return;
    // Get holders
		await Promise.all(nfts.gen1.map(async (nft) => {
			const txns = await algoClient.lookupAssetTransactions(nft.index, {
        'tx-type': 'axfer'
      })
      const groupedTxns = uniqBy(txns.transactions.filter(txn => txn.group), 'group');

      await Promise.all(groupedTxns.map(async (axfer) => {
        const round = await algoClient.lookupBlock(axfer['confirmed-round']);
        const group = round.transactions.filter(txn => txn.group === axfer.group); 
        
        const payments = group.filter(txn => txn['tx-type'] === 'pay');
        if (!payments.length) return;        

        const royalties = payments.filter(txn => txn['payment-transaction'].receiver === vars.CREATOR_ACCOUNT)
        if(royalties.length !== 1) return; 

        const payment = payments.find(txn => (
          txn.sender == axfer['asset-transfer-transaction'].receiver
          && txn['payment-transaction'].receiver !== vars.CREATOR_ACCOUNT
          && txn['payment-transaction'].receiver !== vars.RAND_ACCOUNT
        ))
        if (!payment) return;
        
        const amount = payments.reduce((total, txn) => (total + txn['payment-transaction'].amount), 0);

        secondary.push({
          unit: nft.unit,
          buyer: axfer['asset-transfer-transaction'].receiver,
          seller: payment['payment-transaction'].receiver ,
          price: Math.round(amount / 1000000),
        });

      }));


		}));

    secondary = secondary.sort((a,b) => b.price - a.price);
    console.log(secondary)
    loading = false;
  }
</script>

<style lang="scss">
  table {
    width: 100%;
  }
  th {
    font-weight: bold;
    text-transform: uppercase;
  }
  td, th {
    padding: 1em 0;
    border-bottom: 1px solid var(--border-color);
  }
  .algos {
    display: inline-block;
    width: auto;
    font-size: 0.625em;
    height: 1em;
    margin-left: 0.125em;
    vertical-align: baseline;
  }
</style>

<div class="content">
  
  <h1 class="page-title">
    Secondary
    <span class="subtitle">
      Buyers and Sellers
    </span>
  </h1>


    {#if loading}
      <LoadingInline />
    {/if}

    {#if secondary.length}
      <table>
        <tr>
          <th>APP</th>
          <th>Buyer</th>
          <th>Seller</th>
          <th>Price</th>
        </tr>
        {#each secondary as txn }
          <tr>
            <td>{txn.unit}</td>
            <td>{shortenAddress(txn.buyer)}</td>
            <td>{shortenAddress(txn.seller)}</td>
            <td>{txn.price}<img class="algos" src="/images/algo-logo.svg" alt="Algos" /></td>
          </tr>
        {/each}
      </table>
    {/if}



</div>