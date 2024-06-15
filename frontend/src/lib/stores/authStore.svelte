<script context="module" lang="ts">
	import { getClient as graphqlClient } from '$lib/graphql-client';
	import type { GetMeQuery } from '$lib/gql/generated/graphql';
	import { GetMeDocument } from '$lib/gql/generated/graphql';
	import { safeExecute } from '$lib/utils.ts';

	let jwtToken = $state('');
	let currentUser = $state<User>(null);

	export function setJwtToken(token) {
		jwtToken = token;
		fetchMe();
	}

	export async function fetchMe() {
		safeExecute(async () => {
			const response = await graphqlClient().request<GetMeQuery>(GetMeDocument);
			currentUser = response.me;
		});
	}

	export function getJwtToken() {
		return jwtToken;
	}

	export function getCurrentUser() {
		return currentUser;
	}
</script>
