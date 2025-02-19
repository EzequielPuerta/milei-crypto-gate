<script lang="ts">
	import '../app.css';
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import { Button } from 'flowbite-svelte';

    injectAnalytics();

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
</script>

<div class="layout">
    <Header/>

    <main>
        <slot />
    </main>

    <Footer/>

    <div class="scroll-bottom-btn">
        <Button
            class="scroll-bottom-btn"
            pill={true}
            color="alternative"
            on:click={scrollToBottom}
        >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"/>
            </svg>
        </Button>
    </div>
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    .scroll-bottom-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 50;
    }

    main {
        margin-top: 2em;
        margin-left: 4em;
        margin-right: 4em;
    }

    @media (min-width: 768px) {
        .layout {
            padding-inline: var(--size-5);
        }
    }

    @media (min-width: 1440px) {
        .layout {
            max-inline-size: 1440px;
            padding-inline: 0;
        }
    }
</style>