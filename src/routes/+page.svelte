<script lang="ts">
    import type { PageData } from './$types';
    import { Timeline } from 'flowbite-svelte';
    import DateSeparator from '$lib/components/DateSeparator.svelte'
    import TimeSidebar from '../lib/components/TimeSidebar.svelte';

    const eventComponents = import.meta.glob('../lib/events/**/*.svelte');
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
            const indexA = parseInt(a.split('/')[4].split('-')[0]);
            const indexB = parseInt(b.split('/')[4].split('-')[0]);
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
    <TimeSidebar {anchors} />
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
</div>