<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Festejo con champagne y el supuesto 'acuerdo millonario' con el presidente Javier Milei del que alardeaban los creadores de $LIBRA"
    date="22 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei", "Mauricio Novelli", "Manuel Torres Godoy", "Sergio Morales"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/politica/escandalo-libra-de-que-se-trataban-los-cursos-que-dictaron-agustin-laje-y-javier-milei-en-nw-professional-traders.phtml#:~:text=El%20libertario%20fue%20la%20puerta%20de%20entrada%20para%20que%20dos%20influencers%20se%20sumaran%20al%20proyecto%3A%20Agust%C3%ADn%20Laje%20como%20capacitador%20y%20Emanuel%20Dannan%20en%20la%20promoci%C3%B3n%20de%20los%20cursos.'
        }
    ]}
>
    <Tweet tweet={data.Hugo_Alconada_champagne_22_02_2025} />
</Event>