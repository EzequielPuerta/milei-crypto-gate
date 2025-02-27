<script lang="ts">
	import '../../app.css';
    import { Button } from 'flowbite-svelte';

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
</script>

<div class="layout">    
    <main class="main">
        <slot />
    </main>
    <div class="scroll-bottom-btn">
        <Button
            class="scroll-bottom-btn"
            pill={false}
            color="alternative"
            on:click={scrollToBottom}
        >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"/>
            </svg>
        </Button>
    </div>
</div>
