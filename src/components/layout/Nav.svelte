<script>
  import { navBarHeight } from '../../stores/ui'
  import NavLink from '../elements/NavLink.svelte';
</script>

<style lang="scss">
  @import '../../styles/mixins';
  @import '../../styles/variables';
  nav {
    width: 100%;
    padding: 0 1em;
    height: var(--navbar-height);
    background: var(--dark-blue);
    display: block;
    :global(a) {
      font-size: 1.375em;
      transform: scale(0.75);
      transition: transform 240ms var(--swing);
      @include min-width($breakpoint-sm) {
        font-size: 1.75em;
      }
    }
    :global(a.active) {
      transform: scale(1);
    }
  }
  ul {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
  }
  li {
    display: block;
    flex-grow: 1;
    text-align: center;
  }
</style>


<nav role="navigation" bind:clientHeight={$navBarHeight}>
  <ul>
    <li>
      <NavLink href="/about" title="About">
        <i class="fas fa-info-circle"></i>
      </NavLink>
    </li>
    <li>
      <NavLink href="/" title="The Apps" strict={true}>
        <i class="fas fa-th"></i>
      </NavLink>
    </li>
    <li>
      <NavLink href="/roadmap" title="Roadmap">
        <i class="fas fa-map"></i>
      </NavLink>
    </li>
  </ul>
</nav>