<script lang="ts">
    import { Img, Button } from 'flowbite-svelte';
    import ImageModal from './ImageModal.svelte';
    import { modalStore } from '$lib/stores/modalStore';

    export let src: string;
    export let alt: string;
    export let size: string = "max-w-xl";
    export let _class: string = "rounded-lg content-pic cursor-pointer";

    function openModal() {
        modalStore.set({ isOpen: true, imageSrc: src });
    }

    function closeModal() {
        modalStore.set({ isOpen: false, imageSrc: '' });
    }
</script>

<div>
    <Button on:click={openModal}>
        <Img
            src={src}
            alt={alt}
            size={size}
            class={_class}
        />
    </Button>
    <ImageModal
        isOpen={$modalStore.isOpen}
        imageSrc={$modalStore.imageSrc}
        on:close={closeModal}
    />
</div>