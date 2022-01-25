<script>
  import NftThumbnail from '../elements/NftThumbnail.svelte';
  import App from '../blocks/App.svelte';
  export let nfts = [];
  let currentApp = undefined

  function openApp(nft) {
    currentApp = nft;
  }
  function closeApp() {
    currentApp = undefined;
  }
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
        <NftThumbnail {nft} on:click={() => openApp(nft)} />
      </li>
    {/each}
  </ul>
{/if}

{#if currentApp}
  <App nft={currentApp} {closeApp} />
{/if}
