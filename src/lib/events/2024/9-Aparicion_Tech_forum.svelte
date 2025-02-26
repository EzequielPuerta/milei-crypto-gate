<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Aparición de Tech Forum en TN Tecno"
    date="16 de septiembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli", "Manuel Terrones Godoy"]}
    sources={[]}
>
    <Tweet tweet={data.Novelli_TN_Tecno_16_09_2024} />
</Event>