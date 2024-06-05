<script>
	import * as Table from '$lib/components/ui/table';

	const { localProjects } = $props();
</script>

<Table.Root class="min-w-full">
	<Table.Caption>A list of your projects.</Table.Caption>
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
