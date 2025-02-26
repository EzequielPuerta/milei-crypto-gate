<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La periodista Nancy Pazos confirmó que le escribió a Milei alertando de lo 'trucho' de $LIBRA"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.NancyPazos}
    parties={["Nancy Pazos", "Javier Milei", "María O'Donnell"]}
    sources={[]}
>
    <p class="timeline-item-p">
        "Como yo algo del mundo cripto conozco porque uno de mis hijos se dedica hace un tiempo largo, digo 'estoy es muy trucho'. (....) En ese momento se me ocurre escribirle a Milei, le puse: 'Hola, Javier, ¿estás?'. Me conoce, sabe que soy woke y zurdita pero tenemos una relación amorosa. Estoy en las antípodas ideológicas pero puedo chatear con él, no me da nota pero sí puedo chatear con él. Le digo '¿Vos estás seguro? Es muy trucho esto'. Al toque me dice: 'Quedate tranquila, en un rato sale un comunicado'. Esto fue antes de las 10 de la noche, el seguía con el tuit fijado. A las dos horas lo bajó".
    </p>
    <p class="timeline-item-p">
        "'La empresa va a sacar un comunicado', eso fue lo que me dijo a las 10 de la noche", cuenta Nancy Pazos en diálogo con María O'Donnell.
    </p>

    <Tweet tweet={data.Nancy_Pazos_Milei_20_02_2025} />
</Event>