<script lang="ts">
	// import { formatDate } from '$lib/utils'
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-col gap-5">
    <!-- Title -->
	<hgroup class="flex flex-col gap-1">
		<h1 class="text-2xl font-semibold">{data.meta.title}</h1>
		<!-- <p>Published at {formatDate(data.meta.date)}</p> -->
		<p>Published at 20/08/2023</p>

        <!-- Tags -->
        <div class="tags flex gap-2">
            {#each data.meta.categories as category}
                <div class="bg-stone-100 rounded-full">
                    <span class="text-slate-950 p-2">{category}</span>
                </div>
            {/each}
        </div>
	</hgroup>

  <!-- Post -->
	<div class="
        flex flex-col gap-2
        [&>h1]:text-xl [&>h1]:font-semibold [&>h1]:mt-4 [&>h1]:mt-2 
        [&>pre]:bg-stone-900 [&>pre]:rounded-lg [&>pre]:py-4 [&>pre]:px-4 [&>pre]:text-white
    ">
		<svelte:component this={data.content} />
	</div>
</article>
