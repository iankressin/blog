<script lang="ts">
    import "../app.css";
	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'

</script>

<div class="layout">
	<Header />

	<main class="px-96">
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>

