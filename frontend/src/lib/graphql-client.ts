import { GraphQLClient } from 'graphql-request';
import { getJwtToken } from '$lib/stores/authStore.svelte';

const endpoint = 'http://localhost:4000/api/graphql';

export function createClient() {
	let token = getJwtToken();
	return new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
}
