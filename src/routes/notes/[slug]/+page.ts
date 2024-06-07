import { error } from '@sveltejs/kit';

/* @vite-ignore */
export async function load({ params }) {
	try {
		const slug = `${params.slug.replaceAll('_', ' ')}`;
		const note = await import(`../../../notes/${slug}.md`);

		return {
			content: note.default,
			meta: note.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
