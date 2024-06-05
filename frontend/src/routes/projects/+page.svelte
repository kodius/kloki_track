<script lang="ts">
	import ContentLayout from '$lib/components/shared/content-layout.svelte';
	import ProjectInfoCard from '$lib/components/projects/project-info-card.svelte';
	import type { Project } from '$lib/gql/generated/graphql';
	import ProjectsTable from '$lib/components/projects/projects-table.svelte';

	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	import { getProjects } from '$lib/stores/projectsStore.svelte';

	let projects = getProjects();
	let localProjects = $state<Project[]>([]);
  let projectDialogOpen = $state(false);

	$effect(() => {
		localProjects = projects.map((client) => ({ ...client, isEditing: false }));
	});

  function closeDialog() {
    projectDialogOpen = false
  }
</script>

<ContentLayout variant="heading" title="Projects">
	{#snippet actionButtons()}
		<Dialog.Root bind:open={projectDialogOpen}>
			<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Add New Project</Dialog.Trigger
			>
			<Dialog.Content class="sm:max-w-[425px]">
				<ProjectInfoCard title="Create Project" description="Add new project" {closeDialog} />
			</Dialog.Content>
		</Dialog.Root>
	{/snippet}
	<div class="overflow-x-auto">
		<ProjectsTable {localProjects} />
	</div>
</ContentLayout>
