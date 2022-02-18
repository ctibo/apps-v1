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
  <h1 class="logo page-title">
    <img src="/images/apps-logo.png" alt="Awesome Profile Pics" />
    <span class="subtitle">Awesome Profile Pics</span>
  </h1>

  {#if $nfts && $nfts.loading}
    <LoadingInline />
  {:else}

    <GridNav bind:currentGrid />

    {#if currentGrid === '99'}
      <Grid nfts={nfts.gen1} />
    {:else if currentGrid === 'collabs'}
      <h2 class="content-title">
        Starting Feb 21
      </h2>
    {/if}
  
  {/if}

</div>