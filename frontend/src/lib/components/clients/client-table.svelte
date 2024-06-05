<script>
	import * as Table from '$lib/components/ui/table';
	import ClientRow from '$lib/components/clients/client-row.svelte';

	const { clients, saveClient } = $props();
</script>

<Table.Root class="w-full">
	<Table.Caption>A list of your clients.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="px-4 py-2 text-left">Name</Table.Head>
			<Table.Head class="px-4 py-2 text-left w-1/5">Actions</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each clients as client}
			<ClientRow {client} {saveClient} />
		{/each}
	</Table.Body>
</Table.Root>
