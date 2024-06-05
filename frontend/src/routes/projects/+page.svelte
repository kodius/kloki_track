<script lang="ts">
	import ContentLayout from '$lib/components/shared/content-layout.svelte';
	import ProjectInfoCard from '$lib/components/projects/project-info-card.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { Project } from '$lib/gql/generated/graphql';
	import ComboBox from '$lib/components/shared/combobox.svelte';
	import * as Table from '$lib/components/ui/table';

	import { getProjects, updateProject, createProject } from '$lib/stores/projectsStore.svelte';
	import { getClients } from '$lib/stores/clientsStore.svelte';
	import { handleAsyncOperation } from '$lib/utils';
	import { mapToValueLabel } from '$lib/utils.ts';

	let projects = getProjects();
	let clients = getClients();
	let localProjects = $state<Project[]>([]);

	const clientsList = $derived(mapToValueLabel(clients));

	$effect(() => {
		localProjects = projects.map((client) => ({ ...client, isEditing: false }));
	});
	let projectName = $state('');
	let selectedClientId = $state(null);

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

<ContentLayout variant="heading" title="Projects">
	<div class="overflow-x-auto">
		<Table.Root class="min-w-full">
			<Table.Header class="bg-gray-50">
				<Table.Row>
					<Table.Head
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Name
					</Table.Head>
					<Table.Head
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Client Name
					</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each localProjects as project}
					<Table.Row class="bg-white border-b">
						<Table.Cell class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
							{project.name}
						</Table.Cell>
						<Table.Cell class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							{project.client.name}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<ProjectInfoCard title="Create Project" className="mt-10 border">
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
	</ProjectInfoCard>
</ContentLayout>
