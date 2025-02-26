<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="6º reunión de Novelli: Casa Rosada con Karina Milei"
    date="1 de agosto, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Karina Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=6%20%2D%201%20de,a%20las%2019.59hs.'
        }
    ]}
>
    <p class="timeline-item-p">
        Karina recibió de nuevo a Novelli. Esta vez figura solo, con un ingreso a las 19.59hs.
    </p>
</Event>