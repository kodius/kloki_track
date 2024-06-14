import type { LayoutLoad } from './$types';
import { setJwtToken } from '$lib/stores/authStore.svelte';

export const load: LayoutLoad = (data) => {
	setJwtToken(data["data"]["jwtToken"]);
};
