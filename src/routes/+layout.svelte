<script lang="ts">
	import '../app.css';
	import '../syntax.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex justify-center bg-dim-1 text-white h-full min-h-screen">
	<div class="h-full w-full laptop:max-w-4xl py-8 px-8 laptop:px-20 flex flex-col gap-16">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style>
</style>
