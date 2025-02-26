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

    @media only screen and (min-width: 641px) and (max-width: 790px) {
        :global(.content-pic) {
            width: 600px;
        }

        :global(.timeline-item-p) {
            font-size: medium;
        }
    }

    @media only screen and (min-width: 577px) and (max-width: 640px) {
        :global(.content-pic) {
            width: 480px;
        }

        :global(.timeline-item-p) {
            font-size: medium;
        }
    }

    @media only screen and (min-width: 361px) and (max-width: 576px) {
        :global(.content-pic) {
            width: 360px;
        }

        :global(.timeline-item-p) {
            font-size: medium;
        }
    }

    @media only screen and (max-width: 360px) {
        :global(.content-pic) {
            width: 250px;
        }

        :global(.timeline-item-p) {
            font-size: medium;
        }
    }
</style>

<TimelineItem title={title} date={date} classTime="text-lg" classH3="text-2xl">
    <svelte:fragment slot="icon">
        <TimelineAvatar avatar={avatar} />
    </svelte:fragment>
    <p class="timeline-item-p flex flex-wrap space-x-1">
        {#each parties as party}
            <Badge class="mt-1" rounded large color="dark">{party}</Badge>
        {/each}
    </p>
    <slot />
    {#if sources.length > 0}
        <div class="space-x-1 mt-5">
            {#each sources as { label, url }}
                <div class="element">
                    <Button class="mt-1" color="alternative" href={url} target="_blank">
                        Fuente: {label}
                    </Button>
                </div>
            {/each}
        </div>
    {/if}
</TimelineItem>