<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Mauricio Novelli felicita a Javier Milei por la victoria en las elecciones presidenciales"
    date="19 de noviembre, 2023"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli", "Javier Milei"]}
    sources={[]}
>
    <Tweet tweet={data.Novelli_felicita_Milei_2023} />
</Event>