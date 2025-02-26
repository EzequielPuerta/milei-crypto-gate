<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Tech Forum se desliga del escándalo"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli", "Manuel Terrones Godoy"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/economia/tech-forum-emitio-un-comunicado-tras-el-escandalo-por-libra-no-tenemos-nada-que-ver-con-los-fondos-nid17022025/'
        }
    ]}
>
    <p class="timeline-item-p">
        Luego de las declaraciones del presidente Javier Milei en relación al escándalo que se desató alrededor de la criptomoneda $LIBRA, el Tech Forum, que está envuelto en el caso porque Mauricio Novelli, uno de sus creadores, organizó el encuentro en el que el mandatario conoció al CEO de Kip Protocol, emitió un comunicado para aclarar la situación y explicó que no tiene “nada que ver con los fondos conseguidos” a través del memecoin.
    </p>

    <p class="timeline-item-p">
        “Kielsier Ventures y Kip Protocol, de quienes somos asesores, lanzaron el viernes pasado la criptomoneda $LIBRA. La intención de sus creadores (conforme consta en su prospecto) consistía en generar una masa de dinero con las ganancias del proyecto para donarle a emprendedores locales que se encuentran obstaculizados de acceder a créditos. Mas allá de que consideramos que se trata de una iniciativa muy interesante para el desarrollo económico del país, nuestra participación en el manejo de los tokens y el dinero fue nula”, explicaron.
    </p>
</Event>