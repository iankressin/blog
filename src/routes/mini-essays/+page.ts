import type { Content } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/essays');
	const essays: Content[] = await response.json();
	return { essays };
}
