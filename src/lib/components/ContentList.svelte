<script lang="ts">
	import { page } from '$app/stores';
	import type { Content } from '$lib/types';

	export let list: Content[];
</script>

<!-- Notes -->
<section class="flex flex-col gap-8">
	<ul class="flex flex-col gap-12">
		{#each list as content}
			<a href={`${$page.route.id}/${content.slug}`} class="title">
				<li class="flex flex-col gap-3">
					<h1 class="font-semibold text-lg leading-none">{content.title}</h1>
					{#if content.description}
						<p class="text-sm leading-none">{content.description}</p>
					{/if}
					<div class="tags flex gap-2">
						{#each content.tags as category}
							<div class="bg-teal-800 rounded-full">
								<span class="text-white p-2 text-sm font-semibold cursor-pointer">{category}</span>
							</div>
						{/each}
					</div>

					<p class="italic text-sm">Publish at {content.date}</p>
				</li>
			</a>
		{/each}
	</ul>
</section>
