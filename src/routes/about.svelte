<script>
  import vars from '../vars';
  import { shortenAddress } from '../helpers/address';
  import nfts from '../lib/nfts';
  import LoadingInline from '../components/elements/LoadingInline.svelte';
  import QuickLinks from '../components/blocks/QuickLinks.svelte';
  import Schedule from '../components/blocks/Schedule.svelte';
  import MintPrice from '../components/blocks/MintPrice.svelte';
  import Roadmap from '../components/blocks/Roadmap.svelte';
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
  

  
</style>

<div class="content">
  
  <h1 class="page-title">
    About APPs
  </h1>

  <QuickLinks />

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
      Creator Account:
      <a class="text-link" href="https://algoexplorer.io/address/{vars.CREATOR_ACCOUNT}" target="_blank">
        {shortenAddress(vars.CREATOR_ACCOUNT)}
      </a> 
    </li>
  </ul>


  <p>
    APPs (Awesome Profile Pics) are 99 square NFTs living on the Algorand blockchain.
  </p>

  <Roadmap />
 
</div>