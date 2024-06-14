<script>
	const { href, text } = $props();
  import Button from "../ui/button/button.svelte";
</script>

<li class="mb-4">
 <Button>
  <a href={href} class="text-white">{text}</a>
 </Button>
</li>
