<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Navigation from '$lib/components/navigation/navigation.svelte';
</script>

<div class="flex min-h-screen">
	<SvelteToast />
	<Navigation />
	<div class="flex-1 p-5 flex flex-col items-center">
		<slot />
	</div>
</div>
