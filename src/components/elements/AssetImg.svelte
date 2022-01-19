<script>
  import { onMount } from 'svelte';
  import LoadingInline from './LoadingInline.svelte';
  import { gateways } from '../../helpers/ipfs';
  import { fade } from 'svelte/transition';
  export let src;
  export let alt;
  let loading = true;
  let gatewayIndex = 0;
  let hash;

  $: src, loading = true;

  onMount(() => {
    if(src && src.startsWith('ipfs://')) {
      hash = src.replace('ipfs://', '');
      getIpfsSrc();
    }
  })

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
    left: 0;;
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
  <div class="img-wrapper">
    <img 
      on:load={loaded}
      on:error={failed}
      {src} 
      {alt} 
    />
    {#if loading }
      <div class="loader" out:fade={{ duration: 300}}>
        <LoadingInline />
      </div>
    {/if}
  </div>
{/if}