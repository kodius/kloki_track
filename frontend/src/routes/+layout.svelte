<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import '@fontsource/raleway/400.css';
	import '@fontsource/raleway/700.css';
</script>

<svelte:head>
	<title>Kloki Time Tracker</title>
	<meta name="description" content="Streamline your T&M tracking Kloki Tracker" />
	<link rel="icon" href="/favicon-32x32.png" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
	/>
</svelte:head>

<div class="flex min-h-screen">
	<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
	<div class="flex flex-col w-full">
		<Navigation />
		<div class="flex-1 flex flex-col items-center">
			<slot />
		</div>
	</div>
</div>

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: auto;
		--toastContainerBottom: 0rem;
		--toastContainerLeft: 0;
	}
</style>
