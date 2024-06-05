<script>
	const { title, variant, children, actionButtons = null } = $props();
</script>

<div class="w-full">
	<div class={`content-layout ${variant}`}>
		<div class="bg-gray-100 w-full flex justify-between items-center">
			<div class="pt-6 pb-6">
				<h1 class="text-4xl font-bold text-left">{title}</h1>
			</div>
			{#if actionButtons}
				<div>
					{@render actionButtons()}
				</div>
			{/if}
		</div>
		<div class="slot-content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.content-layout.heading .slot-content {
		margin-top: 1rem;
	}
</style>
