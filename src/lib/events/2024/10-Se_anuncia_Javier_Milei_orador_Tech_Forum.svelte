<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se anuncia a Javier Milei como orador principal del Tech Forum"
    date="17 de septiembre, 2024"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli", "Manuel Terrones Godoy"]}
    sources={[]}
>
    <Tweet tweet={data.Milei_main_speaker_17_09_2024} />
</Event>