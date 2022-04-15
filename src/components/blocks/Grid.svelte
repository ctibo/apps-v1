<script>
  import NftThumbnail from '../elements/NftThumbnail.svelte';
  export let nfts = [];
</script>

<style lang="scss">
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>

{#if nfts.length}
  <ul>
    {#each nfts as nft (nft.index)}
      <li>
        <NftThumbnail {nft} />
      </li>
    {/each}
  </ul>
{/if}
