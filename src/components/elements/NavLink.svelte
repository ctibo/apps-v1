<script>
  import { stores } from '@sapper/app';
  export let label = Link;
  export let href;
  const { page } = stores();
  let active = false;
  $: active = $page.path === href;
</script>


<style lang="scss">
  a {
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    &:hover {
      color: var(--blue);
      text-decoration: none;
    }
    &.active {
      color: var(--teal);
    }
  }
</style>

<a 
  class:active 
  {href}
>
  { label }
</a>