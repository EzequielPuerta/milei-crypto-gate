<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="7º reunión de Novelli: Casa Rosada con Javier Milei"
    date="20 de septiembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=7%20%E2%80%93%2020%20de,a%20las%2014.50hs.'
        }
    ]}
>
    <p class="timeline-item-p">
        Tras varias reuniones con Karina, el 20 de septiembre de 2024 Milei recibió a Novelli en su despacho presidencial. De hecho Novelli entró 2 veces ese día a la Casa Rosada. Una a las 10.54 y se retiró a las 11.51hs. Y luego volvió a las 14 y se fue a las 14.50hs.
    </p>

    <p class="timeline-item-p">
        <strong>Esta fecha de reuniones es la única que figura en el registro público de audiencias, donde sólo figura el encuentro de la mañana.</strong> La síntesis de la reunión dice que “se trataron temas relacionados al Tech Forum Argentina”, el evento que organizó Novelli un mes después y al que asistió Milei. Milei y Novelli compartieron la foto de este encuentro desde la cuenta de Tech Forum.
    </p>

    <Tweet tweet={data.Milei_Novelli_20_09_2024} />
</Event>