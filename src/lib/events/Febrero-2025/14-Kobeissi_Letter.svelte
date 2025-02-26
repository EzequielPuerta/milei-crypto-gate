<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="'Javier Milei acaba de destruir el mercado de memecoin' según The Kobeissi Letter"
    date="15 de febrero, 2025 - 00:59 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[]}
>
    <p class="timeline-item-p">
        La cuenta de X del boletín informativo The Kobeissi Letter publicó dicha sentencia, iniciando un hilo que recapituló lo acontecido horas antes. En la imagen del post (utilizada por múltiples medios) se aprecia el impacto del <em>rug pull</em>.
    </p>
    <p class="timeline-item-p">
        La noche terminó con el precio del token desplomandose hasta los veinte centavos de dolar, habiendo alcanzado su máximo en cinco dólares cada token.
    </p>

    <Tweet tweet={data.Kobeissi_Letter_15_02_2025} />
</Event>