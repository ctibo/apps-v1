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

<svelte:head>
	<title>APPs - Awesome Profile Pics</title>
</svelte:head>


<Frame>
	<slot></slot>
</Frame>

<!-- <Popup /> -->
<Scripts />


