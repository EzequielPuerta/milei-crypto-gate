<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se lanza $MELANIA, la cripto de Melania Trump"
    date="18 de enero, 2025"
    avatar={CustomAvatar.MelaniaTrump}
    parties={["Donald Trump", "Melania Trump"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/estados-unidos/escandalo-cripto-cuales-son-las-diferencias-entre-las-memecoins-que-promocionaron-trump-y-milei-nid18022025/'
        }
    ]}
>
    <p class="timeline-item-p">
        Un día después de lanzado el token de su marido, Melania Trump lanzó su propia criptomoneda ($Melania) como parte de su iniciativa para recaudar fondos para su programa de bienestar infantil Be Best, que promovía la salud y el bienestar de los niños.
    </p>

    <p class="timeline-item-p">
        Ambas meme coins generaron controversias debido a posibles conflictos de interés, su uso como herramientas para fortalecer las imágenes públicas de sus creadores y recaudar fondos de manera poco transparente. A pesar de las críticas, no hubo repercusiones legales porque no se demostró la existencia de fraude ni manipulación del mercado, y el propósito declarado de las monedas era principalmente benéfico o promocional, lo que dificultó la formulación de acusaciones formales.
    </p>

    <Tweet tweet={data.Melania_token_19_01_2025} />
</Event>