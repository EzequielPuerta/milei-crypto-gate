<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Los 'insiders' adquirieron el token $LIBRA al instante del lanzamiento"
    date="14 de febrero, 2025 - 19:01 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Fernando Molina"]}
    sources={[
        {
            label: 'Tiempo Argentino',
            url: 'https://www.tiempoar.com.ar/ta_article/milei-y-el-cripto-escandalo-con-libra-estuvo-todo-digitado-desde-el-minuto-cero/'
        }
    ]}
>
    <p class="timeline-item-p">
        "Estuvo todo digitado desde el minuto 0". Así lo afirmó Fernando Molina, especialista en información y análisis cripto, en relación al escándalo de Javier Milei y $LIBRA, tras la promoción presidencial del token que causó estafas millonarias a 44.000 usuarios.
    </p>
    <p class="timeline-item-p">
        "Si quedan dudas miren las fotos: las compras más grandes se hicieron literalmente al mismo momento que Milei sacó el tweet (a los 00 segundos). La única forma de saber que era la memecoin de Milei era teniendo el dato previamente, siendo un insider. Estuvo todo digitado desde el minuto 0".
    </p>
    <p class="timeline-item-p">
        Nota: la hora indicada en la imagen del tweet está en horario UTC. Por lo tanto las 22:01 serían las 19:01 hora Argentina. Es decir, exactamente el instante en que Milei postea el primer tweet sobre $LIBRA. Esto evidencia que su participación es absolutamente necesaria para la sucesión de los hechos.
    </p>

    <Tweet tweet={data.Insiders_buying_14_02_2025} />
</Event>