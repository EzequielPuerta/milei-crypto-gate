<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Los pedidos de juicio político por $LIBRA llegan a Diputados"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/17/los-pedidos-de-juicio-politico-por-libra-llegan-a-diputados-con-la-comision-acefala-y-tensiones-cruzadas/'
        }
    ]}
>
    <p class="timeline-item-p">
        En medio de un clima político marcado por divisiones internas y fragmentación, el Congreso de la Nación se encuentra en el centro de un debate sobre la posible investigación del caso de la criptomoneda $LIBRA y el papel del presidente Javier Milei. Ya se han presentado los primeros pedidos de juicio político contra el mandatario, mientras que otros sectores impulsan la creación de una comisión investigadora. Sin embargo, las disputas internas dentro de los bloques parlamentarios, incluidas las filas libertarias, y la atomización de la oposición complican cualquier avance en estas iniciativas.
    </p>
</Event>