<script lang="ts">
    import { Button, TimelineItem, Badge } from 'flowbite-svelte';
    import TimelineAvatar from './TimelineAvatar.svelte';
    import AvatarConfig from './Avatar';

    export let title: string;
    export let date: string;
    export let avatar: typeof AvatarConfig;
    export let parties: string[] = [];
    export let sources: { label: string; url: string }[] = [];
</script>

<style>
    :global(.timeline-item-p) {
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

<TimelineItem title={title} date={date} classTime="text-lg" classH3="text-2xl">
    <svelte:fragment slot="icon">
        <TimelineAvatar avatar={avatar} />
    </svelte:fragment>
    <p class="timeline-item-p flex space-x-1">
        {#each parties as party}
            <Badge rounded large color="dark">{party}</Badge>
        {/each}
    </p>
    <slot />
    {#if sources.length > 0}
        <div class="flex space-x-1 mt-5">
            {#each sources as { label, url }}
                <Button color="alternative" href={url} target="_blank">
                    Fuente: {label}
                </Button>
            {/each}
        </div>
    {/if}
</TimelineItem>