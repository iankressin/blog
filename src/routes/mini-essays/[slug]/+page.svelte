<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>Ian - Mini essays</title>
</svelte:head>

<Article content={data.content} />
