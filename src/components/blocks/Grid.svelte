<script>
  import AssetImg from '../elements/AssetImg.svelte';
  export let nfts = [];
  console.log(nfts);
</script>

<style lang="scss">
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
  .img-wrapper {
    overflow: hidden;
    border-radius: 15%;
    box-shadow: 0 0.5rem 1rem -0.25rem rgba(0,0,0,0.5);
    :global(img) {
      display: block;
      width: 136%;
      margin: -18%;
    }
  }
</style>

{#if nfts.length}
<ul>
  {#each nfts as nft (nft.index)}
    <li>
      <div class="img-wrapper">
        <AssetImg src={nft.url} alt={nft['unit-name']} />
      </div>
    </li>
  {/each}
</ul>
{/if}

