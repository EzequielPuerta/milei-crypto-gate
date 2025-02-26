<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Borran una nota en Binance Square que hablaba sobre el vínculo entre KIP Protocol y el GCBA"
    date="24 de febrero, 2025"
    avatar={CustomAvatar.MaximilianoFirtman}
    parties={["Maximiliano Firtman", "Julian Peh"]}
    sources={[]}
>
    <Tweet tweet={data.Maxi_Firtman_KIP_Binance_Square_1_24_02_2025} />
    <Tweet tweet={data.Maxi_Firtman_KIP_Binance_Square_2_24_02_2025} />
</Event>