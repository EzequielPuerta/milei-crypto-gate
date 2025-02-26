<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="En medio de la polémica por $LIBRA, Javier Milei viaja a Estados Unidos"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Karina Milei", "Luis Caputo", "Manuel Adorni", "Gerardo Werthein", "Santiago Caputo", "Agustín Romo"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/20/en-medio-de-la-polemica-por-libra-santiago-caputo-se-sumara-al-viaje-de-javier-milei-a-los-estados-unidos/'
        },
        {
            label: 'Chequeado',
            url: 'https://chequeado.com/el-explicador/que-es-la-cpac-la-cumbre-politica-en-la-que-milei-se-reencontrara-con-trump/'
        }
    ]}
>
    <p class="timeline-item-p">
        Nuevamente, Milei viajó hacia Estados Unidos con una gran comitiva, con el objetivo de participar en la cumbre de la Conferencia de Acción Política Conservadora (CPAC), el foro conservador más antiguo de los Estados Unidos.
    </p>
    <p class="timeline-item-p">
        Durante su estadía, el jefe de Estado argentino se reunió con figuras como el CEO de X, Elon Musk, y la titular del FMI, Kristalina Georgieva. El sábado brindó su discurso como orador y se reunió con el presidente de los Estados Unidos, Donald Trump.
    </p>
</Event>