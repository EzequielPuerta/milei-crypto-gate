<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="KIP Protocol, la empresa de Julián Peh, dice que el lanzamiento de $LIBRA fue un éxito"
    date="15 de febrero, 2025 - 00:38 hs"
    avatar={CustomAvatar.JulianPeh}
    parties={["Julian Peh", "Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/16/cronologia-de-la-fallida-promocion-de-la-criptomoneda-libra-del-tuit-de-javier-milei-a-lo-que-podria-pasar-en-el-congreso/#:~:text=Exactamente%20a%20la,es%20absolutamente%20privado%E2%80%9D.'
        }
    ]}
>
    <p class="timeline-item-p">
        Exactamente a la misma hora, las 0.38 del sábado, desde la cuenta de KIP Protocol postearon: “Hoy fue el lanzamiento del proyecto Viva la Libertad y la moneda $LIBRA ha sido un éxito, y queremos agradecer a todos por su confianza y apoyo. Queremos aclarar que el presidente Milei no estuvo ni está involucrado de ninguna manera en el desarrollo del proyecto que es absolutamente privado”.
    </p>
    <Tweet tweet={data.KIP_protocol_15_02_2025} />
</Event>