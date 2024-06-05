<script>
	import { Button } from '$lib/components/ui/button/index.ts';
	import { Input } from '$lib/components/ui/input/index.ts';
	import * as Table from '$lib/components/ui/table';
	const { client, saveClient } = $props();

	function toggleEdit() {
		client.isEditing = !client.isEditing;
		if (client.isEditing) {
			client.originalName = client.name;
		} else {
			client.name = client.originalName;
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Enter' && client.isEditing) {
			saveClient(client);
		} else if (event.key === 'Escape' && client.isEditing) {
			toggleEdit();
		}
	}
</script>

<Table.Row class="bg-white border-b">
	<Table.Cell class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
		{#if client.isEditing}
			<Input
				type="text"
				placeholder="Name of your client"
				bind:value={client.name}
				on:keydown={handleKeydown}
			/>
		{:else}
			{client.name}
		{/if}
	</Table.Cell>
	<Table.Cell class="px-4 py-2 min-w-[200px]">
		{#if client.isEditing}
			<Button on:click={() => saveClient(client)}>Save</Button>
			<Button on:click={toggleEdit}>Cancel</Button>
		{:else}
			<Button on:click={toggleEdit}>Edit</Button>
		{/if}
	</Table.Cell>
</Table.Row>
