<script lang="ts">
	import '../app.css';
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<div class="layout">
    <Header/>

    <main>
        <slot />
    </main>

    <Footer/>
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 1440px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    main {
        margin-top: 2em;
        margin-left: 2em;
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>