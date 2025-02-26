<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="'No reaccioné como tendría que haber reaccionado': Jonatan Viale sobre la entrevista con Milei"
    date="18 de febrero, 2025"
    avatar={CustomAvatar.JonatanViale}
    parties={["Javier Milei", "Jonatan Viale", "Santiago Caputo"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/reaccione-reaccionado-jonatan-viale-hablo-momento-santiago-caputo-interrumpio-entrevista-javier-milei_0_yCSRZ2ykZh.html'
        }
    ]}
>
    <p class="timeline-item-p">
        El periodista Jonatan Viale decidió dar explicaciones sobre la entrevista que le realizó este lunes a Javier Milei, de la que trascendió un fragmento editado de una intervención del asesor Santiago Caputo para interrumpir una pregunta. "No reaccioné como tendría que haber reaccionado", dijo sobre este martes el conductor de TN en una aparición en su programa radial del que se había ausentado.
    </p>
    <p class="timeline-item-p">
        “Para los que tengan dudas, les voy a contar lo que pasó. Pero solo les quiero adelantar que nunca jamás en la vida agarré un mango de este ni de ningún Gobierno. No lo quiero. No me interesa. Tuve mil oportunidades. Rechacé todas. De todas maneras, corresponde que dé una explicación tranquila y larga en el lugar en el que pasó. Esta situación es fea", dijo Viale en Radio Rivadavia.
    </p>

    <p class="timeline-item-p">
        El periodista se anticipó a lo que responderá en su programa de televisión en TN, donde fue la entrevista con Milei. “Esta noche en Todo Noticias voy a hacer un pequeño descargo respecto de lo que pasó. Voy a explicar la intervención de Caputo. Voy a contar todo. Qué hice, qué no hice, qué me falto hacer, la filtración del video. Voy a explicárselo a la gente que nos viene mirando hace muchos años", anticipó.
    </p>
</Event>