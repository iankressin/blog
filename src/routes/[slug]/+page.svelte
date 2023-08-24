<script lang="ts">
    import "../../syntax.css"
	// import { formatDate } from '$lib/utils'
	export let data
    // [&>pre]:bg-stone-900 [&>pre]:rounded-lg [&>pre]:py-4 [&>pre]:px-4 [&>pre]:text-white [&>pre]:text-sm
</script>

<head>
    <link href="themes/prism-ghcolors.css" rel="stylesheet" />
</head>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-col gap-5">
    <!-- Title -->
	<hgroup class="flex flex-col gap-1">
		<h1 class="text-3xl font-semibold">{data.meta.title}</h1>
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
        flex flex-col gap-4 font-serif text-lg
        [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-4 [&>h1]:mt-2  [&>h1]:font-sans
        [&>blockquote]:px-4 [&>blockquote]:border-l-4 [&>blockquote]:italic
        [&>p>code]:bg-stone-900 [&>p>code]:p-1 [&>p>code]:rounded [&>p>code]:text-red-300 [&>p>code]:text-sm
        [&>p>a]:text-blue-400 [&>p>a]:underline [&>p>a]:underline-offset-2
    ">
		<svelte:component this={data.content} />
	</div>
</article>
