<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import '@fontsource/raleway/400.css';
	import '@fontsource/raleway/700.css';
</script>

<div class="flex min-h-screen">
	<SvelteToast />
	<Navigation />
	<div class="flex-1 p-5 flex flex-col items-center">
		<slot />
	</div>
</div>
