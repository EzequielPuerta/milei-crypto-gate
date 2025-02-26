<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="Charles Hoskinson (cofundador de Cardano y ex cofundador de Ethereum) denuncia coimas en el Tech Forum"
    date="15 de febrero, 2025"
    avatar={CustomAvatar.CharlesHoskinson}
    parties={["Charles Hoskinson", "Javier Milei"]}
    sources={[
        {
            label: 'El Cronista',
            url: 'https://www.cronista.com/economia-politica/el-creador-de-una-de-las-cripto-mas-famosas-denuncio-un-pedido-de-coimas-en-el-entorno-de-milei-cosas-magicas/'
        }
    ]}
>
    <p class="timeline-item-p">
        Según reveló en un video que circula en redes sociales, personas cercanas al presidente Javier Milei le pidieron coimas para gestionar una reunión con el mandatario y facilitar el avance de ciertos proyectos en Argentina.
    </p>

    <Youtube id="i5bkVaW4zAA" />
</Event>