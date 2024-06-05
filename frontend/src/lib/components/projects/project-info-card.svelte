<script lang="ts">
	import InfoCard from '$lib/components/shared/info-card.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import ComboBox from '$lib/components/shared/combobox.svelte';
	import { handleAsyncOperation } from '$lib/utils';

	import { getClients } from '$lib/stores/clientsStore.svelte';
	import { mapToValueLabel } from '$lib/utils.ts';
	let clients = getClients();
	const clientsList = $derived(mapToValueLabel(clients));
	import { createProject } from '$lib/stores/projectsStore.svelte';

	let projectName = $state('');
	let selectedClientId = $state(null);

	let { title, description = '', className = '' } = $props();

	async function handleSubmit() {
		if (!projectName || !selectedClientId) {
			alert('Please fill in all required fields.');
			return;
		}

		await handleAsyncOperation(async () => {
			await createProject(projectName, selectedClientId, true);
		}, 'Error adding project.');
		resetForm();
	}

	function setSelectedClientId(value) {
		selectedClientId = value;
	}

	function resetForm() {
		projectName = '';
		selectedClientId = null;
	}
</script>

<InfoCard {title} {description} {className}>
	{#snippet formContent()}
		<form on:submit|preventDefault={handleSubmit}>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Name</Label>
					<Input
						id="name"
						bind:value={projectName}
						placeholder="Enter project name"
						autoComplete="off"
					/>
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="client">Client</Label>
					<ComboBox
						items={clientsList}
						onSelectedChange={setSelectedClientId}
						selectedValue={selectedClientId}
						name="client"
					/>
				</div>
			</div>
		</form>
	{/snippet}
	{#snippet footerContent()}
		<Button variant="outline" on:click={resetForm}>Cancel</Button>
		<Button on:click={handleSubmit}>Save</Button>
	{/snippet}
</InfoCard>
