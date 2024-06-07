<script lang="ts">
	import ContentList from '$lib/components/ContentList.svelte';

	export let data;
</script>

<svelte:head>
	<title>Ian - Notes</title>
</svelte:head>

<!-- Notes -->
<ContentList list={data.notes} />
