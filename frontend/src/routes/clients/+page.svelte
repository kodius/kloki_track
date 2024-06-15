<script>
	import { getClients, updateClient, createClient } from '$lib/stores/clientsStore.svelte';
	import ClientTable from '$lib/components/clients/client-table.svelte';
	import AddClientForm from '$lib/components/clients/add-client-form.svelte';
	import { handleAsyncOperation } from '$lib/utils';
	import ContentLayout from '$lib/components/shared/content-layout.svelte';

	let clients = getClients();
	let localClients = $state(clients);

	$effect(() => {
		localClients = clients.map((client) => ({ ...client, isEditing: false }));
	});

	async function addNewClient(newClientName) {
		await handleAsyncOperation(async () => {
			await createClient(newClientName.trim());
		}, 'Error adding client.');
	}

	async function saveClient(client) {
		await handleAsyncOperation(async () => {
			await updateClient(client);
		}, 'Error updating client.');
	}
</script>

<ContentLayout variant="heading" title="Clients">
	<AddClientForm {addNewClient} />
	<ClientTable clients={localClients} {saveClient} />
</ContentLayout>
