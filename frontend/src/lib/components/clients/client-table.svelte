<script>
	import ClientRow from '$lib/components/clients/client-row.svelte';

	const { clients, saveClient } = $props();
</script>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th class="px-4 py-2 text-left">Name</th>
			<th class="px-4 py-2 text-left w-1/5">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each clients as client}
			<ClientRow {client} {saveClient} />
		{/each}
	</tbody>
</table>
