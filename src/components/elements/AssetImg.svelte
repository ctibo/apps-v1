<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { gateways, getHash } from '../../helpers/ipfs';
  import LoadingInline from './LoadingInline.svelte';
  import Viewport from '../../lib/viewport';
  export let src;
  export let alt;
  export let loading = true;
  export let lazyload = true;
  let wrapperElement;
  let gatewayIndex = 0;
  let hash;
  let visible = !lazyload;
  $: src, loading = true;

  onMount(() => {
    if(src && src.startsWith('ipfs://')) {
      hash = getHash(src);
      getIpfsSrc();
    }
    Viewport.add(wrapperElement, isVisible);
  })

  onDestroy(() => {
    Viewport.remove(wrapperElement);
  });
 
  function getIpfsSrc() {   
    if(!hash) return;
    src = gateways[gatewayIndex].replace(':hash', hash);
  }

  function loaded() {
    loading = false;
  }
  function failed() {
    gatewayIndex++;
    getIpfsSrc();
  }
  function isVisible() {
    visible = true;
  }


</script>

<style lang="scss">
  .img-wrapper {
    position: relative;
    line-height: 0;
  }
  img {
    display: block;
    width: 100%;
  }
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: var(--dark-blue);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 10%;
  }
</style>

{#if src}
  <div 
    class="img-wrapper"
    bind:this={wrapperElement}
  >
    <img
      on:load={loaded}
      on:error={failed}
      src={visible ? src : undefined} 
      {alt}
    />
    {#if !visible || loading }
      <div class="loader" out:fade|local={{ duration: 300}}>
        <LoadingInline />
      </div>
    {/if}
  </div>
{/if}