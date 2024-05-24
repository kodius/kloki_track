<script context="module" lang="ts">
  import { client as graphqlClient } from '$lib/graphql-client';
  import { GetClientsDocument, UpdateClientDocument } from '$lib/gql/generated/graphql';
  import type { Client } from '$lib/gql/generated/graphql';

  let clients = $state<Client[]>([]);

  export async function fetchClients() {
    console.log("FETCH")
    try {
      const response = await graphqlClient.request(GetClientsDocument);
      clients.splice(0, clients.length, ...response.clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  }

  export async function updateClient(updatedClient: Client) {
    try {
      await graphqlClient.request(UpdateClientDocument, { id: updatedClient.id, name: updatedClient.name });
      const index = clients.findIndex(client => client.id === updatedClient.id);
      if (index !== -1) {
        clients[index] = updatedClient;
      }
    } catch (error) {
      console.error('Error updating client:', error);
    }
  }

  export function getClients() {
    return clients;
  }

  // Initial fetch
  fetchClients();
</script>
