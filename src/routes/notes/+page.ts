import type { Content } from '$lib/types';

export async function load({ fetch }): Promise<{ notes: Content[] }> {
	const response = await fetch('api/notes');
	const notes: Content[] = await response.json();
	return { notes };
}
