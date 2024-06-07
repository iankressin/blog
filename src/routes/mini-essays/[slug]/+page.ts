import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const slug = `${params.slug.replaceAll('_', ' ')}`;
		const essay = await import(`../../../essays/${slug}.md`);

		return {
			content: essay.default,
			meta: essay.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
