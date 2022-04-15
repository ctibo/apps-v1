<script>
  import { stores } from '@sapper/app';
  import { queryUrl } from '../../helpers/strings';
  export let currentGrid = '99';
  const { page } = stores();
  $: currentGrid = $page.query.nfts || '99'; 
</script>

<style lang="scss">
  ul {
    display: flex;
    font-size: clamp(0.75rem, 3vw, 1rem);
    flex-flow: row nowrap;
    border-bottom: 2px solid var(--border-color);
    margin: 0.875em 0 1.5em;
  }
  li {
    width: 50%;
  }
  a {
    width: 100%;
    color: var(--blue);
    display: inline-block;
    font-size: 1em;
    padding: 0.5em 1em;
    text-align: center;
    text-transform: uppercase;
    background: none;
    border: none;
    outline: none;
    &:hover {
      text-decoration: none;
    }
    &.active {
      color: var(--white);
      font-weight: bold;
    }
  }
</style>


<nav>
  <ul>
    <li>
      <a href={queryUrl({nfts: '99'})}
        class:active={currentGrid === '99'}
      >
        99 APPs
      </a>
    </li>
    <li>
      <a
        href={queryUrl({nfts: 'collabs'})}
        class:active={currentGrid === 'collabs'} 
      >
        Collabs
      </a>
    </li>
  </ul>
</nav>