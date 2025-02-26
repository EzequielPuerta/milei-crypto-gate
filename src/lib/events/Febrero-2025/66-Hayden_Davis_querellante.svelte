<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Hayden Mark Davis quiere presentarse como querellante ante la justicia para “encontrar a los verdaderos responsables” del caso $LIBRA"
    date="22 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei", "Yanina Nicoletti"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/giro-criptogate-hayden-davis-quiere-presentarse-querellante-justicia-encontrar-verdaderos-responsables-caso-libra_0_TtuMb0g54k.html'
        }
    ]}
>
    <p class="timeline-item-p">
        En medio de un férreo silencio tras sus últimas dos entrevistas, el empresario cripto Hayden Davis prepara su estrategia judicial para enfrentar las denuncias que ya comenzaron a llegar a los tribunales argentinos por el criptoescándalo que se desató el pasado 14 de febrero, cuando el presidente Javier Milei promocionó el token $LIBRA en su cuenta de X, proyecto del que Davis fue una pieza clave.
    </p>
    <p class="timeline-item-p">
        El empresario había dicho en entrevistas con el youtuber Coffeezilla y el influencer Dave Portnoy que se encontraba bajo amenazas y temía por su familia por el nivel al que había crecido el caso. Su última intervención pública había sido el pasado lunes al mediodía.
    </p>
    <p class="timeline-item-p">
        Desde el entorno de Davis no recibieron notificaciones al momento. Es por ese motivo que ya piensan cómo salir a contraatacar para "defender el buen nombre y honor" del empresario. Quien encabeza la estrategia judicial es la abogada Yanina Nicoletti, especializada en derecho penal tributario y económico, quien confirmó el giro en un posteo en su cuenta de X.
    </p>
</Event>