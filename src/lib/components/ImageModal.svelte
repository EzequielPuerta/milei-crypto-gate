<script lang="ts">
    import { modalStore } from '$lib/stores/modalStore';
    import { onDestroy, createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let isOpen = false;
    export let imageSrc = '';

    const unsubscribe = modalStore.subscribe(value => {
        isOpen = value.isOpen;
        imageSrc = value.imageSrc;
    });

    function closeModal() {
        modalStore.set({ isOpen: false, imageSrc: '' });
        dispatch('close');
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if isOpen}
    <div class="modal-overlay" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <span class="close" on:click={closeModal}>&times;</span>
            <img src={imageSrc} alt="Modal Image" class="modal-image" />
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    .modal-image {
        max-width: 100vw;
        max-height: 100vh;
        width: auto;
        height: auto;
    }
    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
        color: white;
    }
</style>