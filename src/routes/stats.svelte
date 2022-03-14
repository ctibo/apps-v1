<script>
  import { onMount } from 'svelte';
  import nfts from '../lib/nfts';
  import HighestSales from '../components/blocks/HighestSales.svelte';
  import TopHolders from '../components/blocks/TopHolders.svelte';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  onMount(() => {
    nfts.dispatchUpdate();
  });
</script>

<style lang="scss">

  
</style>

<div class="content">
  <h1 class="page-title">
    Stats
  </h1>

  {#if $nfts && ($nfts.loading || $nfts.statsLoading) }
    <LoadingInline />
  {:else}
    {#key nfts.statsLoading}
      <HighestSales nfts={nfts.stats.highestSales} />
      <TopHolders holders={nfts.stats.topHolders} />
    {/key}
  {/if}

</div>