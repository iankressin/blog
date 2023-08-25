<script lang="ts">
	//import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
            <a href={post.slug} class="title">
                <li class="flex flex-col gap-3">
                    <h1 class="font-semibold text-lg leading-none">{post.title}</h1>
                    <p class="text-sm leading-none">{post.description}</p>
                        <div class="tags flex gap-2">
                            {#each post.categories as category}
                                <div class="bg-teal-800 rounded-full">
                                    <span class="text-white p-2 text-sm font-semibold cursor-pointer">{category}</span>
                                </div>
                            {/each}
                        </div>

                        <p class="italic text-sm">Publish at {post.date}</p>
                </li>
            </a>
		{/each}
	</ul>
</section>
