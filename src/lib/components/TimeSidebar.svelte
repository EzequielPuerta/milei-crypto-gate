<script>
    import { Drawer } from 'flowbite-svelte';
    export let anchors = [];
    let isVisible = false;

    function scrollToAnchor(anchorId) {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function toggleDrawer() {
        isVisible = !isVisible;
    }
</script>

<style>
    .toggle-button {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);        
        padding: 1em;
        border-radius: 8px 0 0 8px;
        border-width: 0.1em;
        border-color: gray;
        cursor: pointer;
        z-index: 1000;
        /* Dark mode styles */
        color: #9ca3af; 
    }
</style>

<div class="toggle-button" on:click={toggleDrawer}>
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
    </svg>      
</div>

<Drawer bind:open={isVisible} position="right" size="sm">
    <div slot="content">
        {#each anchors as anchor}
            <div on:click={() => scrollToAnchor(anchor.id)}>
                {anchor.label}
            </div>
        {/each}
    </div>
</Drawer>