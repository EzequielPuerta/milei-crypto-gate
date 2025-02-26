<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Javier Milei elimina el tweet donde promociona $LIBRA e 'intenta' aclarar la situación"
    date="15 de febrero, 2025 - 00:38 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/16/cronologia-de-la-fallida-promocion-de-la-criptomoneda-libra-del-tuit-de-javier-milei-a-lo-que-podria-pasar-en-el-congreso/#:~:text=Reci%C3%A9n%20a%20las,hacer%20da%C3%B1o%E2%80%9D.%20Victimizaci%C3%B3n.'
        }
    ]}
>
    <p class="timeline-item-p">
        Recién a las 0.38 del sábado, el presidente volvió a X. Borró el tuit promocional de $LIBRA y escribió otro en el que pretendía aclarar la cuestión. “Hace unas horas publiqué un tweet, como tantas otras infinitas veces, apoyando un supuesto emprendimiento privado del que obviamente no tengo vinculación alguna. No estaba interiorizado de los pormenores del proyecto y, luego de haberme interiorizado, decidí no seguir dándole difusión (por eso he borrado el tweet)”, arrancaba el texto. Luego volvió a su estilo habitual y trató de “ratas inmundas de la casta política” a quienes, según su criterio, quisieron “aprovechar esta situación para hacer daño”. Victimización.
    </p>
    <Tweet tweet={data.Milei_primer_descargo_15_02_2025} />
</Event>