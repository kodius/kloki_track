<script>
	import InfoCard from '$lib/components/shared/info-card.svelte';
	let { title, description, formContent, footerContent } = $props();
</script>

<InfoCard {title} {description} {formContent} {footerContent} />
