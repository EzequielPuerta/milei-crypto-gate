<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="Se anuncia la participación de Sergio Morales como orador de la Argentina Digital Nation (ADN)"
    date="23 de julio, 2024"
    avatar={CustomAvatar.SergioMorales}
    parties={["Sergio Morales"]}
    sources={[
        {
            label: 'C5N',
            url: 'https://www.c5n.com/politica/escandalo-libra-el-contrato-que-compromete-javier-milei-hayden-davis-n191531#:~:text=el%2031%20de%20julio%2C%20Morales%20disert%C3%B3%20en%20otro%20foro%20llamado%20Argentina%20Digital%20Nation.%20All%C3%AD%20fue%20presentado%20como%20%22Coordinador%20de%20Asesoramiento%20T%C3%A9cnico%20de%20la%20Presidencia%20de%20la%20Naci%C3%B3n%22%2C%20aunque%20no%20figura%20ning%C3%BAn%20nombramiento%20suyo%20en%20el%20Bolet%C3%ADn%20Oficial.'
        }
    ]}
>
    <p class="timeline-item-p">
        Sergio Morales se anuncia como disertador para la conferencia ADN, Argentina Digital Nation. El encuentro sería el 31 de julio. Allí fue presentado como "Coordinador de Asesoramiento Técnico de la Presidencia de la Nación", aunque no figura ningún nombramiento suyo en el Boletín Oficial. A éste momento, ya habia estado presente en al menos dos de las reuniones mantenidos por Mauricio Novelli con Karina Milei.
    </p>

    <Tweet tweet={data.Sergio_Morales_ADN_23_07_2024} />
</Event>