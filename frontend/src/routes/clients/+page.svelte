
<script lang="ts">
  import type { PageData } from './$types';

  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { client as graphqlClient } from '$lib/graphql-client';

  const { data } = $props()
  let clients = $state(data.clients.map(client => ({ ...client, isEditing: false })));

  function toggleEdit(client) {
    if (client.isEditing) {
      client.name = client.originalName; // Reset to original name on cancel
    } else {
      client.originalName = client.name; // Store the current name when entering edit mode
    }
    client.isEditing = !client.isEditing;
  }

  async function saveClient(client) {
    try {
      const mutation = `
        mutation updateClient($id: ID!, $name: String) {
          updateClient(id: $id, name: $name) {
            id
            name
          }
        }
      `;
      await graphqlClient.request(mutation, { id: client.id, name: client.name });
      client.isEditing = false;
      clients = [...clients]; // Trigger reactivity
    } catch (error) {
      console.error('Error saving client:', error);
      // Optionally, you can show an error message to the user
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
           <Input
                    type="text"
                    bind:value={client.name}
                  />
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

