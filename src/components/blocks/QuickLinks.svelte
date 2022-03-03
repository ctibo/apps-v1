<script>
  import vars from '../../vars';
</script>

<style lang="scss">
  .tiles  {
    display: grid;
    grid-gap: 1.5em;
    margin-bottom: 1em;
    text-align: center;
    span, 
    .text-link {
      display: block;
      font-size: clamp(0.5em, 2vw, 0.75em);
    }
  }
  .big-tiles {
    grid-template-columns: repeat(3, 1fr);
  }
  .large-tiles {
    grid-template-columns: repeat(2, 1fr);
  }
  .tile {
    display: block;
    margin-top: 0.25em;
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

  .badge {
    padding: 10%;
    i {
      font-size: 2em;
      display: inline-block;
      line-height: 1;
      vertical-align: middle;
    }
    .fa-twitter {
      color: #56cfff;
    }
    .fa-discord {
      color: #ad7bff;
    }
  }
</style>


<ul class="tiles big-tiles">
  <li>
    <a class="tile" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
      <img src="/images/nftexplorer-logo.png" alt="NFT Explorer" />
    </a> 
    <a class="text-link" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
      NFT Explorer
    </a> 
  </li>

  <li>
    <a class="tile" href="https://www.randgallery.com/collection/apps-awesome-profile-pics" target="_blank">
      <img src="/images/rand-logo.png" alt="Rand Gallery" />
    </a> 
    <a class="text-link" href="https://www.randgallery.com/collection/apps-awesome-profile-pics" target="_blank">
      Rand Gallery
    </a>
  </li>

  <li>
    <a class="tile" href="https://algoxnft.com/collection/apps" target="_blank">
      <img src="/images/algoxnft-logo.png" alt="ALGOxNFT" />
    </a>
    <a class="text-link" href="https://algoxnft.com/collection/apps" target="_blank">
      ALGOxNFT
    </a>
  </li>
</ul>



<ul class="tiles large-tiles">
  <li>
    <a class="tile badge" href="https://twitter.com/apps_nft" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
    <a class="text-link" href="https://twitter.com/apps_nft" target="_blank">
      Twitter
    </a>
  </li>

  <li>
    <a class="tile badge" href="https://discord.gg/8JFAbK6ktp" target="_blank">
      <i class="fab fa-discord"></i>
    </a>
    <a class="text-link" href="https://discord.gg/8JFAbK6ktp" target="_blank">
      Discord
    </a>
  </li>
  
</ul>


