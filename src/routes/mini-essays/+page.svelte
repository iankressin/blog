<script lang="ts">
	import ContentList from '$lib/components/ContentList.svelte';
	import type { Content } from '$lib/types';

	export let data: { essays: Content[] };
</script>

<svelte:head>
	<title>Ian - Essays</title>
</svelte:head>

<ContentList list={data.essays} />
