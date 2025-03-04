<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="4º reunión de Novelli: Casa Rosada con Karina Milei"
    date="11 de junio, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Karina Milei", "Mauricio Novelli", "Manuel Terrones Godoy", "Sergio Morales"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=4%20%E2%80%93%2011%20de,con%20los%20videojuegos.'
        },
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804396-tech-forum-la-cueva-de-los-negocios-y-las-coimas'
        }
    ]}
>
    <p class="timeline-item-p">
        El 11 de junio, 5 días después de la anterior reunión, Karina recibió otra vez a Novelli. Esta vez fue acompañado por Sergio Morales y por <strong>Manuel Terrones Godoy</strong>, un Youtuber radicado en México que dejó la carrera de ingeniería para dedicarse al mundo gamer y es uno de los referentes de ese mundillo donde buscan ganar dinero con los videojuegos.
    </p>

    <ClickableImage
        src="https://images.pagina12.com.ar/styles/focal_3_2_700x467/public/2025-02/913998-dos_0.jpeg?h=3511df1e&itok=hhYkkd1d"
        alt="Mauricio Novelli y Manuel Torres Godoy, los creadores del Foro, en su visita a Casa Rosada.. Imagen: Redes sociales"
    />
</Event>