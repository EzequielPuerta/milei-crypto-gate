<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La cuenta de X de la 'Oficina del Presidente' ensaya su intento de descargo"
    date="15 de febrero, 2025"
    avatar={CustomAvatar.OficinaDelPresidente}
    parties={["Javier Milei", "Mauricio Novelli", "Julián Peh", "Hayden Mark Davis"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Milei instruyó el sábado a la Oficina Anticorrupción a investigar si algún funcionario de su gobierno había incurrido en una conducta inapropiada (incluido él mismo, así de ridículo como suena) tras confirmarse que <strong>$LIBRA</strong> es una “moneda meme”, caracterizada por carecer de respaldo en la economía real. Esta medida fue lo que desató una ola de más de 100 denuncias en contra del mandatario.
    </p>
    <Tweet tweet={data.Oficina_Presidente_descargo_15_02_2025} />
</Event>