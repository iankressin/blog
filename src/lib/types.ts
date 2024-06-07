// export type Categories = 'sveltekit' | 'svelte'

export interface Content {
	title: string;
	slug: string;
	description?: string;
	date: string;
	tags: string[];
	published: boolean;
}
