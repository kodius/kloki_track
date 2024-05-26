<script>
	import { getClients, updateClient, createClient } from '$lib/stores/clientsStore.svelte';
	import ClientTable from '$lib/components/clients/client-table.svelte';
	import AddClientForm from '$lib/components/clients/add-client-form.svelte';
	import { handleAsyncOperation } from '$lib/utils';

	let clients = getClients();
	let localClients = $state([]);

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

<div class="w-full">
	<div class="bg-gray-100 w-full flex">
		<div class="p-6">
			<h1 class="text-4xl font-bold text-left">Clients</h1>
		</div>
	</div>

	<AddClientForm {addNewClient} />

	<ClientTable clients={localClients} {saveClient} />
</div>
