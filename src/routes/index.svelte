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
    text-align: center;
    margin: 1em 0;
    img {
      width: 66%;
    }
    span {
      margin-top: 0.5em;
      display: block;
    }
  }
 
</style>

<div class="container">
  
  <h1 class="logo page-title">
    <img src="/images/apps-logo.png" alt="Awesome Profile Pics" />
    <span>Awesome Profile Pics</span>
  </h1>

  {#if loading}
    <LoadingInline />
  {:else}
    {#key nfts.length}
      <Grid {nfts} />
    {/key}
  {/if}

</div>