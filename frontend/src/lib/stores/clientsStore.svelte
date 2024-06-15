<script context="module" lang="ts">
	import { getClient as graphqlClient } from '$lib/graphql-client';
	import {
		GetClientsDocument,
		UpdateClientDocument,
		CreateClientDocument
	} from '$lib/gql/generated/graphql';
	import type {
		Client,
		GetClientsQuery,
		UpdateClientMutation,
		CreateClientMutation
	} from '$lib/gql/generated/graphql';
	import { updateItemInList, replaceArrayContent, addItemToList } from '$lib/utils';
	import { safeExecute } from '$lib/utils.ts';

	let clients = $state<Client[]>([]);

	export async function fetchClients() {
		safeExecute(async () => {
			const response = await graphqlClient().request<GetClientsQuery>(GetClientsDocument);
			replaceArrayContent(clients, response.clients);
		});
	}

	export async function updateClient(updatedClient: Client) {
		safeExecute(async () => {
			await graphqlClient().request<UpdateClientMutation>(UpdateClientDocument, {
				...updatedClient
			});
			updateItemInList(clients, updatedClient);
		});
	}

	export async function createClient(newClientName: String) {
		safeExecute(async () => {
			const response = await graphqlClient().request<CreateClientMutation>(CreateClientDocument, {
				name: newClientName
			});
			addItemToList(clients, response.createClient);
		});
	}

	export function getClients() {
		return clients;
	}

</script>
