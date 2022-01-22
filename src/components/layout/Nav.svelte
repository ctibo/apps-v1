<script>
  import { navBarHeight } from '../../stores/ui'
  import NavLink from '../elements/NavLink.svelte';
</script>

<style lang="scss">
  @import '../../styles/mixins';
  @import '../../styles/variables';
  nav {
    width: 100%;
    padding: 1em;
    height: var(--navbar-height);
    background: var(--dark-blue);
    display: block;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
  }
</style>


<nav role="navigation" bind:clientHeight={$navBarHeight}>
  <ul>
    <li>
      <NavLink href="/about">About</NavLink>
    </li>
    <li>
      <NavLink href="/">The APPs</NavLink>
    </li>
    <li>
      <NavLink href="/roadmap">Roadmap</NavLink>
    </li>
  </ul>
</nav>