<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Milei y un retweet que en cuestión de minutos, hace saltar la cotización de $LIBRA nuevamente"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/finanzas/javier-milei-retuiteo-un-posteo-libra-el-token-volo-y-se-volvio-hundir-cuestion-minutos-n6114529'
        }
    ]}
>
    <p class="timeline-item-p">
        Lejos de alejarse del tema, Javier Milei volvió a postear material sobre la criptomoneda $LIBRA en X (exTwitter). El presidente utilizó un mensaje de Dario Epstein, consultor de la city muy cercano a La Libertad Avanza, donde se explicaba que "no era sencillo" realizar la compra.
    </p>
    <p class="timeline-item-p">
        El reposteo de los pasos a seguir para la compra de $LIBRA fue leído como un nuevo apoyo del presidente a la memecoin, que derivó en un escándalo el viernes pasado, y el volumen operado del token volvió a dispararse. Así, en pocos minutos, se dio una situación similar a la de la semana pasada: el precio pasó de u$s0,38 centavos a los u$s0,77 centavos veinte minutos después.
    </p>
    <p class="timeline-item-p">
        La capitalización de mercado llegó a los 640 millones de dólares y con la nueva caída, desde el mercado cripto se estima que se esfumaron más de 25 millones de dólares en una hora.
    </p>
    <Tweet tweet={data.Milei_Retweet_17_02_2025} />
</Event>