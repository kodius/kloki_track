<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';

	const { items, onSelectedChange, selectedValue, name } = $props();

	const selectedValueFunction = () => {
		return items.find((f) => f.value === value)?.label ?? ('Select ' + (name || 'item') + '...');
	};

	function findLabelByValue(data, value) {
		const item = data.find((item) => item.value === value);
		return item ? item.label : '';
	}

	let open = $state(false);
	let value = $state('');
	let selectedValueLabel = $derived(selectedValueFunction());

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
  $effect(() => {
    value = selectedValue;
	});

</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			class="w-[375px] justify-between"
		>
			{selectedValueLabel}
			<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-[375px] p-0">
		<Command.Root
			filter={(value, search) => {
				const extendValue = findLabelByValue(items, value);
				if (extendValue.toLowerCase().includes(search.toLowerCase())) {
					return 1;
				}
				return 0;
			}}
		>
			<Command.Input placeholder={name ? `Search ${name}...` : 'Search item...'} />
			<Command.Empty>No {name || 'item'} found.</Command.Empty>
			<Command.Group>
				{#each items as item}
					<Command.Item
						key={item.value}
						value={item.value}
						onSelect={(currentValue) => {
							value = currentValue;
							onSelectedChange(currentValue);
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== item.value && 'text-transparent')} />
						{item.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
