<script>
  import vars from '../vars';
  import { shortenAddress } from '../helpers/address';
  import nfts from '../lib/nfts';
  import LoadingInline from '../components/elements/LoadingInline.svelte'
</script>

<style lang="scss">
  .infos {
    padding: 1.5em 0;
    margin-bottom: 1.5em;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    :global(.loading) {
      font-size: 0.5em;
      width: 4em;
      margin: 0.25em 0;
      display: inline-block;
    }
  }
  .algos {
    display: inline-block;
    width: auto;
    font-size: 0.625em;
    height: 1em;
    margin-left: 0.125em;
    vertical-align: baseline;
  }

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

<div class="content">
  
  <h1 class="page-title">
    About APPs
    <span class="subtitle">
      They're profile pics, <br/>
      and they're awesome
    </span>
  </h1>


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


  <ul class="infos">

    <li>
      Minted: 
      {#if $nfts && $nfts.loading}
        <LoadingInline />
      {:else}
        {nfts.stats.minted}/99
      {/if} 
    </li>

    <li>
      Twitter:
      <a class="text-link" href="https://twitter.com/apps_nft" target="_blank">
        @apps_nft
      </a> 
    </li>

    <li>
      Creator Account:
      <a class="text-link" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
        {shortenAddress(vars.CREATOR_ACCOUNT)}
      </a> 
    </li>

    
  </ul>


  <p>
    APPs (Awesome Profile Pics) is an NFT project composed of 99 uniquely hand-drawn NFTs (1/1) on Algorand.
    Special collabs will be added to those 99 original NFTs.
  </p>

  <p>
    NFTs will be dropped 3 at a time. 
    The drops don't follow a predefined schedule. 
    Drops will be announced on Twitter a couple hours upfront.
  </p>

  <p>
    Mint price will go as follow:
  </p>
  <ul class="list">
    <li>
      #01-24 ➞ 33<img class="algos" src="/images/algo-logo.svg" alt="Algos" />
    </li>
    <li>
      #25-48 ➞ 44<img class="algos" src="/images/algo-logo.svg" alt="Algos" />
    </li>
    <li>
      #49-72 ➞ 55<img class="algos" src="/images/algo-logo.svg" alt="Algos" />
    </li>
    <li>
      #73-99 ➞ 66<img class="algos" src="/images/algo-logo.svg" alt="Algos" />
    </li>
  </ul> 

</div>