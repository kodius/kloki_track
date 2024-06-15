import type { LayoutLoad } from './$types';
import { setJwtToken } from '$lib/stores/authStore.svelte';
import { fetchClients} from '$lib/stores/clientsStore.svelte'
import { fetchProjects} from '$lib/stores/projectsStore.svelte'

export const load: LayoutLoad = (data) => {
	setJwtToken(data["data"]["jwtToken"]);

  fetchClients();
  fetchProjects()

};
