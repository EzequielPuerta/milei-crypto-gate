<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El escándalo de $LIBRA impacta de lleno a Jupiter Exchange, Meteora y el ecosistema Solana"
    date="16 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/economia/jupiter-responde-al-escandalo-de-libra-y-renuncia-el-cofundador-de-meteora-nid18022025/'
        }
    ]}
>
    <p class="timeline-item-p">
        El lanzamiento del token $LIBRA era ampliamente conocido entre los conocedores de memecoin hasta dos semanas antes de su dramática subida y caída, según Jupiter Exchange. “Nos enteramos de esto hace ~2 semanas directamente de Kelsier Ventures. Aunque al principio no estábamos seguros, luego vimos pruebas creíbles en forma de tweets públicos de la cuenta personal de Milei de que iba en serio.”
    </p>

    <p class="timeline-item-p">
        Si bien no hay pruebas directas que incriminen a los miembros de Jupiter Exchange, las transacciones onchain muestran que la caída del token fue causada por monederos con información privilegiada que comenzaron a cobrar el token solo tres horas después de que debutara para su negociación, causando una caída del 94% del mismo. Es por eso que el fundador de dos de los sistemas más populares de intercambio de criptomonedas le pidió la renuncia a otro de los cofundadores.
    </p>

    <Tweet tweet={data.Jupiter_Exchange_tweet_16_02_2025} />
    <Tweet tweet={data.Meow_tweet_17_02_2025} />
</Event>