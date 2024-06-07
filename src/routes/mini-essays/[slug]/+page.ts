import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const slug = `${params.slug.replaceAll('_', ' ')}.md`;
		const path = `/src/assets/obsidian-backup/3 - Mini Essays/${slug}`;

		/* @vite-ignore */
		const essay = await import(path);

		return {
			content: essay.default,
			meta: essay.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
