<script>
	const { addNewClient } = $props();
	let newClientName = $state('');

	async function handleSubmit() {
		await addNewClient(newClientName);
		newClientName = '';
	}
</script>

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
				on:click={handleSubmit}
				class="ml-4 p-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
				disabled={newClientName.trim() === ''}
			>
				Add
			</button>
		</div>
	</div>
</div>
