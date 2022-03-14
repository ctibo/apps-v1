<script>
  export let total = 0;
  export let distribution = [];
</script>

<style lang="scss">
  .content-title {
    margin-top: 1em;
    text-align: left;
  }
  tr {
    position: relative;
    z-index: 1;
    .bg{
      position: absolute;
      top: 1px;
      left: 0;
      bottom: 0;
      z-index: -1;
      background: var(--dark-blue);
    }
  }
  td {
    font-size: clamp(0.875em, 2.5vw, 1em);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    vertical-align: middle;
  }
  .segment .nfts {
    padding-left: 0.5em;
  }
  .holders {
    text-align: right;
  }

</style>

{#if distribution.length}
  <h2 class="section-title">Distribution</h2>

  <h3 class="content-title">
    Total holders: {total}
  </h3>

  <table class="highest-sales">
    <tr>
      <th class="nfts">NFTs</th>
      <th class="holders">Holders</th>
    </tr>
    {#each distribution as segment (segment.nftsQty)}
      <tr class="segment">
        <td class="nfts">{segment.nftsQty} APP{segment.nftsQty>1?'s':''}</td>
        <td class="holders">
          {segment.holdersQty} Holder{segment.holdersQty>1?'s':''} ({Math.round(segment.ratio*1000)/10}%)
          <div class="bg" style="width: {Math.round(segment.ratio*1000)/10}%" />
        </td>
      </tr>
    {/each}

  </table>
{/if}
