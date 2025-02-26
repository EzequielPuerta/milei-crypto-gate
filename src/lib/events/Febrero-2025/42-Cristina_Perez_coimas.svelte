<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Cristina Pérez: 'Hay un círculo que pide plata a cambio de acercar empresarios a Milei'"
    date="18 de febrero, 2025"
    avatar={CustomAvatar.CristinaPerez}
    parties={["Cristina Perez"]}
    sources={[]}
>
    <Tweet tweet={data.Cristina_Perez_18_02_2025} />
</Event>