<script lang="ts">
    import "../../syntax.css"
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
		<h1 class="text-3xl font-semibold">{data.meta.title}</h1>
		<p class="italic text-sm">Published on {data.meta.date}</p>

        <!-- Tags -->
        <div class="tags flex gap-2">
            {#each data.meta.categories as category}
                <div class="bg-teal-800 rounded-full">
                    <span class="text-white p-2 text-sm font-semibold cursor-pointer">{category}</span>
                </div>
            {/each}
        </div>
	</hgroup>

  <!-- Post -->
	<div class="
        flex flex-col gap-4 font-serif text-lg
        [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-4 [&>h1]:mt-2  [&>h1]:font-sans
        [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-4 [&>h2]:mt-2  [&>h2]:font-sans
        [&>blockquote]:px-4 [&>blockquote]:border-l-4 [&>blockquote]:italic
        [&>p>code]:bg-stone-900 [&>p>code]:p-1 [&>p>code]:rounded [&>p>code]:text-red-300 [&>p>code]:text-sm
        [&>p>a]:text-blue-400 [&>p>a]:underline [&>p>a]:underline-offset-2
        [&>p>em]:text-sm [&>p>em]:text-center
    ">
		<svelte:component this={data.content} />
	</div>
</article>
