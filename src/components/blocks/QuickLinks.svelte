<script>
  import vars from '../../vars';
</script>

<style lang="scss">
  .tiles  {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5em;
    margin-bottom: 1em;
    text-align: center;
    span, 
    .text-link {
      display: block;
      font-size: clamp(0.5em, 2vw, 0.75em);
    }
  }
  .tile {
    display: block;
    background: var(--dark-gray);
    border-radius: 0.75em;
    box-shadow: 0 0 2em -0.75em var(--purple);
    transition: box-shadow 240ms ease;
    &:hover {
      box-shadow: 0 0 2em -0.25em var(--purple);
    }
    img {
      width: 75%;
      margin: 12.5%;
    }
    margin-bottom: 1em;
  }
</style>


<ul class="tiles">
  <li>
    <a class="tile" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
      <img src="/images/nftexplorer-logo.png" alt="NFT Explorer" />
    </a> 
    <span>
      Stats
    </span>
    <a class="text-link" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
      NFT Explorer
    </a> 
  </li>

  <li>
    <a class="tile" href="https://www.randgallery.com/collection/apps-awesome-profile-pics" target="_blank">
      <img src="/images/rand-logo.png" alt="Rand Gallery" />
    </a> 
    <span>
      Reg drops
    </span>
    <a class="text-link" href="https://www.randgallery.com/collection/apps-awesome-profile-pics" target="_blank">
      Rand Gallery
    </a>
  </li>

  <li>
    <a class="tile" href="https://algoxnft.com/collection/apps" target="_blank">
      <img src="/images/algoxnft-logo.png" alt="ALGOxNFT" />
    </a>
    <span>
      Auctions
    </span>
    <a class="text-link" href="https://algoxnft.com/collection/apps" target="_blank">
      ALGOxNFT
    </a>
  </li>

</ul>
