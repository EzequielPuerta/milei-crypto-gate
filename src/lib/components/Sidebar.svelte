<script lang="ts">
    import {
        Drawer,
        CloseButton,
        Heading,
        Sidebar,
        SidebarGroup,
        SidebarItem
    } from 'flowbite-svelte';
    import SocialButtons from './SocialButtons.svelte'
    import { UsersGroupSolid, CalendarMonthOutline } from 'flowbite-svelte-icons';
  
    import { sineIn } from 'svelte/easing';
    import { isSidebarHidden } from '$lib/stores/sidebarStore';

    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
</script>

<Drawer
    backdrop={false}
    bgOpacity={"bg-opacity-25"}
    divClass="flex flex-col  h-[100vh] md:h-full overflow-y-auto z-9999 p-4 bg-gray-100 border-gray-800 border-r-1 dark:bg-gray-800 dark:border-gray-600"
    placement="left"
    transitionType="fly"
    transitionParams={transitionParams}
    bind:hidden={$isSidebarHidden}
    id="time-sidebar"
    width="w-85"
>
    <div class="flex items-center">
        <Heading
            tag="h3"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            customSize="font-extrabold md:text-2xl lg:text-2xl">
                Menú
        </Heading>
        <CloseButton on:click={() => isSidebarHidden.set(true)} class="mb-4 dark:text-white" />
    </div>

    <div class="flex-grow">
        <Sidebar asideClass="w-75" {activeUrl}>
            <SidebarGroup border={true}>
                <SidebarItem
                    label="Vínculos"
                    href="/graph"
                    on:click={() => isSidebarHidden.set(true)} >
                        <svelte:fragment slot="icon">
                        <UsersGroupSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        </svelte:fragment>
                </SidebarItem>
                <SidebarItem
                    label="Línea del Tiempo"
                    href="/timeline"
                    on:click={() => isSidebarHidden.set(true)} >
                        <svelte:fragment slot="icon">
                        <CalendarMonthOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </Sidebar>
    </div>
    <div>
        <SidebarGroup border={true}>
            <SocialButtons />
        </SidebarGroup>
    </div>
</Drawer>

<style>
    @media only screen and (max-width: 640px) {
        #time-sidebar {
            height: 50%;
        }
    }
</style>