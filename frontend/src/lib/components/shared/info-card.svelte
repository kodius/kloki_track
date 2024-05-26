<script>
	import BaseCard from '$lib/components/shared/base-card.svelte'
	let { title, description, formContent, footerContent } = $props();
</script>

<BaseCard>
	<div class="mb-4">
		<h2 class="text-xl font-semibold text-gray-900">{title}</h2>
		<p class="text-gray-600">{description}</p>
	</div>
	<div class="mb-4">
		{@render formContent()}
	</div>
	<div class="mt-4 pt-4 border-t">
		{@render footerContent()}
	</div>
</BaseCard>
