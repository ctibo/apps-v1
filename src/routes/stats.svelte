<script>
  import nfts from '../lib/nfts';
  import Grid from '../components/blocks/Grid.svelte'
  import GridNav from '../components/elements/GridNav.svelte'
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  let currentGrid = '99';
</script>

<style lang="scss">
  .logo {
    margin: 0.5em 0 0;
    img {
      width: 66%;
    }
  }
  .subtitle {
    font-weight: bold;
  }
  .content {
    padding-left: 0;
    padding-right: 0;
  }
 
</style>

<div class="content">
  <h1 class="page-title">
    Stats
  </h1>

  {#if $nfts && $nfts.loading}
    <LoadingInline />
  {:else}

    <h2 class="section-title">Top holders</h2>
  
  {/if}

</div>