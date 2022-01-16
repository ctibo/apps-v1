<script>
	import Scripts from '../components/elements/Scripts.svelte';
	import PhoneFrame from '../components/layout/PhoneFrame.svelte';
</script>

<style lang="scss" global>
	@import "../styles/global";
</style>

<svelte:head>
	<title>APPs - Awesome Profile Pics</title>
</svelte:head>


<PhoneFrame>
	<main>
		<slot></slot>
	</main>
</PhoneFrame>

<!-- <Popup /> -->
<Scripts />


