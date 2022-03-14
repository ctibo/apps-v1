<script>
  import { onMount } from 'svelte';
  import nfts from '../lib/nfts';
  import HighestSales from '../components/blocks/HighestSales.svelte';
  import HoldersDistribution from '../components/blocks/HoldersDistribution.svelte';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  onMount(() => {
    nfts.dispatchUpdate();
  });
</script>

<style lang="scss">

  
</style>

<div class="content">
  <h1 class="page-title">
    Awesome Stats
  </h1>

  {#if $nfts && ($nfts.loading || $nfts.statsLoading) }
    <LoadingInline />
  {:else}
    {#key nfts.statsLoading}
      <HoldersDistribution total={nfts.stats.totalHolders} distribution={nfts.stats.holdersDistribution} />
      <HighestSales nfts={nfts.stats.highestSales} />
    {/key}
  {/if}

</div>