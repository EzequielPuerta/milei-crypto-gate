<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="11º reunión de Novelli: Quinta de Olivos con Javier Milei"
    date="10 de noviembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/karina-milei-la-puerta-de-entrada-a-la-casa-rosada-para-los-personajes-detras-de-la-criptomoneda-nid16022025/#:~:text=Y%20la%20tercera%20fue%20el%2010%20de%20noviembre%2C%20unos%2011%20d%C3%ADas%20previos%20a%20su%20visita%20a%20la%20sede%20de%20Gobierno%20con%20Mark%20Hayden%20Davis.'
        }
    ]}
>

</Event>