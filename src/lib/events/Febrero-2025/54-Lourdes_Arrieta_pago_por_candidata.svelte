<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="Lourdes Arrieta, diputada libertaria, dijo que pagó para ser candidata de Milei y pidió la renuncia de Karina"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.LourdesArrieta}
    parties={["Lourdes Arrieta", "Karina Milei"]}
    sources={[
        {
            label: 'La Política Online',
            url: 'https://www.lapoliticaonline.com/politica/la-diputada-de-las-fuerzas-del-cielo-dijo-que-pago-para-ser-candidata-de-milei-y-pidio-la-renuncia-de-karina/'
        }
    ]}
>
    <p class="timeline-item-p">
        La diputada nacional Lourdes Arrieta dijo que pagó para ser candidata de Javier Milei en Mendoza y pidió que Karina Milei dé un paso al costado mientras es apuntada por cobrar coimas.
    </p>
    <p class="timeline-item-p">
        Arrieta, que abandonó el bloque de La Libertad Avanza para conformar un monobloque llamado Las Fuerzas del Cielo, habló con El Destape Radio del criptogate y dijo que en otro gobierno, la hermana del presidente ya debería haber dado un paso al costado.
    </p>
    <p class="timeline-item-p">
        Arrieta confesó que para ser candidata en la lista libertaria tuvo que pagar. "La plata para la candidatura la puse yo, 60 mil pesos vendiendo cremas para caminar la calle", dijo Arrieta.
    </p>

    <Youtube id="Ezd7XC1FDTE" />
</Event>