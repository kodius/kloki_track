<script lang="ts">
	import ContentLayout from '$lib/components/shared/content-layout.svelte';
	import Combobox from '$lib/components/shared/combobox.svelte';

	import { getClients} from '$lib/stores/clientsStore.svelte';
  import { mapToValueLabel} from '$lib/utils.ts'

	let clients = getClients();

	const items = $derived(mapToValueLabel(clients))
</script>

<ContentLayout variant="heading" title="Home Page">
	<Combobox {items}></Combobox>
</ContentLayout>
