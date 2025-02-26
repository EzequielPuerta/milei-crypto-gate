<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Reunión de Hayden Mark Davis con Javier Milei"
    date="30 de enero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Javier Milei", "Hayden Mark Davis"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=Davis%20volvi%C3%B3%20el,No%20ser%C3%ADa%20extra%C3%B1o.'
        }
    ]}
>
    <p class="timeline-item-p">
        Davis volvió el 30 de enero de 2025 a la Casa Rosada. Lo contó el propio Milei, que publicó en sus redes la foto con Davis y escribió: “Hoy mantuvimos una muy interesante charla con el empresario Hayden Mark Davis, quien me estuvo asesorando sobre el impacto y las aplicaciones de la tecnología blockchain e inteligencia artificial en el país. Seguimos trabajando para acelerar el desarrollo tecnológico argentino y hacer de Argentina una potencia tecnológica mundial”. El Destape pidió pero aún no tuvo respuesta oficial por la planilla de ingresos a Casa Rosada de enero de 2025, por lo que no puede confirmar si Novelli también estuvo ese día. No sería extraño.
    </p>

    <Tweet tweet={data.Milei_Davis_30_01_2025} />
</Event>