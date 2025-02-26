<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="'Ese dinero es de los argentinos': Hayden Mark Davis en conversación con Dave Portnoy"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Dave Portnoy", "Hayden Mark Davis", "Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/economia/2025/02/17/ese-dinero-es-de-los-argentinos-la-definicion-del-cerebro-detras-de-libra-sobre-los-fondos-que-tiene-bajo-su-control/'
        }
    ]}
>
    <p class="timeline-item-p">
        Una entrevista entre Dave Portnoy, empresario y dueño de Barstool Sports, y Hayden Davis, creador del controvertido token $LIBRA, reveló detalles sorprendentes sobre el revuelo que involucró al presidente argentino Javier Milei. Durante la conversación, Davis habló sobre los fondos que aún tiene bajo su control, supuestos compromisos incumplidos por el Gobierno argentino, y su relación con Milei y su equipo. Davis, al ser consultado sobre el dinero en cuestión, se encargó de aclarar que no era suyo. “Ese dinero es de los argentinos“, afirmó de manera contundente.
    </p>
    <p class="timeline-item-p">
        Un aspecto central de la conversación fue una supuesta promesa incumplida de Javier Milei de hacer un video en apoyo de la moneda, algo que nunca sucedió. Según Davis, la estrategia original incluía una serie de tuits y videos, siendo el presidente de Argentina una pieza clave. De hecho, llegó a asegurar que Milei había comprometido a su equipo a grabar un video para respaldar el proyecto, pero Davis mencionó que este video nunca se concretó.
    </p>
    <p class="timeline-item-p">
        Davis también hizo referencia a un “periodista de tercera parte” que, según sus palabras, documentó todo el proceso. Se comprometió a revelar este material más tarde, posiblemente esa misma semana. El creador de $LIBRA mencionó que, en su búsqueda por demostrar la transparencia del proyecto, había contactado a un periodista externo para que cubriera todos los detalles de su encuentro con Milei y las decisiones clave.
    </p>
    <embed type="video/mp4" src="https://cdn.jwplayer.com/previews/6ESbExJK" width="600" height="340" />

    <Tweet tweet={data.Maxi_Firtman_sobre_Davis_17_02_2025} />
</Event>