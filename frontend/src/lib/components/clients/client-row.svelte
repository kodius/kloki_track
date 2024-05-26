<script>
	import { Button } from '$lib/components/ui/button/index.ts';
	import { Input } from '$lib/components/ui/input/index.ts';

	const { client, saveClient } = $props();

	function toggleEdit() {
		if (client.isEditing) {
			client.name = client.originalName;
		} else {
			client.originalName = client.name;
		}
		client.isEditing = !client.isEditing;
	}
</script>

<tr>
	<td class="border px-4 py-2">
		{#if client.isEditing}
			<Input type="text" placeholder="Name of your client" bind:value={client.name} />
		{:else}
			{client.name}
		{/if}
	</td>
	<td class="px-4 py-2 min-w-[200px]">
		{#if client.isEditing}
			<Button on:click={() => saveClient(client)}>Save</Button>
			<Button on:click={() => toggleEdit()}>Cancel</Button>
		{:else}
			<Button on:click={() => toggleEdit()}>Edit</Button>
		{/if}
	</td>
</tr>
