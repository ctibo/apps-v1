<script>
  export let currentGrid = '99';
</script>

<style lang="scss">
  ul {
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 2px solid var(--border-color);
    margin: 1em 0 1.5em;
  }
  li {
    width: 50%;
  }
  button {
    width: 100%;
    color: var(--blue);
    display: inline-block;
    padding: 0.5em 1em;
    text-align: center;
    text-transform: uppercase;
    background: none;
    border: none;
    outline: none;
    &.active {
      color: var(--white);
      font-weight: bold;
    }
  }
</style>


<nav>
  <ul>
    <li>
      <button
        class:active={currentGrid === '99'} 
        on:click={() => currentGrid = '99'}
      >
        99 APPs
      </button>
    </li>
    <li>
      <button
        class:active={currentGrid === 'collabs'} 
        on:click={() => currentGrid = 'collabs'}
      >
        Collabs
      </button>
    </li>
  </ul>
</nav>