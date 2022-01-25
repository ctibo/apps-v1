<script>
	import { onMount } from 'svelte';
	import Scripts from '../components/elements/Scripts.svelte';
	import Frame from '../components/layout/Frame.svelte';
	import nfts from '../lib/nfts';

	onMount(() => {
		nfts.init();
	});

</script>

<style lang="scss" global>
	@import "../styles/global";
</style>

<Frame>
	<slot></slot>
</Frame>

<!-- <Popup /> -->
<Scripts />


