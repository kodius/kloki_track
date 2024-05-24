// @ts-nocheck
import type { LayoutLoad } from './$types';
import { client } from '$lib/graphql-client';
import { GetClientsDocument } from '$lib/gql/generated/graphql';


export const load = async () => {
	try {
		const data = await client.request(GetClientsDocument);
		return {
			clients: data.clients
		};
	} catch (error) {
		console.error('Error loading clients:', error);
		return {
			clients: []
		};
	}
};
;null as any as LayoutLoad;