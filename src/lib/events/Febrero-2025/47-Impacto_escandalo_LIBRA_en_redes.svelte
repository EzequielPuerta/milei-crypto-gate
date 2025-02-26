<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La consultora especializada en comunicación política digital 'Ad Hoc' publicó el impacto del escándalo $LIBRA en las redes"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'AdHoc - Informe enero 2025',
            url: 'https://comunicacionadhoc.com/2025/02/06/imagen-digital-de-javier-milei-enero-2025/'
        }
    ]}
>
    <p class="timeline-item-p">
        * Según el informe publicado en un hilo de X de la propia cuenta de Ad Hoc, el nombre de Javier Milei fue mencionado en mas de 3,5 millones de publicaciones a nivel global en las primeras 72 hs del suceso.
    </p>
    <p class="timeline-item-p">
        * La conversación duplicó a la del escándalo de Alberto Fernández en agosto del 2024. Solo en Argentina, hubo 2,5 millones de menciones digitales durante las primeras 72 hs.
    </p>
    <p class="timeline-item-p">
        * 6 de cada 10 menciones a Milei en el fin de semana posterior al lanzamiento de $LIBRA, fueron negativas. El episodio rompió el techo de negatividad, superando a otros eventos digitales como las repercusiones tras el discurso del libertario en el Foro de Davos, que según la propia consultora, marcó un pico de negatividad en la imagen de Javier Milei. 
    </p>
    <p class="timeline-item-p">
        * La idea de que el Presidente fue parte de una estafa y los debates sobre el juicio político centralizaron la conversación.
        Las respuestas de los creadores de LIBRA fueron rápidamente viralizadas por los usuarios.
    </p>

    <Tweet tweet={data.AdHoc_informe_19_02_2025} />
</Event>