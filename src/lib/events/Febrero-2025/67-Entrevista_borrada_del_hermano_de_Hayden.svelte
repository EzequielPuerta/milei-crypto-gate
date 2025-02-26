<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Borran la entrevista en la que el hermano de Hayden Mark Davis reveló la posible existencia de un precontrato con Milei"
    date="22 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Gideon Davis", "Hayden Mark Davis", "Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/806202-desesperados-por-borrar-la-huella-digital'
        }
    ]}
>
    <p class="timeline-item-p">
        “Argentina, a un alto nivel, acaba de firmar con nosotros un «Loi» para ayudarlos con las criptomonedas”. Relajado, en una entrevista emitida por Youtube en noviembre del año pasado, Gideon Davis –el hermano de Hyden Davis, creador de $LIBRA–, soltó la lengua. Habló de un “Loi” (un precontrato o carta de intención) que, según dijo, habría sido “sellado por Javier Milei” para la promoción del negocio cripto en el país a través de una tercera empresa, Cube Exchange. Esa confesión de parte convalidaría a priori la versión de la existencia de al menos un acuerdo firmado por el Presidente o su círculo más próximo con ese fin. 
    </p>
    <p class="timeline-item-p">
        Pero la entrevista, de un día para el otro, desapareció: el entrevistador, un youtuber norteamericano de nombre Tony Sablan, la borró completamente de todas las plataformas en las que la había publicado. Fueron tuiteros argentinos quienes se dedicaron a rastrear ese testimonio y rescataron ése y otros extractos clave, como el que da a entender que $LIBRA era apenas un “ensayo”, la punta del iceberg de un proyecto mucho más amplio: la "tokenización" de Argentina.
    </p>
    <p class="timeline-item-p">
        El contrato en cuestión incluye la potencial creación de una "cooperativa de crédito" a través de una empresa que terciaría en la relación: Cube Exchange. Sería "algo así", confesó, "como una fusión de la plata de los bancos y las criptomonedas".
    </p>
    <p class="timeline-item-p">
        Lo interesante es que Cube Exchange es una firma cuyo titular es un polaco, Bartosz Lipinski, quien casualmente o no, participó de una reunión en Casa Rosada a mediados de julio pasado junto a Hayden Davis y Karina Milei. Cube Exchange también participó como socio del Tech Forum de 2024, donde disertó el presidente de la Nación.
    </p>
    <Tweet tweet={data.Maxi_Firtman_entrevista_borrada_22_02_2025} />
</Event>