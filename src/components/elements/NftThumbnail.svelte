<script>
  import { fade } from 'svelte/transition';
  import AssetImg from './AssetImg.svelte';
  export let nft = {};
  let loading = true;
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    cursor: pointer;
  }
  .thumbnail {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    border-radius: 15%;
    box-shadow: 0 0.5rem 1rem -0.25rem rgba(0,0,0,0.5);
    :global(.img-wrapper) {
      display: block;
      position: absolute;
      width: 138%;
      height: 138%;
      left: -19%;
      top: -19%;
    }
    :global(.loader) {
      padding: 10% 30%;
    }
  }
  .thumbnail-title {
    font-family: var(--title-font);
    color: var(--lavender);
    text-align: center;
    font-size: clamp(0.5rem, 3vw, 0.925rem);
    line-height: 1;
    font-weight: 300;
    margin: 0.5em 0 0;
  }
  .tag {
    display: inline;
    font-size: clamp(0.375em, 1.75vw, 0.625em);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.125em 0.5em;
    color: var(--dark-purple);
    background: var(--teal);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    transform: translate(-10%, 50%) rotate(-9deg);
    pointer-events: none;
  }
</style>

<article class="wrapper" on:click>
  {#if nft.tag && !loading}
    <span class="tag" transition:fade|local={{ duration: 300}}>
      {nft.tag}
    </span>
  {/if}
  
  <div class="thumbnail">
    <AssetImg src={nft.url} alt={nft.unit} bind:loading />
  </div>
  <h2 class="thumbnail-title">
    {nft.unit}
  </h2>

</article>