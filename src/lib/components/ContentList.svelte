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
							<div
								class="rounded-full"
								class:bg-green={category == 'final'}
								class:bg-yellow={category != 'final'}
							>
								<span class="p-2 text-sm cursor-pointer text-dim-0"
									>{category.replace('#', '')}</span
								>
							</div>
						{/each}
						<p class="italic text-sm">Publish at {content.date}</p>
					</div>
				</li>
			</a>
		{/each}
	</ul>
</section>
