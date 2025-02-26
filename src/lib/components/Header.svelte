<script lang="ts">
    import * as config from '$lib/config'
    import {
        Button,
        Navbar,
        NavBrand
    } from 'flowbite-svelte';
    import { BarsOutline } from 'flowbite-svelte-icons';
    import { Photo } from './Photo';
    import { isSidebarHidden } from '../stores/timeSidebarStore';
</script>

<Navbar fluid={true} class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
    <div class="flex space-x-4">
        <Button
            id="navbar-bars"
            class="text-gray-500 dark:text-white"
            pill={false}
            color="alternative"
            on:click={() => isSidebarHidden.set(false)}
        >
            <BarsOutline class="w-6 h-6" />
        </Button>
        <NavBrand href="/">
            <img src={Photo.JavierMilei} class="me-3 h-6 sm:h-9" alt="Milei" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{config.title}</span>
        </NavBrand>
    </div>
</Navbar>