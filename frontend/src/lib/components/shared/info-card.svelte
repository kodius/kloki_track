<script lang="ts">
	import BaseCard from '$lib/components/shared/base-card.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	let { title, description, formContent, footerContent, className } = $props();
</script>

<BaseCard {className}>
	<Dialog.Header>
		<Dialog.Title>{title}</Dialog.Title>
		<Dialog.Description>{description}</Dialog.Description>
	</Dialog.Header>
	<div class="mt-6 mb-6">
		{@render formContent()}
	</div>
	<Dialog.Footer>
		<Dialog.Close>
			<Button variant="outline">Cancel</Button>
		</Dialog.Close>
		{@render footerContent()}
	</Dialog.Footer>
</BaseCard>
