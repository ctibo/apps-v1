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
</style>

<div class="content">
  
  <h1 class="page-title">
    About APPs
    <span class="subtitle">
      They're profile pics, <br/>
      and they're awesome
    </span>
  </h1>

  <div class="infos">
    <ul>
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
      <li>
        Minted: 
        {#if $nfts && $nfts.loading}
          <LoadingInline />
        {:else}
          {nfts.stats.minted}/99
        {/if} 
      </li>
    </ul>
  </div>

  <p>
    APPs (Awesome Profile Pics) is an NFT project composed of 99 uniquely hand-drawn NFTs (1/1) on Algorand.
    Special collabs will be added to those 99 original NFTs.
  </p>

  <p>
    The NFTs will be dropped 3 at a time. 
    The drops exact time will never be the same to try to accomodate collectors from all timezones.
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