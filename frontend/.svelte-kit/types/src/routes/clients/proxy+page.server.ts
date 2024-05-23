// @ts-nocheck
// src/routes/+page.ts
import type { PageLoad } from './$types';
import { client } from '$lib/graphql-client';

const query = `
  query {
    clients {
      id
      name
    }
  }
`;

export const load = async () => {
	try {
		const data = await client.request(query);
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
;null as any as PageLoad;