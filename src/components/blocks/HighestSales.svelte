<script>
  import NftThumbnail from '../elements/NftThumbnail.svelte';
  export let nfts = [];
</script>

<style lang="scss">
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
</style>

{#if nfts.length}
  <h2 class="section-title">Most Valued</h2>

  <table class="highest-sales">
    <tr>
      <th class="thumb">APP</th>
      <th class="unit"></th>
      <th class="price">Amount</th>
    </tr>
    {#each nfts as nft (nft.index)}
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
