<script lang="ts">

  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { client as graphqlClient } from '$lib/graphql-client';

  import type { Client } from '$lib/gql/generated/graphql';
  import { UpdateClientDocument } from "$lib/gql/generated/graphql";

  const { data } = $props() as { data: {clients: Client[]}  };

  let clients = $state(data.clients.map(client => ({ ...client, isEditing: false })));

  function toggleEdit(client: any) {
    if (client.isEditing) {
      client.name = client.originalName; // Reset to original name on cancel
    } else {
      client.originalName = client.name; // Store the current name when entering edit mode
    }
    client.isEditing = !client.isEditing;
  }

  async function saveClient(client: any) {
    try {
      await graphqlClient.request(UpdateClientDocument , { id: client.id, name: client.name });
      client.isEditing = false;
      clients = [...clients]; // Trigger reactivity
    } catch (error) {
      console.error('Error saving client:', error);
    }
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
		{#each clients as client}
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
