<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Dave Portnoy, empresario de medios y contacto de Hayden Mark Davis contó que le regalaron 6.5 millones de $LIBRA pero las devolvió"
    date="16 de febrero, 2025"
    avatar={CustomAvatar.DavePortnoy}
    parties={["Dave Portnoy", "Javier Milei", "Hayden Mark Davis"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804477-criptoestafa-de-milei-un-multimillonario-conto-que-le-regala'
        }
    ]}
>
    <p class="timeline-item-p">
        El millonario Dave Portnoy (que tiene contacto frecuente con Hayden Davis) apareció públicamente denunciando una supuesta coima en la que recibió un total de 6.5 millones de la mencionada cripto para que escriba un mensaje en X (ex Twitter) y le diera impulso. No obstante, notó que la cosa estaba rara y las devolvió.
    </p>

    <p class="timeline-item-p">
        En un space de X, Portnoy, dueño de un medio relacionado con los deportes y conocido por apoyar a Donald Trump y decenas de comentarios racistas, relató que estuvo a punto de estar involucrada en la increíble estafa que ocurrió el viernes pasado, de la cual se “salvó” por no haber publicado nada al respecto.
    </p>
    <Tweet tweet={data.Dave_Portnoy_coima_16_02_2025} />
</Event>