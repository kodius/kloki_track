<script context="module" lang="ts">
	import { client as graphqlClient } from '$lib/graphql-client';
	import { GetClientsDocument, UpdateClientDocument, CreateClientDocument } from '$lib/gql/generated/graphql';
	import type { Client, GetClientsQuery, UpdateClientMutation, CreateClientMutation } from '$lib/gql/generated/graphql';
	import { updateItemInList, replaceArrayContent, addItemToList } from '$lib/utils';

	let clients = $state<Client[]>([]);

	export async function fetchClients() {
		const response = await graphqlClient.request<GetClientsQuery>(GetClientsDocument);
		replaceArrayContent(clients, response.clients);
	}

	export async function updateClient(updatedClient: Client) {
		await graphqlClient.request<UpdateClientMutation>(UpdateClientDocument, { ...updatedClient });
		updateItemInList(clients, updatedClient);
	}

	export async function createClient(newClientName: String) {
		const response = await graphqlClient.request<CreateClientMutation>(CreateClientDocument, { name: newClientName });
    addItemToList(clients, response.createClient)
	}

	export function getClients() {
		return clients;
	}

	fetchClients();
</script>
