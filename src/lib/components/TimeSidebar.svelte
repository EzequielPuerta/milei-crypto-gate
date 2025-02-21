<script lang="ts">
    import { Drawer, Button, CloseButton, Heading, A } from 'flowbite-svelte';
    import { CalendarMonthOutline } from 'flowbite-svelte-icons';
    import { sineIn } from 'svelte/easing';
    
    export let anchors: string[] = [];
    let hidden = true;
    let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn
    };

    function scrollToAnchor(anchorId: string) {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${anchorId} not found.`);
        }
    }
</script>

<style>
    .toggle-button {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: -9000;
        /* Dark mode styles */
        color: #9ca3af; 
    }
</style>

<div class="toggle-button">
    <Button
        pill={false}
        color="alternative"
        on:click={() => (hidden = false)}
    >
        <CalendarMonthOutline class="w-7 h-20 ms-2" />
    </Button>
</div>

<Drawer
    backdrop={false}
    bgOpacity={"bg-opacity-25"}
    divClass="overflow-y-auto z-50 p-4 bg-gray-300 dark:bg-gray-600"
    placement="right"
    transitionType="fly"
    transitionParams={transitionParams}
    bind:hidden={hidden}
    id="time-sidebar"
>
    <div class="flex items-center">
        <Heading
            tag="h3"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            customSize="text-lg font-extrabold md:text-lg lg:text-2xl">
                Línea temporal
        </Heading>
        <CloseButton on:click={() => (hidden = true)} class="mb-4 dark:text-white" />
    </div>
    <ul class="list-disc pl-5">
        {#each anchors as anchor}
            <li>
                <p class="timeline-item-p">
                    <A
                        href={"#" + anchor} on:click={() => scrollToAnchor(anchor)}
                        class="text-primary-600 underline dark:text-primary-500 dark:text-gray-300 hover:no-underline"
                    >
                        {anchor}
                    </A>
                </p>
            </li>
        {/each}
    </ul>
</Drawer>