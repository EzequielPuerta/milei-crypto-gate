<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="5º reunión de Novelli: Casa Rosada con Karina Milei"
    date="16 de julio, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Karina Milei", "Mauricio Novelli", "Manuel Terrones Godoy", "Hayden Mark Davis", "Bartosz Lipinski"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=5%20%E2%80%93%2016%20de,responsable%20de%20%24LIBRA.'
        },
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/karina-milei-la-puerta-de-entrada-a-la-casa-rosada-para-los-personajes-detras-de-la-criptomoneda-nid16022025/#:~:text=dos%20ingresos%20de%20Novelli%20coinciden%20con%20los%20de%20Hayden%20Mark%20Davis.%20Ambos%20entraron%20el%2016%20de%20julio%2C%20autorizados%20por%20Karina%20Milei%2C%20entre%20las%2015%3A07%20y%20las%2015%3A45.'
        }
    ]}
>
    <p class="timeline-item-p">
        Karina recibió a Novelli pasadas las 15. Estuvieron en la reunión el youtuber Terrones Godoy (cofundador de Tech Forum); Bartosz Lipinski, cofundador y CEO de Cube Group y que trabajó también en <em>Solana</em>, la plataforma de <em>blockchain</em> sobre la que operó la estafa de <strong>LIBRA</strong>; y <strong>Hayden Mark Davis</strong>, ahora apuntado por <strong>Kit Protocol</strong> como el responsable de <strong>$LIBRA</strong>.
    </p>

    <p class="timeline-item-p">
        Davis es fundador y CEO de Kelsier Ventures, una empresa dedicada a financiar proyectos innovadores en el ámbito de las criptomonedas y la tecnología blockchain. Ha mantenido vínculos con figuras políticas de alto perfil como Donald Trump, el presidente de Estados Unidos. Mas adelante en el tiempo, Davis se autodefinirá como “asesor” de Javier Milei.
    </p>

    <p class="timeline-item-p">
        Ésta sería la primer visita de Davis a la Casa Rosada. Como mínimo, volvería 2 veces mas adelante. Esta visita <strong>no fue informada en el Registro de Audiencias</strong>. Se conoció por un pedido de acceso a la información pública realizado por La Nación.
    </p>
</Event>