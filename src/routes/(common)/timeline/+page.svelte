<script lang="ts">
    import type { PageData } from './$types';
    import {
        Timeline,
        Button,
        Drawer,
        CloseButton,
        Heading,
        Sidebar,
        SidebarGroup,
        SidebarItem
    } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';
    import { writable } from 'svelte/store';
    import { CalendarMonthOutline } from 'flowbite-svelte-icons';
    import DateSeparator from '$lib/components/DateSeparator.svelte'

    const eventComponents = import.meta.glob('$lib/events/**/*.svelte');
    const eventFileLocations = Object.keys(eventComponents);
    const eventsByDate: { [key: string]: string[] } = {};

    eventFileLocations.forEach((filePath) => {
        const match = filePath.match(/\/(\d{4})\/|\/([A-Za-z]+-\d{4})\//);
        if (match) {
            const date = match[1] !== undefined ? match[1] : match[2];
            if (!eventsByDate[date]) {
                eventsByDate[date] = [];
            }
            eventsByDate[date].push(filePath);
        }
    });

    const anchors = Object.keys(eventsByDate);
    for (const date in eventsByDate) {
        eventsByDate[date].sort((a, b) => {
            const indexA = parseInt(a.split('/')[5].split('-')[0]);
            const indexB = parseInt(b.split('/')[5].split('-')[0]);
            return indexA - indexB;
        });
    }
    async function loadComponent(path: string) {
        const module = await eventComponents[path]();
        return module.default;
    }

    let { data }: {
		data: PageData;
	} = $props();

    const isTimeSidebarHidden = writable(true);
    let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn
    };
</script>

<style>
    .timeline {
        margin-top: 5em;
    }
    .timeline-item-p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: 400;
        font-size: large;
        text-align: justify;
        color: #6b7280;
        /* Dark mode styles */
        color: #9ca3af; 
    }
</style>

<div class="timeline">
    <Timeline order="vertical">
        {#each anchors as date_anchor}
            <DateSeparator date={date_anchor} />
            {#await Promise.all(eventsByDate[date_anchor].map(loadComponent)) then eventComponents}
                {#each eventComponents as eventComponent}
                    <svelte:component this={eventComponent} {data} />
                {/each}
            {:catch error}
                <p>Error loading event: {error.message}</p>
            {/await}
        {/each}
    </Timeline>
    <div class="fixed right-0 top-1/2 transform -translate-y-1/2">
        <Button
            id="navbar-bars"
            class="text-gray-500 dark:text-white"
            pill={false}
            color="alternative"
            on:click={() => isTimeSidebarHidden.set(false)}
        >
            <CalendarMonthOutline class="w-6 h-6" />
        </Button>
    </div>
    <Drawer
        backdrop={false}
        bgOpacity={"bg-opacity-25"}
        divClass="flex flex-col overflow-y-auto z-9999 p-4 bg-gray-100 border-gray-800 border-r-1 dark:bg-gray-700 dark:border-gray-600"
        placement="right"
        transitionType="fly"
        transitionParams={transitionParams}
        bind:hidden={$isTimeSidebarHidden}
        id="time-sidebar"
        width="w-85"
        class="fixed right-0 top-1/2 transform -translate-y-1/2"
    >
        <div class="flex items-center">
            <Heading
                tag="h3"
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                customSize="font-extrabold md:text-2xl lg:text-2xl">
                    Ir a
            </Heading>
            <CloseButton on:click={() => isTimeSidebarHidden.set(true)} class="mb-4 dark:text-white" />
        </div>

        <div class="flex-grow">
            <Sidebar asideClass="w-75">
                <SidebarGroup border={true}>
                    {#each anchors as anchor}
                        <SidebarItem
                            label={anchor}
                            href={"/timeline#" + anchor}
                            on:click={() => isTimeSidebarHidden.set(true)}>
                                <svelte:fragment slot="icon">
                                <CalendarMonthOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                </svelte:fragment>
                        </SidebarItem>
                    {/each}
                </SidebarGroup>
            </Sidebar>
        </div>
    </Drawer>
</div>