<script>
	let { children, className } = $props();
</script>

<div class={`bg-white shadow-md rounded-lg p-4 ${className}`}>
	{@render children()}
</div>
