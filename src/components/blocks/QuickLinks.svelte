<script>
  import vars from '../../vars';
</script>

<style lang="scss">
  @import '../../styles/mixins';
  .tiles  {
    display: grid;
    grid-gap: 0.5em;
    margin-bottom: 1em;
    text-align: center;
    span, 
    .text-link {
      display: block;
      font-size: clamp(0.5em, 2vw, 0.75em);
    }
  }

  .big-tiles {
    grid-template-columns: repeat(4, 1fr);
  }
  .large-tiles {
    grid-template-columns: repeat(3, 1fr);
  }
  .tile {
    display: block;
    margin-top: 0.25em;
    background: var(--dark-gray);
    border-radius: 0.75em;
    box-shadow: 0 0 2em -0.75em var(--purple);
    transition: box-shadow 240ms ease;
    margin-bottom: 0.75em;
    &:hover {
      box-shadow: 0 0 2em -0.25em var(--purple);
    }
    img {
      width: 75%;
      margin: 12.5%;
      
    }
    
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
    .fa-instagram {
      color: #e95d8a;
    }
  }

  @include x-small-screen() {
    .tile img {
      width: 3em;
      max-width: 80%;
      margin: 5%;
    }
    .big-tiles {
      margin-bottom: 0.25em;
      .tile {
        margin: 0;
      }
    }
    .tiles .text-link {
      display: none;
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
    <a class="tile" href="https://www.asalytic.app/collections/APPs%20-%20Awesome%20Profile%20Pics" target="_blank">
      <img src="/images/asalytic-logo.png" alt="Asalytic" />
    </a> 
    <a class="text-link" href="https://www.asalytic.app/collections/APPs%20-%20Awesome%20Profile%20Pics" target="_blank">
      Asalytic
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
    <a class="tile badge" href="https://www.instagram.com/apps_nft/" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
    <a class="text-link" href="https://www.instagram.com/apps_nft/" target="_blank">
      Instagram
    </a>
  </li>

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


