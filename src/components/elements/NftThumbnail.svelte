<script>
  import { fade } from 'svelte/transition';
  import AssetImg from './AssetImg.svelte';
  export let nft = {};
  let loading = true;
</script>

<style lang="scss">
  .wrapper {
    position: relative;
  }
  .thumbnail {
    overflow: hidden;
    border-radius: 15%;
    box-shadow: 0 0.5rem 1rem -0.25rem rgba(0,0,0,0.5);
    :global(.img-wrapper) {
      display: block;
      width: 136%;
      margin: -18%;
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
    display: inline-block;
    font-size: 0.625em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.125em 0.5em;
    color: var(--dark-purple);
    background: var(--teal);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    transform: translate(-10%, 50%) rotate(-12deg);
    pointer-events: none;
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
</style>

<article class="wrapper">
  {#if nft.tag && !loading}
    <span class="tag" transition:fade={{ duration: 300}}>
      {nft.tag}
    </span>
  {/if}
  <a href={`https://www.nftexplorer.app/asset/${nft.index}`} target="_blank">
    <div class="thumbnail">
      <AssetImg src={nft.url} alt={nft['unit-name']} bind:loading />
    </div>
    <h2 class="thumbnail-title">
      {nft['unit-name']}
    </h2>
  </a>
</article>