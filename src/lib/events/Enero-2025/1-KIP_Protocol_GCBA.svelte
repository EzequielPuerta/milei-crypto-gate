<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="KIP Protocol publica un tweet agradeciendo al Gobierno de la Ciudad de Buenos Aires por la invitación a participar de un supuesto 'Comité Blockchain'"
    date="6 de enero, 2025"
    avatar={CustomAvatar.JulianPeh}
    parties={["Julián Peh"]}
    sources={[]}
>
    <Tweet tweet={data.KIP_Protocol_GCBA_06_01_2025} />
</Event>