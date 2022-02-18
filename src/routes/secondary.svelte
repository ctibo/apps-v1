<script>
  import { tick } from 'svelte';
  import { uniqBy } from 'lodash';
  import algoClient from '../lib/algoClient';
  import nfts from '../lib/nfts';
  import vars from '../vars';
  import { shortenAddress } from '../helpers/address';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  let loading = true;
  let secondary = [];
  let entries = [];
  let winner = false;
  let winnerPicked = false;
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
    secondary.forEach(txn => {
      if (!entries.includes(txn.buyer)) entries.push(txn.buyer);
      if (!entries.includes(txn.seller)) entries.push(txn.seller);
    });
    console.log(secondary)
    loading = false;
  }



  async function pickWinner() {
    if (!entries.length) return;
    winner = entries[Math.floor( Math.random() * entries.length )];
    requestAnimationFrame(() => {
      winnerPicked = true;
    })
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
  td {
    font-size: 0.875em;
  }
  .arrow {
    padding: 0 0.5em;
    text-align: center;
  }
  .seller,
  .price {
    text-align: right;
  }
  .algos {
    display: inline-block;
    width: auto;
    font-size: 0.625em;
    height: 1em;
    margin-left: 0.125em;
    vertical-align: baseline;
  }

  .winner-wrapper {
    margin-bottom: 2em;
    text-align: center;
  }
  .winner-label {
    display: block;
    overflow: hidden;
    position: relative;
    &.hidden {
      &:before {
        transform: translateX(-110%) skew(-6deg);
      }
      .address {
        opacity: 0;
      }
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 10;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: var(--gradient-purple);
      transform: translateX(110%) skew(-6deg);
      transition: transform 480ms var(--ease);
    }
    .address {
      display: inline-block;
      font-size: 1.5em;
      padding: 0.25em 0;
      opacity: 1;
      transition: opacity 0ms var(--ease) 240ms;
    }
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

      <div class="winner-wrapper">
        {#if !winner}  
          <button class="btn" on:click={pickWinner}>
            Pick a winner
          </button>

        {:else}
          <span class="winner-label" class:hidden={!winnerPicked}>
            <span class="address">
              {shortenAddress(winner)}
            </span>
          </span>
        {/if}
      </div>


      <h3>{entries.length} unique traders</h3>
      <table>
        <tr>
          <th>APP</th>
          <th class="seller">Seller</th>
          <th class="arrow"></th>
          <th>Buyer</th>
          <th class="price">Price</th>
        </tr>
        {#each secondary as txn }
          <tr>
            <td>{txn.unit}</td>
            <td class="seller">{shortenAddress(txn.seller)}</td>
            <td class="arrow">➞</td>
            <td>{shortenAddress(txn.buyer)}</td>
            <td class="price">{txn.price}<img class="algos" src="/images/algo-logo.svg" alt="Algos" /></td>
          </tr>
        {/each}
      </table>
    {/if}



</div>