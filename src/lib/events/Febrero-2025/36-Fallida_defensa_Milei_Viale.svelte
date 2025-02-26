<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Fallida defensa de Javier Milei y papelón de Jonatan Viale"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JonatanViale}
    parties={["Javier Milei", "Jonatan Viale", "Santiago Caputo"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804765-ordenes-al-ensobrado'
        }
    ]}
>
    <p class="timeline-item-p">
        "Pero de vuelta... es bueno que lo dijiste en mi calidad de ciudadano, no de Presidente", dice Javier Milei y la entrevista se interrumpe de repente. "Sí, sí, sí... por el juicio, claro, sí, obvio", sigue el Presidente. "Claro, podés tener problemas judiciales", le dice Viale hijo. 
    </p>
    <p class="timeline-item-p">
        Ese diálogo inverosímil, que da cuenta del encubrimiento del entrevistador de TN al entrevistado, se filtró insólitamente anoche en las redes sociales, por un error de producción: el canal subió la entrevista sin recortes ni edición, y los usuarios fueron impiadosos con la situación. 
    </p>
    <p class="timeline-item-p">
        En el crudo del video subido a las redes de TN, Milei estaba señalando que iba a ser el ministro de Justicia, Mariano Cúneo Libarona, quien se encargaría de la parte judicial tras el escándalo con la criptomoneda $Libra. Ahí ocurrió la interrupción y la advertencia por el posible "quilombo legal".
    </p>

    <Tweet tweet={data.Viale_entrevista_Milei_17_02_2025} />
</Event>