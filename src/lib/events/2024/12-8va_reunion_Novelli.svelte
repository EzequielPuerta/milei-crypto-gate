<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="8º reunión de Novelli: Quinta de Olivos con Javier Milei"
    date="27 de septiembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=8%20%E2%80%93%2027%20de,digitales%20del%20presidente.'
        }
    ]}
>
    <p class="timeline-item-p">
        Milei recibió a Novelli una semana después en la Quinta de Olivos. Esta reunión, muy breve, tampoco figura en el registro público de audiencias. Apenas se fue Novelli el que visitó al presidente y se quedó un buen rato fue Daniel Parisini, alias Gordo Dan, jefe de las milicias digitales del presidente.
    </p>

    <p class="timeline-item-p">
        El Destape ya hizo el pedido de acceso a la información pública para las planillas de ingresos a Olivos y la Rosada desde octubre hasta hoy pero aún no tuvo respuesta. Es posible que las reuniones sean más.
    </p>
</Event>