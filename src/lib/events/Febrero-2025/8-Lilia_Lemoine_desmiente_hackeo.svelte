<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Lilia Lemoine desmiente a los escépticos que difunden la versión del hackeo a Milei"
    date="14 de febrero, 2025 - 21:09 hs"
    avatar={CustomAvatar.LiliaLemoine}
    parties={["Lilia Lemoine", "Javier Milei"]}
    sources={[]}
>
    <Tweet tweet={data.Milei_hackeado_14_02_2025} />
    <Tweet tweet={data.Lilia_sobre_Milei_hackeado_14_02_2025} />
</Event>