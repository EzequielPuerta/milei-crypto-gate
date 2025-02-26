<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Milei recomienda N&W Professional Traders"
    date="26 de enero, 2020"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli", "Jeremías Walsh", "Agustín Laje", "Emmanuel Danann"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/politica/escandalo-libra-de-que-se-trataban-los-cursos-que-dictaron-agustin-laje-y-javier-milei-en-nw-professional-traders.phtml#:~:text=El%20libertario%20fue%20la%20puerta%20de%20entrada%20para%20que%20dos%20influencers%20se%20sumaran%20al%20proyecto%3A%20Agust%C3%ADn%20Laje%20como%20capacitador%20y%20Emanuel%20Dannan%20en%20la%20promoci%C3%B3n%20de%20los%20cursos.'
        },
        {
            label: 'Wired',
            url: 'https://es.wired.com/articulos/no-solo-es-milei-estas-figuras-publicas-tambien-han-sido-implicadas-en-el-escandalo-dollarlibra#:~:text=y%20transici%C3%B3n%20energ%C3%A9tica.-,Agust%C3%ADn%20Laje,adolescentrismo%20(2023).%20Se%20opone%20a%20los%20movimientos%20LGBTIQ%2B%20y%20feminista.,-Mart%C3%ADn%20Menem'
        },
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/480920-dannan-el-influencer-antiderechos-misogino-libertario-y-tamb'
        }
    ]}
>
    <Tweet tweet={data.Milei_promocion_NW_2020} />
    <Tweet tweet={data.Milei_promocion_2_NW_2020} />

    <p class="timeline-item-p">
        A partir de entonces, <strong>Javier Milei</strong> mantendrá un vínculo estrecho con ellos. Es tan así que él mismo se presentaba como parte del staff de N&W, como se puede apreciar en la imagen siguiente, perteneciente a su perfil de Instagram en aquel momento.
    </p>

    <Img
        src="https://dobleamarilla-assets.tadevel-cdn.com/67b39740beb6aeb9d6f1ac53/720.webp"
        alt="sample 1"
        size="max-w-xl"
        class="rounded-lg content-pic"
    />

    <p class="timeline-item-p">
        El libertario fue la puerta de entrada para que dos influencers se sumaran al proyecto: Agustín Laje como capacitador y Emmanuel Danann en la promoción de los cursos.
    </p>

    <p class="timeline-item-p">
        Agustín Laje es escritor e influencer de ultraderecha, identificado como aliado de Milei. En YouTube tiene más de 2.2 millones de suscriptores y casi un millón de seguidores en Instagram. Entre sus libros destacan El libro negro de la nueva izquierda (2016), La Batalla Cultural (2022) y Generación Idiota: una crítica al adolescentrismo (2023). Se opone a los movimientos LGBTIQ+ y feminista.
    </p>

    <p class="timeline-item-p">
        Por su parte, Emmanuel Danann es un influencer, streamer, youtuber, y activista político argentino ultraconservador y de extrema derecha. A raíz de esto fue que APTRA decidió premiarlo como “Influencer de opinión” en la edición 2021 del Martín Fierro Digital. Logró tener alcance mediático por su canal de YouTube en donde suele hacer críticas soeces a la izquierda política, al feminismo, a la comunidad LGBT, y al ecologismo. Además de ejercer como influencer político, también incursionó en la música donde lidera como vocalista la banda de rock Danann, formada en 2008, donde llevan nueve álbumes de estudio realizados. En 2018 fue contratado por la cúpula de la AFI macrista para supuestamente infiltrarse en el partido que lidera Javier Milei aunque terminó vinculado al mismo. En el año 2024 Pablo Casas, Juez de Primera Instancia en el fuero Penal Contravencional y de Faltas, a cargo del Juzgado Nº 10, dictaminó que debía realizar 40 horas de tareas comunitarias y participar de un taller de formación contra la violencia de género por el hostigamiento sistemático en redes sociales por motivos de género contra la periodista Marina Abiuso.
    </p>

    <embed type="video/mp4" src="https://rudo.video/vod/bTKdWy?volume=0" height="530" />
</Event>