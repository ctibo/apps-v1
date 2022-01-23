<script>
  import vars from '../vars';
  import { shortenAddress } from '../helpers/address'
</script>

<style lang="scss">
  .infos {
    padding: 1.5em 0;
    margin-bottom: 1.5em;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
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
        Creator Account:
        <a class="text-link" href="https://www.nftexplorer.app/collection?creator={vars.CREATOR_ACCOUNT}" target="_blank">
          {shortenAddress(vars.CREATOR_ACCOUNT)}
        </a> 
      </li>
      <li>
        Twitter:
        <a class="text-link" href="https://twitter.com/apps_nft" target="_blank">
          @apps_nft
        </a> 
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
    Drops will be announced on Twitter.
  </p>

  <p>
    Mint price will go as follow:
  </p>
  <ul class="list">
    <li>
      #01-24 ➞ 33A each
    </li>
    <li>
      #25-48 ➞ 44A each
    </li>
    <li>
      #49-72 ➞ 55A each
    </li>
    <li>
      #73-99 ➞ 66A each
    </li>
  </ul> 

</div>