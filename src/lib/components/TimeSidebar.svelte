<script lang="ts">
    import {
        Drawer,
        CloseButton,
        Heading,
        A,
        Sidebar,
        SidebarWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarDropdownWrapper,
        SidebarDropdownItem
    } from 'flowbite-svelte';
    import { CalendarMonthOutline } from 'flowbite-svelte-icons';
  
    import { sineIn } from 'svelte/easing';
    import { isSidebarHidden } from '../stores/timeSidebarStore';

    export let anchors: string[] = [];
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };

    function scrollToAnchor(anchorId: string) {
        const element = document.getElementById(anchorId);
        element!.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<Drawer
    backdrop={false}
    bgOpacity={"bg-opacity-25"}
    divClass="overflow-y-auto z-50 p-4 bg-gray-100 border-gray-800 border-r-1 dark:bg-gray-800 dark:border-gray-600"
    placement="left"
    transitionType="fly"
    transitionParams={transitionParams}
    bind:hidden={$isSidebarHidden}
    id="time-sidebar"
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

    <Sidebar>
        <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded-sm dark:bg-gray-800">
            <SidebarGroup>
                <SidebarItem label="Grafo">
                    <svelte:fragment slot="icon">
                      <CalendarMonthOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                </SidebarItem>
                <SidebarDropdownWrapper label="Fecha">
                    <svelte:fragment slot="icon">
                      <CalendarMonthOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                    {#each anchors as anchor}
                        <SidebarDropdownItem label="{anchor}" href={"#" + anchor}/>
                    {/each}
                </SidebarDropdownWrapper>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</Drawer>