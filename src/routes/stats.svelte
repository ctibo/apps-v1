<script>
  import nfts from '../lib/nfts';
  import NftThumbnail from '../components/elements/NftThumbnail.svelte';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
</script>

<style lang="scss">
  // td.price {
  //   text-align: right;
  // }
  .highest-sales {
    td {
      font-size: clamp(0.875em, 2.5vw, 1em);
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      vertical-align: middle;;
    }
    .unit {
      padding-left: 1em;
    }
    .price {
      text-align: right;
    }
    .thumb {
      width: 4rem;
      :global(.thumbnail-title) {
        display: none;
      }
    }
  }
</style>

<div class="content">
  <h1 class="page-title">
    Stats
  </h1>

  {#if $nfts && ($nfts.loading || $nfts.statsLoading) }
    <LoadingInline />
  {:else}

    {#if $nfts && $nfts.stats.highestSales.length}
      <h2 class="section-title">Highest Valued</h2>

      <table class="highest-sales">
        <tr>
          <th class="thumb">APP</th>
          <th class="unit"></th>
          <th class="price">Amount</th>
        </tr>
        {#each $nfts.stats.highestSales as nft }
          <tr>
            <td class="thumb">
              <NftThumbnail {nft} />
            </td>
            <td class="unit">{nft.unit}</td>
            <td class="price">
              {nft.highestSale}<img class="algos" src="/images/algo-logo.svg" alt="Algos" />
            </td>
          </tr>
        {/each}
    
    
      
    
      </table>
    {/if}

    <!-- <h2 class="section-title">Top Holders</h2> -->
  
  {/if}

</div>