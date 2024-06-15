import { GraphQLClient } from 'graphql-request';
import { getJwtToken } from '$lib/stores/authStore.svelte';

const endpoint = 'http://localhost:4000/api/graphql';

function createClient(token) {
    return new GraphQLClient(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export function getClient() {
    const token = getJwtToken();
    return createClient(token);
}
