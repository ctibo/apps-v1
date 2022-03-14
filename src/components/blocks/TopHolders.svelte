<script>
  import { shortenAddress } from '../../helpers/address';
  export let holders = [];
</script>

<style lang="scss">
  td {
    font-size: clamp(0.875em, 2.5vw, 1em);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    vertical-align: middle;;
  }
  .qty {
    text-align: right;
  }
</style>

{#if holders.length}
  <h2 class="section-title">Top holders</h2>

  <table class="highest-sales">
    <tr>
      <th class="address">Holder</th>
      <th class="qty">Amount</th>
    </tr>
    {#each holders as holder (holder.address)}
      <tr>
        <td class="address">{shortenAddress(holder.address)}</td>
        <td class="qty">{holder.nfts.length} APPs</td>
      </tr>
    {/each}

  </table>
{/if}
