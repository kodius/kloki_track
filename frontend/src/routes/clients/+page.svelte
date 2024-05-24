<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { getClients, updateClient } from '$lib/stores/clientsStore.svelte';

	let clients = getClients();
	let localClients = $state([]);

	$effect(() => {
		localClients = clients.map((client) => ({ ...client, isEditing: false }));
	});

	function toggleEdit(client) {
		if (client.isEditing) {
			client.name = client.originalName;
		} else {
			client.originalName = client.name;
		}
		client.isEditing = !client.isEditing;
	}

	async function saveClient(client) {
		await updateClient(client);
		localClients = localClients.map((c) =>
			c.id === client.id ? { ...client, isEditing: false } : c
		);
	}
</script>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th class="px-4 py-2 text-left">Name</th>
			<th class="px-4 py-2 text-left">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each localClients as client}
			<tr>
				<td class="border px-4 py-2">
					{#if client.isEditing}
						<Input type="text" bind:value={client.name} />
					{:else}
						{client.name}
					{/if}
				</td>
				<td class="border px-4 py-2">
					{#if client.isEditing}
						<Button on:click={() => saveClient(client)}>Save</Button>
						<Button on:click={() => toggleEdit(client)}>Cancel</Button>
					{:else}
						<Button on:click={() => toggleEdit(client)}>Edit</Button>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
