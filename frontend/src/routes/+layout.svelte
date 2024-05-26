<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="flex min-h-screen">
	<SvelteToast />
	<div class="w-64 bg-gray-50 p-5 shadow-lg">
		<nav>
			<ul>
				<li class="mb-4"><a href="/" class="text-gray-600 hover:text-gray-900">Home</a></li>
				<li class="mb-4"><a href="/projects" class="text-gray-600 hover:text-gray-900">Projects</a></li>
				<li class="mb-4">
					<a href="/clients" class="text-gray-600 hover:text-gray-900">Clients</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="flex-1 p-5 flex flex-col items-center">
		<slot />
	</div>
</div>
