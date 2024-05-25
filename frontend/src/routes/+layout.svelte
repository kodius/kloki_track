<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="flex min-h-screen">
	<SvelteToast />
	<div class="w-64 bg-gray-200 p-5 shadow-lg">
		<nav>
			<ul>
				<li class="mb-4"><a href="/" class="text-blue-500 hover:text-blue-700">Home</a></li>
				<li class="mb-4">
					<a href="/clients" class="text-blue-500 hover:text-blue-700">Clients</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="flex-1 p-5 flex flex-col items-center">
		<slot />
	</div>
</div>
