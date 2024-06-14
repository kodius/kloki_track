<script context="module" lang="ts">
	let jwtToken = $state("");

	export function setJwtToken(token) {
		jwtToken = token;
	}

	export function getJwtToken() {
		return jwtToken;
	}
</script>
