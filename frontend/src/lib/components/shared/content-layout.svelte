<script>
	const { title, variant } = $props();
</script>

<div class="w-full">
	<div class={`content-layout ${variant}`}>
		<div class="bg-gray-100 w-full flex">
			<div class="p-6">
				<h1 class="text-4xl font-bold text-left">{title}</h1>
			</div>
		</div>
		<div class="slot-content">
			<slot></slot>
		</div>
	</div>
</div>

<style>
	.content-layout.heading .slot-content {
		margin-top: 1rem;
	}
</style>
