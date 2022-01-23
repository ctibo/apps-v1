<script>
  import { onMount } from 'svelte';
  import { getNfts } from '../lib/nfts';
  import Grid from '../components/blocks/Grid.svelte'
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  let nfts = [];
  let loading = false;
  onMount(async () => {
    loading = true;
    nfts = await getNfts();
    loading = false;
  })

</script>

<style lang="scss">
  .logo {
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

  {#if loading}
    <LoadingInline />
  {:else}
    {#key nfts.length}
      <Grid {nfts} />
    {/key}
  {/if}

</div>