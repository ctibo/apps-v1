<script>
  export let src;
  export let alt;
  
  if(src && src.startsWith('ipfs://')) {
    src = src.replace('ipfs://', 'https://ipfs.io/ipfs/')
  }

</script>

<style lang="scss">
  img {
    width: 100%;
  }
</style>

{#if src}
  <img {src} {alt} />
{/if}