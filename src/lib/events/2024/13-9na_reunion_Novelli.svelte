<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="9º reunión de Novelli: Quinta de Olivos con Javier Milei"
    date="4 de octubre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/karina-milei-la-puerta-de-entrada-a-la-casa-rosada-para-los-personajes-detras-de-la-criptomoneda-nid16022025/#:~:text=La%20segunda%20ocurri%C3%B3%20el%204%20de%20octubre%2C%2015%20d%C3%ADas%20antes%20del%20encuentro%20del%20Presidente%20con%20el%20CEO%20de%20la%20compa%C3%B1%C3%ADa%20que%20promocion%C3%B3%20al%20token%20en%20cuesti%C3%B3n.'
        }
    ]}
>

</Event>