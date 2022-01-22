<script>
  import AssetImg from './AssetImg.svelte';
  export let nft = {};
</script>

<style lang="scss">
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
  a {
    &:hover {
      text-decoration: none;
    }
  }
</style>

<article class="wrapper">
  <a href={`https://www.nftexplorer.app/asset/${nft.index}`} target="_blank">
    <div class="thumbnail">
      <AssetImg src={nft.url} alt={nft['unit-name']} />
    </div>
    <h2 class="thumbnail-title">
      {nft['unit-name']}
    </h2>
  </a>
</article>