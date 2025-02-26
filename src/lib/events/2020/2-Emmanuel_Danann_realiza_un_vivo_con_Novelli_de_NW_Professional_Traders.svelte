<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Emmanuel Danann realiza un 'vivo' con Novelli de N&W Professional Traders"
    date="agosto, 2020"
    avatar={CustomAvatar.EmmanuelDanann}
    parties={["Emanuel Dannan", "Mauricio Novelli"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/politica/escandalo-libra-de-que-se-trataban-los-cursos-que-dictaron-agustin-laje-y-javier-milei-en-nw-professional-traders.phtml#:~:text=En%20agosto%2C%20Dannan%20particip%C3%B3%20de%20un%20vivo%20con%20Novelli%20y%20luego%20comparti%C3%B3%20otras%20publicaciones%20con%20conversaciones%20sobre%20el%20mundo%20del%20trading.'
        }
    ]}
>
    <embed type="video/mp4" src="https://rudo.video/vod/bTKdYy?volume=0" height="530" />
</Event>