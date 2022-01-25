<script>
  import { stores } from '@sapper/app';
  export let label;
  export let href;
  export let strict = false;
  const { page } = stores();
  let active = false;
  $: active = strict ? $page.path === href : $page.path.startsWith(href);
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
  rel="prefetch"
  {href}
  {...$$restProps}
>
  {#if label}
    { label }
  {/if}
  <slot></slot>
</a>