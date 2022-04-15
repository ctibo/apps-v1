<script>
  import { tick } from 'svelte';
  import { stores, goto } from '@sapper/app';
  import { scale } from 'svelte/transition';
  import { shortenAddress } from '../../helpers/address';
  import { queryUrl } from '../../helpers/strings';
  import { getHash } from '../../helpers/ipfs';
  import nfts from '../../lib/nfts';
  import vars from '../../vars';
  import AssetImg from '../elements/AssetImg.svelte';
  const { page } = stores();
  let id;
  let nft;
  let active = false;
  let backUrl = '#'; 

  $: $page, urlChanged();
  $: if ($nfts && !$nfts.loading) urlChanged();

  function urlChanged() {
    const { query } = $page;
    if (active && !query.id) return close();
    backUrl = queryUrl({ id: undefined })
    if (query.id && id !== Number(query.id)) return open();
  }

  function open() {
    const { query } = $page;
    id = Number(query.id);
    nft = nfts.all.find(nft => nft.index === id);
    if (!nft) return id = undefined;
    active = true;
  }

  async function close () {
    if (!active) return;
    active = false;
    nft = undefined;
    id = undefined;
    goto(backUrl);
  }


  function handleKeydown(event) {
    if (!active) return;
    if(event.keyCode === 27) close();
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
    border: 1px solid var(--border-color);
    box-shadow: 0 0 1rem 0 var(--dark-purple),
                0 0 3rem 0 var(--dark-purple);
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
  .extra-link {
    margin-top: 1em;
  }
</style>

<svelte:window on:keydown={handleKeydown}/>

{#if nft && active}
  <article class="wrapper" transition:scale={{ duration: 300, start: 0.8 }}>
    <div class="window">

      <div class="top-bar">
        <span class="app-title">
          {nft.unit}
        </span>
        <button class="close-btn" on:click={close}>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <AssetImg src={nft.url} alt={nft.unit} lazyload={false}/>

      <div class="content">

        <ul class="infos">
          <li>
            <strong>{nft.unit}</strong>
          </li>
          <li>
            ASA ID:
            <a class="text-link" href="https://www.nftexplorer.app/asset/{nft.index}" target="_blank">
              {nft.index}
            </a> 
          </li>
          <li>
            Original file:
            <a class="text-link ipfs-hash" href="https://ipfs.io/ipfs/{getHash(nft.url)}" target="_blank">
              {shortenAddress(getHash(nft.url)).toUpperCase()}
            </a> 
          </li>
          <li>
            Holder: {shortenAddress(nft.holder)}
            {#if nft.holder === vars.CREATOR_ACCOUNT}
              <span class="tag">Creator</span>
            {/if}
          </li>
          {#if nft.link}
            <li class="extra-link">
              <a class="btn" href={nft.link.href} target="_blank">
                {nft.link.label}
              </a>
            </li>
          {/if}
        </ul>

      </div>
    
    </div>
  </article>
{/if}