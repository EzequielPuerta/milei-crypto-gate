<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Análisis de Arkham que muestra 1000 wallets vinculadas Kelsier Ventures"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis"]}
    sources={[]}
>
    <Tweet tweet={data.Seguimiento_wallets_Kelsier_19_02_2025} />
    <Tweet tweet={data.Seguimiento_wallets_Arkham_19_02_2025} />
</Event>