<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	const { addNewClient } = $props();
	let newClientName = $state('');

	async function handleSubmit() {
		await addNewClient(newClientName);
		newClientName = '';
	}

	function handleKeydown(event) {
		if (event.keyCode === 13 && newClientName.trim() !== '') {
			handleSubmit();
		}
	}
</script>

<div class="w-full justify-start flex">
	<div class="w-full xl:w-1/3 flex pb-6 justify-start">
		<div class="flex-grow">
			<Input
				id="name"
				type="text"
				placeholder="Enter new client name"
				bind:value={newClientName}
				on:keydown={handleKeydown}
				autoComplete="off"
			/>
		</div>
		<div class="ml-4">
			<Button on:click={handleSubmit} disabled={newClientName.trim() === ''}>Add</Button>
		</div>
	</div>
</div>
