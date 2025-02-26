<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Santiago Siri sobre la participación de Karina Milei y Mauricio Novelli"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.MariaODonnell}
    parties={["María O'Donnell", "Santiago Siri", "Javier Milei", "Mauricio Novelli", "Karina Milei", "Vitalik Buterin"]}
    sources={[]}
>
    <p class="timeline-item-p">
        "Estuve hablando ayer con una persona muy cercana al entorno de Wenceslao Casares y me contaba que en los esfuerzos que hicieron el año pasado para que Milei se juntara con Vitalik Buterin siempre derivaban primero a Karina Milei y Karina luego derivaban a Novelli".
    </p>

    <Tweet tweet={data.Siri_Karina_Milei_20_02_2025} />
</Event>