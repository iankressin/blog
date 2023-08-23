<script lang="ts">
    import "../app.css";
	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'
</script>

<div class="flex justify-center bg-zinc-800 text-slate-100">
    <div class="max-w-4xl py-8 px-20 flex flex-col gap-8">
        <Header />

        <main class="">
            <slot />
        </main>

        <Footer />
    </div>
</div>

<style>
</style>

