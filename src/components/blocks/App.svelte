<script>
  import { scale } from 'svelte/transition';
  import { shortenAddress } from '../../helpers/address';
  import vars from '../../vars';
  import AssetImg from '../elements/AssetImg.svelte';
  export let closeApp;
  export let nft = {};

  function handleKeydown(event) {
    if(event.keyCode === 27) closeApp();
	}
</script>

<style lang="scss">
  @import '../../styles/variables';
  .wrapper {
    position: absolute;
    z-index: 3;
    left: 1%;
    right: 1%;
    top: 0;
    bottom: var(--navbar-height);
    padding: var(--container-padding);
    overflow: auto;
  }
  .window {
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 0.5rem;
    background: var(--dark-blue);
    box-shadow: 0 0 4rem 0 rgba($purple, 0.5);
  }
  .content {
    flex-grow: 3;
  }
  .top-bar {
    background: var(--dark-blue);
    text-align: right;
    padding: 0.25em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    .app-title {
      margin: 0 0.5em;
      color: var(--light-blue);
    }
    .close-btn {
      outline: none;
      border: none;
      padding: 0.25em 1em;
      background: none;
      color: var(--light-blue);
      &:hover {
        color: var(--white);
      }
    }
  }
  .tag {
    display: inline-block;
    font-size: 0.625em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.125em 0.5em;
    vertical-align: text-top;
    color: var(--dark-purple);
    background: var(--teal);
  }
</style>

<svelte:window on:keydown={handleKeydown}/>
<article class="wrapper" transition:scale={{ duration: 300, start: 0.8 }}>
  <div class="window">

    <div class="top-bar">
      <span class="app-title">
        {nft['unit-name']}
      </span>
      <button class="close-btn" on:click={closeApp}>
        <i class="fas fa-times"></i>
      </button>
    </div>

    <AssetImg src={nft.url} alt={nft['unit-name']} />

    <div class="content">

      <ul class="infos">
        <li>
          <strong>{nft['unit-name']}</strong>
        </li>
        <li>
          ASA ID:
          <a class="text-link" href="https://www.nftexplorer.app/asset/{nft.index}" target="_blank">
            {nft.index}
          </a> 
        </li>
        <li>
          Holder: {shortenAddress(nft.holder)}
          {#if nft.holder === vars.CREATOR_ACCOUNT}
            <span class="tag">Creator</span>
          {/if}
        </li>
      </ul>

    </div>
  
  </div>
</article>