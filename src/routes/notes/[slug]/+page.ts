import { error } from '@sveltejs/kit';

/* @vite-ignore */
export async function load({ params }) {
	try {
		const slug = `${params.slug.replaceAll('_', ' ')}.md`;
		const path = `/src/assets/obsidian-backup/2 - Notes/${slug}`;

		/* @vite-ignore */
		const note = await import(path);

		return {
			content: note.default,
			meta: note.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
