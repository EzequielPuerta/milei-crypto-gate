<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Hayden Mark Davis sería una identidad falsa"
    date="19 de febrero, 2025 - 01:28 hs"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Según abogados denunciantes, la identidad de Hayden Mark Davis sería falsa; una posibilidad que ya se había barajado al no poder encontrar nada relacionado a él en internet, previo a todo el suceso de $LIBRA.
    </p>
    <Tweet tweet={data.Hayden_identidad_falsa_19_02_2025} />
</Event>