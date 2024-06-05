<script>
	let { children, className } = $props();
</script>

<div class={`${className}`}>
	{@render children()}
</div>
