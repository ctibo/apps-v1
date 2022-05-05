<script>
  import { onMount, tick } from 'svelte';
  import { shuffle } from 'lodash';
  import { shortenAddress } from '../helpers/address';
  import nfts from '../lib/nfts';
  import NftThumbnail from '../components/elements/NftThumbnail.svelte';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  let winners = [];
  let shuffled = [];
  let track;
  let animating = false;
  
  onMount(() => {
    nfts.dispatchUpdate();
  });

  async function pickWinner() {
    animating = false;
    shuffled = [];
    await tick();
    if (!nfts.all) return;
    const excluded = winners.map(nft => nft.unit);
    excluded.push('APP-?');
    const entries = nfts.all.filter(nft => !excluded.includes(nft.unit))
    shuffled = shuffle(entries);
    console.log(shuffled);
    setTimeout(() => {
      winners = [...winners, shuffled[50]];
    }, 7000);
  }

  $: if (track) animateTrack();
  async function animateTrack(){
    animating = false;
    requestAnimationFrame(() => {
      animating = true;
    });
  }
</script>

<style lang="scss">
  .centered {
    text-align: center;
  }
  .spinner {
    text-align: center;
    margin: 3rem;
  }
  .spinner-wrapper {
    border: 1px solid var(--border-color);
    display: inline-block;
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    position: relative;
    &:after {
      content: '?';
      color: var(--border-color);
      font-family: var(--title-font);
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      font-size: 12rem;
      line-height: 0;
      font-weight: bold;
      text-indent: -0.25em;
    }
  }
  .entry {
    display: inline-block;
    padding: 3em;
    width: 20rem;
    :global(article) {
      width: 100%;
    }
  }
  .track {
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(0);
    &.animating {
      transition: transform 7s cubic-bezier(.41,.9,.6,1.01);
      transform: translateX(-1000rem);
    }
  }
  td {
    font-size: clamp(0.875em, 2.5vw, 1em);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    vertical-align: middle;;
  }
  .thumb {
    width: 4rem;
    :global(.thumbnail-title) {
      display: none;
    }
  }
  .holder {
    padding-left: 2em;
  }
</style>

<div class="content">
  <h1 class="page-title">
    Holders Giveaway
  </h1>

  {#if $nfts && ($nfts.loading || $nfts.statsLoading) }
    <LoadingInline />
  {:else}
    {#key nfts.statsLoading}

      <div class="centered">
        <button class="btn" on:click|preventDefault={pickWinner}>
          Pick a winner
        </button>
      </div>
    
      <div class="spinner">
        <div class="spinner-wrapper">

          {#if shuffled.length } 
            <ul class="track" class:animating bind:this={track}>
              {#each shuffled as nft (nft.index)}
                <li class="entry">
                  <NftThumbnail {nft} lazyload={false} />
                </li>
              {/each}
            </ul>
          {/if}

        </div>
      </div>

      {#if winners.length}
        <table class="highest-sales">
          <tr>
            <th class="thumb">APP</th>
            <th class="holder">Winner</th>
          </tr>
          {#each winners as nft (nft.index)}
            <tr>
              <td class="thumb">
                <NftThumbnail {nft} lazyload={false} />
              </td>
              <td class="holder">
                {shortenAddress(nft.holder)}
              </td>
            </tr>
          {/each}

        </table>
      {/if}
    {/key}
  {/if}

</div>