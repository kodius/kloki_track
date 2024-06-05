<script>
	import SingleLink from './single-link.svelte';
	import { routes } from './routes.js';

	const links = [
		{ href: routes.time_tracker, text: 'Time Tracker' },
		{ href: routes.projects, text: 'Projects' },
		{ href: routes.clients, text: 'Clients' }
	];
</script>

<div class="w-64 bg-gray-50 p-5 shadow-lg">
	<nav>
		<ul>
			{#each links as link}
				<SingleLink href={link.href} text={link.text} />
			{/each}
		</ul>
	</nav>
</div>
