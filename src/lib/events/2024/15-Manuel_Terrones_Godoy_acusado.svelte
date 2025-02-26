<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Manuel Terrones Godoy (cofundador de Tech Forum) es acusado en el programa Argenzuela"
    date="19 de octubre, 2024"
    avatar={CustomAvatar.ManuelTerronesGodoy}
    parties={["Manuel Terrones Godoy"]}
    sources={[
        {
            label: 'C5N',
            url: 'https://www.c5n.com/politica/escandalo-cripto-quienes-son-mauricio-novelli-y-manuel-terrones-godoy-apuntados-estar-detras-libra-n191194#:~:text=Terrones%20Godoy%20es,los%20NFTs%20Games.'
        }
    ]}
>
    <p class="timeline-item-p">
        Según informó el periodista Diego Gabriele en Argenzuela en octubre de 2024, en ocasión de la celebración del evento Tech Forum, Terrones Godoy es creador de "una cripto trucha llamada 'El Chavo del 8', con la que captó u$s250.000 y se los fugó".
    </p>
    <p class="timeline-item-p">
        Radicado en México, se hizo famoso como youtuber aconsejando cómo ganar dinero jugando videojuegos. Con casi un millón de suscriptores y un promedio de 100 mil vistas por video, es uno de los comunicadores más relevantes dentro del universo de los NFTs Games.
    </p>
</Event>