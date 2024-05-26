<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { getClients, updateClient, createClient } from '$lib/stores/clientsStore.svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import { fade } from 'svelte/transition';

	let clients = getClients();
	let localClients = $state([]);
	let newClientName: String = $state('');

	let inputRef: HTMLInputElement;

	$effect(() => {
		localClients = clients.map((client) => ({ ...client, isEditing: false }));
	});

	function toggleEdit(client) {
		if (client.isEditing) {
			client.name = client.originalName;
		} else {
			client.originalName = client.name;
		}
		client.isEditing = !client.isEditing;
	}
	async function addNewClient() {
		try {
			await createClient(newClientName.trim());
			newClientName = '';
		} catch (error) {
			toast.push('Error adding client.', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': '#EF4444',
					'--toastBarHeight': 0
				}
			});
			throw error;
		}
	}

	async function saveClient(client) {
		try {
			await updateClient(client);
			localClients = localClients.map((c) =>
				c.id === client.id ? { ...client, isEditing: false } : c
			);
		} catch (error) {
			toast.push('Error updating client.', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': '#EF4444',
					'--toastBarHeight': 0
				}
			});
			inputRef.focus();
			client.isEditing = true;
		}
	}
</script>

<div class="bg-gray-100 w-full flex">
	<div class="p-6">
		<h1 class="text-4xl font-bold text-left">Clients</h1>
	</div>
</div>

<div class="w-full justify-start flex">
	<div class="w-full xl:w-1/3 flex pt-6 pb-6 justify-start">
		<div class="flex-grow">
			<input
				type="text"
				placeholder="Add new client"
				bind:value={newClientName}
				class="w-full p-2 border rounded"
			/>
		</div>
		<div class="ml-4">
			<button
				onclick={() => addNewClient()}
				class="ml-4 p-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
				disabled={newClientName.trim() === ''}
			>
				Add</button
			>
		</div>
	</div>
</div>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th class="px-4 py-2 text-left">Name</th>
			<th class="px-4 py-2 text-left w-1/5">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each localClients as client}
			<tr transition:fade>
				<td class="border px-4 py-2">
					{#if client.isEditing}
						<Input
							type="text"
							placeholder="Name of your client"
							bind:this={inputRef}
							bind:value={client.name}
						/>
					{:else}
						{client.name}
					{/if}
				</td>
				<td class="px-4 py-2 min-w-[200px]">
					{#if client.isEditing}
						<Button on:click={() => saveClient(client)}>Save</Button>
						<Button on:click={() => toggleEdit(client)}>Cancel</Button>
					{:else}
						<Button on:click={() => toggleEdit(client)}>Edit</Button>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
