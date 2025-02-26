<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    
    export let data;
</script>

<Event
    title="Allanan al máximo jefe de Wenance por una causa por estafa. Mauricio Novelli trabajaba para las firmas involucradas"
    date="3 de agosto, 2023"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/sociedad/policiales/2023/08/03/allanaron-al-maximo-jefe-de-wenance-por-una-causa-por-estafa-hay-mas-de-150-victimas/'
        }
    ]}
>
    <p class="timeline-item-p">
        La situación de la fintech de préstamos Wenance y su máximo jefe, Alejandro Muszak, cobró un giro para peor en las últimas horas. Ayer miércoles, la División Antifraudes de la Policía Federal allanó a Muszak en su domicilio de la Avenida del Libertador en Palermo por órdenes del Juzgado de Instrucción N°3 de Ushuaia, Tierra del Fuego.
    </p>
    <p class="timeline-item-p">
        El motivo: una causa por estafa centrada en fideicomisos de la empresa, donde hay, según fuentes del expediente, varias víctimas identificadas y una querella constituida. Hay, por lo menos, 50 inversionistas identificados, con un daño estimado en 250 millones.
    </p>
</Event>