<script>
	const { title, description = '', variant, children, actionButtons = null, className = '' } = $props();
</script>

<div class="w-full {className}">
	<div class={`content-layout ${variant}`}>
		<div class="bg-gray-100 w-full flex justify-between items-center">
			<div class="pt-6 pb-6">
				<h1 class="text-4xl font-bold text-left">{title}</h1>
				<h4 class="text-sm italic text-left">{description}</h4>
			</div>
			{#if actionButtons}
				<div>
					{@render actionButtons()}
				</div>
			{/if}
		</div>
		<div class="slot-content">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.content-layout.heading .slot-content {
		margin-top: 1rem;
	}
</style>
