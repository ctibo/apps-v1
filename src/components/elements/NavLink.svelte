<script>
  import { stores } from '@sapper/app';
  export let label;
  export let href;
  const { page } = stores();
  let active = false;
  $: active = $page.path === href;
</script>


<style lang="scss">
  a {
    color: var(--blue);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    &:hover {
      color: var(--blue);
      text-decoration: none;
    }
    &.active {
      color: var(--white);
    }
  }
</style>

<a 
  class:active 
  {href}
  {...$$restProps}
>
  {#if label}
    { label }
  {/if}
  <slot></slot>
</a>