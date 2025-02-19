<script lang="ts">
    import {
        Button,
        Activity,
        ActivityItem,
        Group,
        GroupItem,
        Timeline,
        TimelineItem,
		Img,
        Badge,
    } from 'flowbite-svelte';
    import Youtube from "svelte-youtube-embed";

    import { Tweet } from 'sveltekit-tweet';
	import type { PageData } from './$types';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import TimelineAvatar from '$lib/components/TimelineAvatar.svelte';

    let { data }: {
		data: PageData;
	} = $props();
</script>

<style>
    .timeline {
        margin-top: 5em;
    }
    .timeline-item-p {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 400;
        text-align: justify;
        color: #6b7280;
        /* Dark mode styles */
        color: #9ca3af; 
    }
</style>


<div class="timeline">
    <Timeline order="vertical">
        <!------------------------------------ 2019 ------------------------------------>
        <TimelineItem title="Mauricio Novelli funda el instituto N&W Professional Traders" date="2019" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Jeremías Walsh</Badge>
            </p>

            <p class="timeline-item-p">
                <strong>Mauricio Gaspar Novelli</strong>, 29 años, licenciado en comercialización, fue empleado de Arrayanes Capital SA y Créditos Al Río. La estafa millonaria en la que esas firmas tuvieron un rol crucial se conoció en público como <strong>caso Wenance</strong>. A pesar de haber tenido puestos en esas dos firmas creadas para el engaño, Novelli se reinventó.
            </p>
            <p class="timeline-item-p">
                Junto con otro trader, <strong>Jeremías Walsh</strong>, fundaron el instituto en el que ofrecían clases para novatos en el arte de la operatoria financiera a un solo click.
            </p>
            <Button
                color="alternative"
                href="https://www.clarin.com/politica/escandalo-cripto-empresario-acerco-milei-vinculado-fraudes-millonarios_0_QzbQWTVIvj.html?srsltid=AfmBOorUv4ZmfcfgdH3dvjFqnHfRP3vlrvQIg6xoWmqvDj0p51lVhGzJ#:~:text=accedi%C3%B3%20Clar%C3%ADn.-,Novelli%20fue%20empleado%20de%20Arrayanes%20Capital%20SA%20y%20Cr%C3%A9ditos%20Al%20R%C3%ADo,gan%C3%B3%20la%20confianza%20de%20los%20Milei%20en%20los%20%C3%BAltimos%20a%C3%B1os.,-%C3%89l%20oculta%20en"
                target="_blank">
                Fuente: Clarín
            </Button>
            <Button
                color="alternative"
                href="https://www.linkedin.com/company/nwprofessionaltraders/about/#:~:text=Fundaci%C3%B3n,2019"
                target="_blank">
                Fuente: LinkedIn de N&W
            </Button>
        </TimelineItem>

        <!------------------------------------ 2020 ------------------------------------>
        <TimelineItem title="Milei recomienda N&W Professional Traders" date="26 de enero, 2020" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Jeremías Walsh</Badge>
                <Badge rounded large color="dark">Agustín Laje</Badge>
                <Badge rounded large color="dark">Emmanuel Danann</Badge>
            </p>

            <Tweet tweet={data.Milei_promocion_NW_2020} />
            <Tweet tweet={data.Milei_promocion_2_NW_2020} />

            <p class="timeline-item-p">
                A partir de entonces, <strong>Javier Milei</strong> mantendrá un vínculo estrecho con ellos. Es tan así que él mismo se presentaba como parte del staff de N&W, como se puede apreciar en la imagen siguiente, perteneciente a su perfil de Instagram en aquel momento.
            </p>

            <Img
                src="https://dobleamarilla-assets.tadevel-cdn.com/67b39740beb6aeb9d6f1ac53/720.webp"
                alt="sample 1"
                size="max-w-xl"
                class="rounded-lg"
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
            <Button
                color="alternative"
                href="https://www.perfil.com/noticias/politica/escandalo-libra-de-que-se-trataban-los-cursos-que-dictaron-agustin-laje-y-javier-milei-en-nw-professional-traders.phtml#:~:text=El%20libertario%20fue%20la%20puerta%20de%20entrada%20para%20que%20dos%20influencers%20se%20sumaran%20al%20proyecto%3A%20Agust%C3%ADn%20Laje%20como%20capacitador%20y%20Emanuel%20Dannan%20en%20la%20promoci%C3%B3n%20de%20los%20cursos."
                target="_blank">
                Fuente: Perfil
            </Button>
            <Button
                color="alternative"
                href="https://es.wired.com/articulos/no-solo-es-milei-estas-figuras-publicas-tambien-han-sido-implicadas-en-el-escandalo-dollarlibra#:~:text=y%20transici%C3%B3n%20energ%C3%A9tica.-,Agust%C3%ADn%20Laje,adolescentrismo%20(2023).%20Se%20opone%20a%20los%20movimientos%20LGBTIQ%2B%20y%20feminista.,-Mart%C3%ADn%20Menem"
                target="_blank">
                Fuente: Wired
            </Button>
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/480920-dannan-el-influencer-antiderechos-misogino-libertario-y-tamb"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="Emmanuel Danann realiza un 'vivo' con Novelli de N&W Professional Traders" date="agosto, 2020" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.EmmanuelDanann} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Emanuel Dannan</Badge>
            </p>

            <embed type="video/mp4" src="https://rudo.video/vod/bTKdYy?volume=0" height="530" />
            <Button
                color="alternative"
                href="https://www.perfil.com/noticias/politica/escandalo-libra-de-que-se-trataban-los-cursos-que-dictaron-agustin-laje-y-javier-milei-en-nw-professional-traders.phtml#:~:text=En%20agosto%2C%20Dannan%20particip%C3%B3%20de%20un%20vivo%20con%20Novelli%20y%20luego%20comparti%C3%B3%20otras%20publicaciones%20con%20conversaciones%20sobre%20el%20mundo%20del%20trading."
                target="_blank">
                Fuente: Perfil
            </Button>
        </TimelineItem>

        <!------------------------------------ 2021 ------------------------------------>
        <TimelineItem title="Primer fraude: Milei recomienda CoinX World" date="18 de diciembre, 2021" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Con una inversión mínima de US$ 500 o de $ 100 mil en aquel entonces, prometían una rentabilidad del 5%, y para aquellos que ingresaban con un monto de US$ 1.000 aseguraban una rentabilidad del 8% mensual. “Hacemos inversiones de muy bajo riesgo y tenemos traders profesionales que están constantemente analizando el mercado”, argumentaba CoinX. Sin embargo, expertos del sector financiero advirtieron que tales tasas eran insostenibles y compararon su funcionamiento con un esquema Ponzi, ya que no se encontraban registrados ante la CNV.
            </p>
            <p class="timeline-item-p">
                Mas tarde, la empresa (cuya sede central se encontraba en El Salvador) sería denunciada por fraude.
            </p>
            <Youtube id="LeyMsR7UNl8" />          

            <Button
                color="alternative"
                href="https://www.instagram.com/p/CXoGvseA1OG/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                target="_blank">
                Link: Post en el Instagram de Milei
            </Button>
        </TimelineItem>

        <!------------------------------------ 2022 ------------------------------------>
        <TimelineItem title="Segundo fraude: Milei recomienda Vulcano" date="18 de febrero, 2022" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                En febrero de 2022, <strong>Mauricio Novelli</strong> creó NFT Gaming, y el proyecto Vulcano Game. El 18 de febrero Javier Milei hizo en redes una publicidad que hoy suena premonitoria: "Muy interesante el proyecto de Vulcano Game (NFT Gaming). Un diagrama económico sostenible en el tiempo a diferencia de la gran mayoría. Les dejo su web: vulcano.gg" .
            </p>
            <p class="timeline-item-p">
                Pocas semanas después, el token de la empresa de videojuegos, <strong>$VULC</strong>, se desplomó a $0 con denuncias de fraude, igual que sucedió con <strong>$LIBRA</strong>.
            </p>

            <Img
                src="https://media.c5n.com/p/bce6674c1e30baa973c5fce3c1ceaa04/adjuntos/326/imagenes/000/315/0000315489/790x0/smart/tuit-javier-milei-vulcano-game-nft-gaming-guillermo-novelli-18-febrero-2022.png"
                alt="sample 1"
                size="max-w-lg"
                class="rounded-lg"
            />
            
            <Button
                color="alternative"
                href="https://www.c5n.com/politica/escandalo-cripto-quienes-son-mauricio-novelli-y-manuel-terrones-godoy-apuntados-estar-detras-libra-n191194#:~:text=En%20febrero%20de,sucedi%C3%B3%20con%20%24LIBRA."
                target="_blank">
                Fuente: C5N
            </Button>
            <Button
                color="alternative"
                href="https://x.com/JMilei/status/1494771114869993478"
                target="_blank">
                Fuente: Tweet de Milei
            </Button>
        </TimelineItem>

        <!------------------------------------ 2023 ------------------------------------>
        <TimelineItem title="Mauricio Novelli felicita a Javier Milei por la victoria en las elecciones presidenciales" date="19 de noviembre, 2023" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <Tweet tweet={data.Novelli_felicita_Milei_2023} />
        </TimelineItem>

        <TimelineItem title="Asume Javier Milei la Presidencia: Mauricio Novelli y Manuel Terrones Godoy serían invitados a la Gala del Teatro Colón" date="10 de diciembre, 2023" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <Tweet tweet={data.Asume_Milei_10_12_2023} />
        </TimelineItem>

        <!------------------------------------ 2024 ------------------------------------>
        <TimelineItem title="1º reunión de Novelli: Casa Rosada con Karina Milei" date="8 de enero, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                En los primeros días del gobierno de los hermanos Milei, Novelli ingresó a ver a Karina pocos minutos antes de las 15 hs y se fue pasadas las 19.30. Un día largo en la Rosada. Ésta será la primera de 8 reuniones oficiales que tendrá Novelli con los hermanos Milei, post asunción.
            </p>
            <p class="timeline-item-p">
                Dato de color, ninguna de las reuniones de Karina Milei con Novelli figuran en el registro oficial de audiencias. Todos fueron detectadas por <strong>El Destape</strong> en la planilla de accesos a la Casa Rosada.
            </p>
            <p class="timeline-item-p">
                Un dato curioso: al mismo momento entraron a la Casa Rosada 3 importantes representantes del FMI: Luis Cubeduu, Ashvin Ahuja y Ben Kelmanson. Según la planilla los directivos del FMI se reunieron con el entonces jefe de gabinete Nicolás Posse. Y más curioso es que, según las mismas planillas de ingreso, Novelli y los hombres del FMI se retiraron a exactamente a la misma hora, las 19.33hs.
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=1%20%E2%80%93%208%20de,en%20la%20Rosada."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="2º reunión de Novelli: Casa Rosada con Karina Milei" date="5 de abril, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                Karina recibió a Novelli, que fue acompañado por un tal Beek Uolderrier (así figura en la planilla), Ivan Canales Vandewijngaerden (director ejecutivo de Degussa Global Custodia y de ICV Advisors) y August Von Finck, heredero de una de las principales fortunas alemanas. Estuvieron casi 1 hora.
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=2%20%E2%80%93%205%20de,casi%201%20hora."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="3º reunión de Novelli: Casa Rosada con Karina Milei" date="6 de junio, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Sergio Morales</Badge>
                <Badge rounded large color="dark">Santiago Caputo</Badge>
            </p>

            <p class="timeline-item-p">
                Karina recibió de nuevo a Novelli el 6 de junio a las 12.20hs. Novelli fue acompañado por <strong>Sergio Morales</strong>. Minutos antes había ingresado a la Casa Rosada <strong>Santiago Caputo</strong>.
            </p>
            <p class="timeline-item-p">
                Sergio Morales es un asesor de la Comisión Nacional de Valores (CNV) y tiene una consultora que se llama Criptocity. Mientras asesora a la CNV, le lleva al organismo empresarios del sector, como Binance y KoiBanx. 
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=3%20%2D%206%20de,Rosada%20Santiago%20Caputo."
                target="_blank">
                Fuente: El Destape
            </Button>
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804396-tech-forum-la-cueva-de-los-negocios-y-las-coimas#:~:text=En%20el%20Foro%20del%20a%C3%B1o%20pasado%20participaron%20un%20asesor%20y%20un%20funcionario%20de%20la%20Comisi%C3%B3n%20Nacional%20de%20Valores%20(CNV)%2C%20un%20organismo%20del%20Estado%20que%20debe%20regular%20la%20especulaci%C3%B3n.%20La%20referencia%20es%20para%20Sergio%20Morales%20y%20Alejandro%20Rodr%C3%ADguez%20Ariola%2C%20analista%20de%20investigaciones%20del%20organismo%20y%20experto%20en%20tecnolog%C3%ADa."
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="4º reunión de Novelli: Casa Rosada con Karina Milei" date="11 de junio, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <p class="timeline-item-p">
                El 11 de junio, 5 días después de la anterior reunión, Karina recibió otra vez a Novelli. Esta vez fue acompañado por Sergio Morales y por <strong>Manuel Terrones Godoy</strong>, un Youtuber radicado en México que dejó la carrera de ingeniería para dedicarse al mundo gamer y es uno de los referentes de ese mundillo donde buscan ganar dinero con los videojuegos.
            </p>

            <Img
                src="https://images.pagina12.com.ar/styles/focal_3_2_700x467/public/2025-02/913998-dos_0.jpeg?h=3511df1e&itok=hhYkkd1d"
                alt="Mauricio Novelli y Manuel Torres Godoy, los creadores del Foro, en su visita a Casa Rosada.. Imagen: Redes sociales"
                size="max-w-lg"
                class="rounded-lg"
            />

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=4%20%E2%80%93%2011%20de,con%20los%20videojuegos."
                target="_blank">
                Fuente: El Destape
            </Button>
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804396-tech-forum-la-cueva-de-los-negocios-y-las-coimas"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="5º reunión de Novelli: Casa Rosada con Karina Milei" date="16 de julio, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                Karina recibió a Novelli pasadas las 15. Estuvieron en la reunión el youtuber Terrones Godoy (cofundador de Tech Forum); Bartosz Lipinski, cofundador y CEO de Cube Group y que trabajó también en <em>Solana</em>, la plataforma de <em>blockchain</em> sobre la que operó la estafa de <strong>LIBRA</strong>; y <strong>Hayden Mark Davis</strong>, ahora apuntado por <strong>Kit Protocol</strong> como el responsable de <strong>$LIBRA</strong>.
            </p>

            <p class="timeline-item-p">
                Davis es fundador y CEO de Kelsier Ventures, una empresa dedicada a financiar proyectos innovadores en el ámbito de las criptomonedas y la tecnología blockchain. Ha mantenido vínculos con figuras políticas de alto perfil como Donald Trump, el presidente de Estados Unidos. Mas adelante en el tiempo, Davis se autodefinirá como “asesor” de Javier Milei.
            </p>

            <p class="timeline-item-p">
                Davis volvería a Casa Rosada mas adelante...
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=5%20%E2%80%93%2016%20de,responsable%20de%20%24LIBRA."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="6º reunión de Novelli: Casa Rosada con Karina Milei" date="1 de agosto, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                Karina recibió de nuevo a Novelli. Esta vez figura solo, con un ingreso a las 19.59hs.
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=6%20%2D%201%20de,a%20las%2019.59hs."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="Las redes sociales de Tech Forum empiezan a traccionar" date="6 de septiembre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <Tweet tweet={data.Cofundadores_Tech_Forum_06_09_2024} />
        </TimelineItem>

        <TimelineItem title="Aparición de Tech Forum en TN Tecno" date="16 de septiembre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <Tweet tweet={data.Novelli_TN_Tecno_16_09_2024} />
        </TimelineItem>

        <TimelineItem title="Se anuncia a Javier Milei como orador principal del Tech Forum" date="17 de septiembre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <Tweet tweet={data.Milei_main_speaker_17_09_2024} />
        </TimelineItem>

        <TimelineItem title="7º reunión de Novelli: Casa Rosada con Javier Milei" date="20 de septiembre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                Tras varias reuniones con Karina, el 20 de septiembre de 2024 Milei recibió a Novelli en su despacho presidencial. De hecho Novelli entró 2 veces ese día a la Casa Rosada. Una a las 10.54 y se retiró a las 11.51hs. Y luego volvió a las 14 y se fue a las 14.50hs.
            </p>

            <p class="timeline-item-p">
                <strong>Esta fecha de reuniones es la única que figura en el registro público de audiencias, donde sólo figura el encuentro de la mañana.</strong> La síntesis de la reunión dice que “se trataron temas relacionados al Tech Forum Argentina”, el evento que organizó Novelli un mes después y al que asistió Milei. Milei y Novelli compartieron la foto de este encuentro desde la cuenta de Tech Forum.
            </p>

            <Tweet tweet={data.Milei_Novelli_20_09_2024} />
            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=7%20%E2%80%93%2020%20de,a%20las%2014.50hs."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="8º reunión de Novelli: Quinta de Olivos con Javier Milei" date="27 de septiembre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                Milei recibió a Novelli una semana después en la Quinta de Olivos. Esta reunión, muy breve, tampoco figura en el registro público de audiencias. Apenas se fue Novelli el que visitó al presidente y se quedó un buen rato fue Daniel Parisini, alias Gordo Dan, jefe de las milicias digitales del presidente.
            </p>

            <p class="timeline-item-p">
                El Destape ya hizo el pedido de acceso a la información pública para las planillas de ingresos a Olivos y la Rosada desde octubre hasta hoy pero aún no tuvo respuesta. Es posible que las reuniones sean más.
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=8%20%E2%80%93%2027%20de,digitales%20del%20presidente."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="Maximiliano Firtman advierte señales de sospecha acerca del Tech Forum" date="18 de octubre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MaximilianoFirtman} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Maximiliano Firtman</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Maximiliano Firtman, programador, docente y periodista especializado en tecnología, publica en X un mensaje advirtiendo que los organizadores de Tech Forum son estafadores. Lo llama un asesor de Milei, preocupado por su tweet, diciendo que si era verdad “suspendían todo”. Firtman les hace un informe y se los envía, pero no hacen nada.
            </p>

            <Tweet tweet={data.Maxi_Firtman_sobre_Davis_17_02_2025} />
        </TimelineItem>

        <TimelineItem title="Manuel Terrones Godoy (cofundador de Tech Forum) es acusado en el programa Argenzuela" date="19 de octubre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.ManuelTerronesGodoy} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <p class="timeline-item-p">
                Según informó el periodista Diego Gabriele en Argenzuela en octubre de 2024, en ocasión de la celebración del evento Tech Forum, Terrones Godoy es creador de "una cripto trucha llamada 'El Chavo del 8', con la que captó u$s250.000 y se los fugó".
            </p>
            <p class="timeline-item-p">
                Radicado en México, se hizo famoso como youtuber aconsejando cómo ganar dinero jugando videojuegos. Con casi un millón de suscriptores y un promedio de 100 mil vistas por video, es uno de los comunicadores más relevantes dentro del universo de los NFTs Games.
            </p>

            <Button
                color="alternative"
                href="https://www.c5n.com/politica/escandalo-cripto-quienes-son-mauricio-novelli-y-manuel-terrones-godoy-apuntados-estar-detras-libra-n191194#:~:text=Terrones%20Godoy%20es,los%20NFTs%20Games."
                target="_blank">
                Fuente: C5N
            </Button>
        </TimelineItem>

        <TimelineItem title="Javier Milei da su charla en el marco de la primera edición del Tech Forum" date="19 de octubre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
            </p>

            <p class="timeline-item-p">
                Luego de todas estos encuentros en la Casa Rosada y en Olivos llegó el <strong>Tech Forum</strong>, el evento sobre “tecnologías disruptivas” que organizó Novelli en octubre del año pasado y que tiene una próxima convocatoria del 3 al 5 de abril próximos.
            </p>
            <p class="timeline-item-p">
                Milei fue el orador de cierre en la misma sala del Hotel Libertador donde festejó su triunfo electoral. Dio un discurso de 44 minutos. 
            </p>

            <Tweet tweet={data.Milei_Tech_Forum_Infobae_19_10_2024} />
        </TimelineItem>

        <TimelineItem title="Reunión de Julián Peh con Javier Milei post Tech Forum" date="19 de octubre, 2024" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JulianPeh} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Julián Peh</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Adorni</Badge>
            </p>

            <p class="timeline-item-p">
                En ese marco fue que se reunió con Julián Peh, empresario de Singapur y CEO de Kit Protocol, la firma detrás de esta estafa virtual. Peh es un empresario tecnológico singapurense con más de dos décadas de experiencia en el sector. Fundó Kip Network Inc. en 2019 y, según su sitio web, ha participado en cuatro salidas exitosas a la bolsa. Se especializa en fusiones, adquisiciones y tecnologías Web3 desde 2016.
            </p>
            <p class="timeline-item-p">
                El periodista Agustín Giménez ha señalado que Kip Network Inc. estuvo involucrada en la emisión de una criptomoneda en la República Centroafricana, cuyo valor fue inflado artificialmente antes de retirar la liquidez, dejando a los inversores sin posibilidad de recuperar sus fondos.
            </p>

            <p class="timeline-item-p">
                La reunión de Milei con Peh fue el 19 de octubre de 2024. La juntada, según el registro de audiencias oficial del Ministerio del Interior, fue en el Hotel Libertador. Es extraño: Milei ya era presidente pero eligió juntarse con Peh en el hotel que fue su morada entre que ganó las elecciones y se mudó a la quinta de Olivos. Y más extraño es que lo pusieran en el registro de audiencias público, que sólo contiene las que se producen en las oficinas públicas.
            </p>
            
            <Tweet tweet={data.Milei_Peh_20_10_2024} />

            <p class="timeline-item-p">
                Hubo foto grupal en el Tech Forum. Milei en el centro; hacia la derecha, con anteojos, Julian Peh; más a la derecha, en la punta, Mauricio Novelli.
            </p>

            <Tweet tweet={data.Grupal_Tech_Forum_20_10_2024} />

            <p class="timeline-item-p">
                Del encuentro privado de Milei con Peh participaron el vocero presidencial Manuel Adorni y Novelli. Según la información oficial: “Analizaron cómo la tecnología de IA descentralizada de KIP puede respaldar a Argentina”. “El presidente Milei expresó un fuerte apoyo a estas innovaciones e iniciativas, posicionando a KIP como un actor fundamental en la transformación tecnológica de Argentina. Este compromiso de alto nivel coloca a $KIP en el centro de atención como un actor clave de IA en Latinoamérica”, sostuvo Julian Peh tras el encuentro con Milei.
            </p>

            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=reuniones%20sean%20m%C3%A1s.-,Tech%20Forum,tiene%20una%20pr%C3%B3xima%20convocatoria%20del%203%20al%205%20de%20abril%20pr%C3%B3ximos.,-Milei%20fue%20el"
                target="_blank">
                Fuente: El Destape
            </Button>
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/politica/quien-es-julian-peh-el-ceo-de-la-empresa-detras-de-la-memecoin-libra-que-promovio-javier-milei-nid15022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
            <Button
                color="alternative"
                href="https://es.wired.com/articulos/no-solo-es-milei-estas-figuras-publicas-tambien-han-sido-implicadas-en-el-escandalo-dollarlibra#:~:text=posible%20esquema%20piramidal.-,Julian%20Peh,liquidez%2C%20dejando%20a%20los%20inversores%20sin%20posibilidad%20de%20recuperar%20sus%20fondos.,-Hayden%20Mark%20Davis"
                target="_blank">
                Fuente: Wired
            </Button>
        </TimelineItem>

        <!------------------------------------ 2025 ------------------------------------>
        <TimelineItem title="Se lanza $TRUMP, la cripto de Donald Trump" date="17 de enero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.DonaldTrump} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Donald Trump</Badge>
            </p>

            <p class="timeline-item-p">
                Incluso tres días antes de asumir la presidencia por segunda vez, el mandatario electo lanzó una memecoin (moneda meme) inspirada en su figura, llamada $TRUMP, con el objetivo de “celebrar” y “respaldar” su victoria. La iniciativa fue coordinada por CIC Digital LLC, una filial de la Organización Trump, que previamente había comercializado productos como zapatos y fragancias bajo la marca “Trump”.
            </p>

            <p class="timeline-item-p">
                Trump anunció su meme coin a través de sus cuentas en X y Truth Social, generando un notable interés entre sus seguidores. Sin embargo, dejó claro que se trataba de una meme coin bajo su propiedad y no la presentaba como una herramienta económica oficial. Quienes adquirieron los tokens probablemente lo hicieron por afinidad hacia su figura, más que por expectativas de un rendimiento financiero significativo. El proceso de lanzamiento fue relativamente transparente, ya que su valor se basaba principalmente en el respaldo simbólico del propio Trump, lo que convirtió a la moneda en un artículo de colección con un valor limitado en términos de especulación financiera.
            </p>

            <p class="timeline-item-p">
                En el caso de $TRUMP, su sitio web detalla que los poseedores mayoritarios están sujetos a un calendario de desbloqueo de tres años, lo que impide que puedan vender grandes cantidades de tokens de forma inmediata. Esta medida busca generar un grado de seguridad y confianza entre los inversores.
            </p>

            <Tweet tweet={data.Trump_token_17_01_2025} />
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/estados-unidos/escandalo-cripto-cuales-son-las-diferencias-entre-las-memecoins-que-promocionaron-trump-y-milei-nid18022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="Se lanza $MELANIA, la cripto de Melania Trump" date="18 de enero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MelaniaTrump} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Donald Trump</Badge>
                <Badge rounded large color="dark">Melania Trump</Badge>
            </p>

            <p class="timeline-item-p">
                Un día después de lanzado el token de su marido, Melania Trump lanzó su propia criptomoneda ($Melania) como parte de su iniciativa para recaudar fondos para su programa de bienestar infantil Be Best, que promovía la salud y el bienestar de los niños.
            </p>

            <p class="timeline-item-p">
                Ambas meme coins generaron controversias debido a posibles conflictos de interés, su uso como herramientas para fortalecer las imágenes públicas de sus creadores y recaudar fondos de manera poco transparente. A pesar de las críticas, no hubo repercusiones legales porque no se demostró la existencia de fraude ni manipulación del mercado, y el propósito declarado de las monedas era principalmente benéfico o promocional, lo que dificultó la formulación de acusaciones formales.
            </p>

            <Tweet tweet={data.Melania_token_19_01_2025} />
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/estados-unidos/escandalo-cripto-cuales-son-las-diferencias-entre-las-memecoins-que-promocionaron-trump-y-milei-nid18022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="Reunión de Hayden Mark Davis con Javier Milei" date="30 de enero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                Davis volvió el 30 de enero de 2025 a la Casa Rosada. Lo contó el propio Milei, que publicó en sus redes la foto con Davis y escribió: “Hoy mantuvimos una muy interesante charla con el empresario Hayden Mark Davis, quien me estuvo asesorando sobre el impacto y las aplicaciones de la tecnología blockchain e inteligencia artificial en el país. Seguimos trabajando para acelerar el desarrollo tecnológico argentino y hacer de Argentina una potencia tecnológica mundial”. El Destape pidió pero aún no tuvo respuesta oficial por la planilla de ingresos a Casa Rosada de enero de 2025, por lo que no puede confirmar si Novelli también estuvo ese día. No sería extraño.
            </p>

            <Tweet tweet={data.Milei_Davis_30_01_2025} />
            <Button
                color="alternative"
                href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=Davis%20volvi%C3%B3%20el,No%20ser%C3%ADa%20extra%C3%B1o."
                target="_blank">
                Fuente: El Destape
            </Button>
        </TimelineItem>

        <TimelineItem title="Javier Milei sube y dejado fijado el famoso tweet sobre la promoción de $LIBRA" date="14 de febrero, 2025 - 19:01 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                A las 19:01 hs del 14 de febrero del 2025, Javier Milei postea un tweet sorpresivo, promocionando (o difundiendo, como insitiría posteriormente) un nuevo token llamado $LIBRA, subiendose a la ola cripto iniciada por los Trump días atras. Aunque en principio hay algunas diferencias, Milei nunca tilda la criptomoneda como una 'memecoin', algo que los Trump si hicieron y al momento de 'difundir' el token no eran parte del gobierno, pero Milei si. Además, toda una serie de irregularidades técnicas que se fueron descubriendo a lo largo de las siguientes 5 horas.
            </p>
            <p class="timeline-item-p">
                En la teoría, la idea del proyecto (cuya <a href="https://www.vivalalibertadproject.com/es-ar">web</a> aún es accesible) era "impulsar la economía Argentina financiando pequeños proyectos y empresas locales, apoyando a quienes buscan emprender y contribuir al desarrollo del país."
            </p>

            <p class="timeline-item-p">
                Spoiler: el tweet en cuestión no está presente (se adjunta una captura de la misma donde se aprecia que estaba fijado en su cuenta) ya que será borrado a las horas, cuando ya era muy tarde.
            </p>
            <Img
                src="https://www.clarin.com/2025/02/14/7of_Na1Is_720x0__1.jpg"
                alt="sample 1"
                size="max-w-xl"
                class="rounded-lg"
            />
            <Button
                color="alternative"
                href="https://www.clarin.com/politica/patricia-bullrich-defendio-milei-escandalo-cripto-increible-pedir-juicio-politico-tuit_0_bvcJ50UcsC.html"
                target="_blank">
                Fuente: Clarín
            </Button>
        </TimelineItem>

        <TimelineItem title="Los 'insiders' adquirieron el token $LIBRA al instante del lanzamiento" date="14 de febrero, 2025 - 19:01 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Fernando Molina</Badge>
            </p>

            <p class="timeline-item-p">
                "Estuvo todo digitado desde el minuto 0". Así lo afirmó Fernando Molina, especialista en información y análisis cripto, en relación al escándalo de Javier Milei y $LIBRA, tras la promoción presidencial del token que causó estafas millonarias a 44.000 usuarios.
            </p>
            <p class="timeline-item-p">
                "Si quedan dudas miren las fotos: las compras más grandes se hicieron literalmente al mismo momento que Milei sacó el tweet (a los 00 segundos). La única forma de saber que era la memecoin de Milei era teniendo el dato previamente, siendo un insider. Estuvo todo digitado desde el minuto 0".
            </p>
            <p class="timeline-item-p">
                Nota: la hora indicada en la imagen del tweet está en horario UTC. Por lo tanto las 22:01 serían las 19:01 hora Argentina. Es decir, exactamente el instante en que Milei postea el primer tweet sobre $LIBRA. Esto evidencia que su participación es absolutamente necesaria para la sucesión de los hechos.
            </p>

            <Tweet tweet={data.Insiders_buying_14_02_2025} />
            <Button
                color="alternative"
                href="https://www.tiempoar.com.ar/ta_article/milei-y-el-cripto-escandalo-con-libra-estuvo-todo-digitado-desde-el-minuto-cero/"
                target="_blank">
                Fuente: Tiempo Argentino
            </Button>
        </TimelineItem>

        <TimelineItem title="Se revela que el dominio web 'vivalalibertadproject.com' fue registrado en el mismo día del lanzamiento" date="14 de febrero, 2025 - 19:27 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Efectivamente se descubre que el dominio web 'vivalalibertadproject.com' había sido registrado el mismo día del lanzamiento, momentos antes del mismo, y solo por un año. Además el correo electrónico del sitio del proyecto era una simple cuenta de Gmail y la web te vincula a un Google Form para aplicar. Por último, la información del dueño del dominio era privada.
            </p>
            <Tweet tweet={data.Domain_info_14_02_2025} />
        </TimelineItem>

        <TimelineItem title="La cuenta Bubblemaps advierte que el 82% de $LIBRA está desbloqueado" date="14 de febrero, 2025 - 19:38 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                La empresa de análisis de blockchain Bubblemaps advierte antes del colapso sobre la tokenomics defectuosa de $LIBRA, revelando que el 82% del suministro estaba desbloqueado y vendible desde el principio (lo que en el argot financiero se conoce como <em>rug pull</em>).
            </p>

            <Tweet tweet={data.Bubblemaps_tweet_14_02_2025} />
            <Tweet tweet={data.Bubblemaps_tweet_2_14_02_2025} />
            
            <Button
                color="alternative"
                href="https://www.infobae.com/economia/2025/02/16/glosario-cripto-que-significan-rug-pull-pump-and-dump-staking-y-otros-terminos-del-mundo-digital/#:~:text=interesantes%20de%20conocer%3A-,Rug%20Pull,la%20experta%20en%20criptomonedas%20%E2%80%9CLady%20Market%E2%80%9D%2C%20en%20su%20cuenta%20de%20X.,-%E2%80%9CGeneralmente%20los%20due%C3%B1os"
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="Nicolas Passini levanta sospechas sobre la wallet del desarrollador de $LIBRA" date="14 de febrero, 2025 - 20:07 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.NicolasPassini} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Nicolas Passini</Badge>
            </p>

            <p class="timeline-item-p">
                Nicolás Passini, experto en cripto finanzas, indicó los mismos <em>red flags</em> que muchos otros usuarios de X. A esta altura de la noche, la idea que la cuenta de Javier Milei había sido hackeada todavía tenía peso.
            </p>
            <Tweet tweet={data.Nicolas_Passini_tweet_14_02_2025} />
        </TimelineItem>

        <TimelineItem title="Fran Fijap bancó el token $LIBRA, invirtiendo al menos 4.140 dólares" date="14 de febrero, 2025 - 20:20 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.FranFijap} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Fran Fijap</Badge>
            </p>

            <p class="timeline-item-p">
                Fran Fijap, el youtuber libertario, se mostró entusiasmado con su inversión de $LIBRA y lo compartió en X. Por la captura que mostró, se deduce que invirtió 4.140 dólares y al momento de subir el tweet estaba obteniendo 3.420.30 dólares de ganancia. Se desconoce si pudo mantenerla o si perdió todo, pero al tiempo borró su tweet y subió otro practicando una defensa acérrima a Javier Milei.
            </p>

            <Img
                src="https://pbs.twimg.com/media/Gj2MVSzWIAAfzD0.jpg:large"
                alt="Fran Fijap muestra en X su inversión en LIBRA"
                size="max-w-xl"
                class="rounded-lg"
            />
            <Tweet tweet={data.Fran_Fijap_15_02_2025} />
        </TimelineItem>

        <TimelineItem title="'El Gordo Dan' sale a apoyar a Javier Milei" date="14 de febrero, 2025 - 20:24 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.ElGordoDan} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">El Gordo Dan</Badge>
            </p>

            <p class="timeline-item-p">
                Daniel Parisini, conocido por su nombre en redes sociales 'Gordo Dan', salió a bancar el tweet de Milei. Él es un activista político ultraconservador y de extrema derecha, empresario de medios argentino que ha llegado a ejercer la medicina. Es quien el 16 de noviembre del 2024 lanzó "Las Fuerzas del Cielo", la agrupación que pretende ser "el brazo armado" y "la guardia pretoriana" de Javier Milei.
            </p>
            <p class="timeline-item-p">
                Como tantos otros tweets y posteos, fue borrado al poco tiempo.
            </p>

            <Img
                src="https://media.minutouno.com/p/95c02b5819a435b95af9a0fa893f3688/adjuntos/150/imagenes/042/187/0042187667/610x0/smart/imagepng.png"
                alt="El Gordo Dan sale a bancar a Milei"
                size="max-w-xl"
                class="rounded-lg"
            />
        </TimelineItem>

        <TimelineItem title="Lilia Lemoine desmiente a los escépticos que difunden la versión del hackeo a Milei" date="14 de febrero, 2025 - 21:09 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.LiliaLemoine} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Lilia Lemoine</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <Tweet tweet={data.Milei_hackeado_14_02_2025} />
            <Tweet tweet={data.Lilia_sobre_Milei_hackeado_14_02_2025} />
        </TimelineItem>

        <TimelineItem title="Agustín Laje sale a bancar a Milei" date="14 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.AgustinLaje} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Agustin Laje</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Agustín Laje, el politólogo y escritor de ultraderecha especializado en la lucha contra la “ideología de género” y el “marxismo cultural”, realizó el siguiente tweet de apoyo a Javier Milei. Minutos después, Laje borró el mensaje sin dar mayores explicaciones.
            </p>

            <Img
                src="https://cdn.eldestapeweb.com/eldestape/022025/1739636442756/GjygRgeXUAAp-yy.webp?cw=933&ch=1407&extw=jpeg"
                alt="Agustín Laje sale a bancar a Milei"
                size="max-w-xl"
                class="rounded-lg"
            />
        </TimelineItem>

        <TimelineItem title="La billetera cripto Ripio anuncia que el token $LIBRA se encuentra disponible en su plataforma" date="14 de febrero, 2025 - 21:40 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                A menos de 3 horas del lanzamiento de $LIBRA, la billetera cripto Ripio informa que la tienen listada en su plataforma.
            </p>

            <Tweet tweet={data.Ripio_tweet_14_02_2025} />
        </TimelineItem>

        <TimelineItem title="El influencer Ape se viraliza tras declarar en pleno ataque de ira, haber perdido mas de 1 millón de dólares" date="14 de febrero, 2025 - 21:50 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Ape</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <Tweet tweet={data.Ape_rugged_14_02_2025} />
        </TimelineItem>

        <TimelineItem title="Javier Milei elimina el tweet donde promociona $LIBRA e 'intenta' aclarar la situación" date="15 de febrero, 2025 - 00:38 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Recién a las 0.38 del sábado, el presidente volvió a X. Borró el tuit promocional de $LIBRA y escribió otro en el que pretendía aclarar la cuestión. “Hace unas horas publiqué un tweet, como tantas otras infinitas veces, apoyando un supuesto emprendimiento privado del que obviamente no tengo vinculación alguna. No estaba interiorizado de los pormenores del proyecto y, luego de haberme interiorizado, decidí no seguir dándole difusión (por eso he borrado el tweet)”, arrancaba el texto. Luego volvió a su estilo habitual y trató de “ratas inmundas de la casta política” a quienes, según su criterio, quisieron “aprovechar esta situación para hacer daño”. Victimización.
            </p>
            <p class="timeline-item-p">
                
            </p>

            <Tweet tweet={data.Milei_primer_descargo_15_02_2025} />
            <Button
                color="alternative"
                href="https://www.infobae.com/politica/2025/02/16/cronologia-de-la-fallida-promocion-de-la-criptomoneda-libra-del-tuit-de-javier-milei-a-lo-que-podria-pasar-en-el-congreso/#:~:text=Reci%C3%A9n%20a%20las,hacer%20da%C3%B1o%E2%80%9D.%20Victimizaci%C3%B3n."
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="KIP Protocol, la empresa de Julián Peh, dice que el lanzamiento de $LIBRA fue un éxito" date="15 de febrero, 2025 - 00:38 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JulianPeh} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Julian Peh</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Exactamente a la misma hora, las 0.38 del sábado, desde la cuenta de KIP Protocol postearon: “Hoy fue el lanzamiento del proyecto Viva la Libertad y la moneda $LIBRA ha sido un éxito, y queremos agradecer a todos por su confianza y apoyo. Queremos aclarar que el presidente Milei no estuvo ni está involucrado de ninguna manera en el desarrollo del proyecto que es absolutamente privado”.
            </p>
            <p class="timeline-item-p">
                
            </p>

            <Tweet tweet={data.KIP_protocol_15_02_2025} />
            <Button
                color="alternative"
                href="https://www.infobae.com/politica/2025/02/16/cronologia-de-la-fallida-promocion-de-la-criptomoneda-libra-del-tuit-de-javier-milei-a-lo-que-podria-pasar-en-el-congreso/#:~:text=Exactamente%20a%20la,es%20absolutamente%20privado%E2%80%9D."
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="'Javier Milei acaba de destruir el mercado de memecoin' según The Kobeissi Letter" date="15 de febrero, 2025 - 00:59 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                La cuenta de X del boletín informativo The Kobeissi Letter publicó dicha sentencia, iniciando un hilo que recapituló lo acontecido horas antes. En la imagen del post (utilizada por múltiples medios) se aprecia el impacto del <em>rug pull</em>.
            </p>
            <p class="timeline-item-p">
                La noche terminó con el precio del token desplomandose hasta los veinte centavos de dolar, habiendo alcanzado su máximo en cinco dólares cada token.
            </p>

            <Tweet tweet={data.Kobeissi_Letter_15_02_2025} />
        </TimelineItem>

        <TimelineItem title="Se conocen los primeros números, 8 billeteras vinculadas a $LIBRA retiraron 107 millones de USD" date="15 de febrero, 2025 - 01:30 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Luego que el precio de $LIBRA se desplome en tan solo un par de horas, se conoce que 8 billeteras obtuvieron ganancias por 107 millones de dólares.
            </p>

            <Tweet tweet={data.Lookonchain_cashout_15_02_2025} />
            <Button
                color="alternative"
                href="https://www.perfil.com/noticias/cordoba/caso-libra-primera-denuncia-penal-en-cordoba-contra-milei-por-el-criptoescandalo.phtml#:~:text=%22Hubo%20ocho%20ganadores%2C%20cuyas%20identidades%20est%C3%A1n%20protegidas%20por%20el%20anonimato%2C%20que%20se%20hicieron%20en%20una%20noche%20con%20un%20bot%C3%ADn%20de%20107%20millones%20de%20d%C3%B3lares%22%2C%20indica%20el%20documento."
                target="_blank">
                Fuente: Perfil
            </Button>
        </TimelineItem>

        <TimelineItem title="Patricia Bullrich, de las primeras en defender a Javier Milei" date="15 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.PatriciaBullrich} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Patricia Bullrich</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                "Me parece que lo que está pasando, o lo que pasó anoche con respecto a un tuit del Presidente, fue como una bomba atómica para intentar bajar al Presidente de un hondazo. Una cosa increíble. Una cosa increíble pedir juicio político por un tuit", esgrimió la ministra -una de las voces más fuertes dentro del elenco del oficialismo- en defensa del mandatario y contra la oposición. Bullrich dijo que la intención del Presidente fue promover una iniciativa que tenía como fin hacerle "bien al país".
            </p>

            <p class="timeline-item-p">
                "Realmente ese tuit tuvo solo la intención de generar o mostrar cómo se podían financiar pequeñas empresas, emprendedores. Después cada uno toma su decisión. Bueno, lo tuvo que sacar porque fue increíble", agregó,
            </p>
            
            <Tweet tweet={data.Bullrich_defensa_15_02_2025} />
            <Button
                color="alternative"
                href="https://www.clarin.com/politica/patricia-bullrich-defendio-milei-escandalo-cripto-increible-pedir-juicio-politico-tuit_0_bvcJ50UcsC.html"
                target="_blank">
                Fuente: Clarín
            </Button>
        </TimelineItem>

        <TimelineItem title="Charles Hoskinson (cofundador de Cardano y ex cofundador de Ethereum) denuncia coimas en el Tech Forum" date="15 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.CharlesHoskinson} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Charles Hoskinson</Badge>
            </p>

            <p class="timeline-item-p">
                Según reveló en un video que circula en redes sociales, personas cercanas al presidente Javier Milei le pidieron coimas para gestionar una reunión con el mandatario y facilitar el avance de ciertos proyectos en Argentina.
            </p>

            <Youtube id="i5bkVaW4zAA" />
            <Button
                color="alternative"
                href="https://www.cronista.com/economia-politica/el-creador-de-una-de-las-cripto-mas-famosas-denuncio-un-pedido-de-coimas-en-el-entorno-de-milei-cosas-magicas/"
                target="_blank">
                Fuente: El Cronista
            </Button>
        </TimelineItem>

        <TimelineItem title="Hayden Mark Davis realiza su descargo" date="15 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                Hayden Mark Davis, CEO de Kelsier Ventures, empresa detrás de <strong>$LIBRA</strong>, culpó al presidente argentino por la abrupta caída. "A pesar de los compromisos previos, el presidente y su equipo inesperadamente revirtieron su postura. Es fundamental reconocer que las inversiones en memecoins dependen de la confianza y el respaldo. Cuando [el Gobierno argentino] eliminó sus publicaciones, los inversores que habían adquirido el token, confiando en su respaldo, se sintieron traicionados", aseguró.
            </p>
            <Tweet tweet={data.Davis_descargo_15_02_2025} />
        </TimelineItem>

        <TimelineItem title="La cuenta de X de la 'Oficina del Presidente' ensaya su intento de descargo" date="15 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.OficinaDelPresidente} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Julián Peh</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                Milei instruyó el sábado a la Oficina Anticorrupción a investigar si algún funcionario de su gobierno había incurrido en una conducta inapropiada (incluido él mismo, así de ridículo como suena) tras confirmarse que <strong>$LIBRA</strong> es una “moneda meme”, caracterizada por carecer de respaldo en la economía real. Esta medida fue lo que desató una ola de más de 100 denuncias en contra del mandatario.
            </p>
            <Tweet tweet={data.Oficina_Presidente_descargo_15_02_2025} />
        </TimelineItem>

        <TimelineItem title="El especialista cripto Fernando Molina comparte los números del post mortem" date="16 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Fernando Molina</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                * El 62% de las wallets perdieron entre 1 y 1k
            </p>
            <p class="timeline-item-p">
                * Un 21% ganó entre 1 y 1k
            </p>
            <p class="timeline-item-p">
                * Casi un 9% perdió entre 1k y 10k
            </p>
            <p class="timeline-item-p">
                * Un 2.7% perdió entre 10ky 100k
            </p>
            <p class="timeline-item-p">
                * Los que ganaron más de 100k son solo el 0.18%
            </p>
            <Tweet tweet={data.Fernando_Molina_analisis_16_02_2025} />

            <Button
                color="alternative"
                href="https://www.infobae.com/economia/2025/02/18/ganadores-y-perdedores-los-numeros-de-quienes-salieron-beneficiados-por-libra-y-quienes-pagaron-el-costo/"
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="Dave Portnoy, empresario de medios y contacto de Hayden Mark Davis contó que le regalaron 6.5 millones de $LIBRA pero las devolvió" date="16 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.DavePortnoy} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Dave Portnoy</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                El millonario Dave Portnoy (que tiene contacto frecuente con Hayden Davis) apareció públicamente denunciando una supuesta coima en la que recibió un total de 6.5 millones de la mencionada cripto para que escriba un mensaje en X (ex Twitter) y le diera impulso. No obstante, notó que la cosa estaba rara y las devolvió.
            </p>

            <p class="timeline-item-p">
                En un space de X, Portnoy, dueño de un medio relacionado con los deportes y conocido por apoyar a Donald Trump y decenas de comentarios racistas, relató que estuvo a punto de estar involucrada en la increíble estafa que ocurrió el viernes pasado, de la cual se “salvó” por no haber publicado nada al respecto.
            </p>
            <Tweet tweet={data.Dave_Portnoy_coima_16_02_2025} />

            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804477-criptoestafa-de-milei-un-multimillonario-conto-que-le-regala"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="Agustín Laje, presidente de la Fundación Faro, estaría involucrado en las coimas alrededor de Tech Forum y $LIBRA" date="16 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.AgustinLaje} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Agustín Laje</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Santiago Caputo</Badge>
            </p>

            <p class="timeline-item-p">
                La ruta de las posibles coimas que se pagaron para que el presidente Javier Milei respaldara la estafa de la criptomoneda $LIBRA conducen por varios caminos al militante libertario Agustín Laje, elegido por Santiago Caputo como presidente de su fundación El Faro, vehículo para recaudar fondos para la campaña de este año.
            </p>
            <p class="timeline-item-p">
                Ahora se supo incluso que, previo a la estafa, este grupo analizó lanzar una moneda meme destinada a financiar la Fundación Faro de Santiago Caputo y su hermano Francisco, un ex coaching motivacional con creciente peso en el armado libertario, en especial en la recaudación de fondos.
            </p>
            <p class="timeline-item-p">
                Este domingo La Nación reveló que los libertarios analizaron lanzar un meme coin con la figura de Milei para financiar la Fundación faro de Laje y Caputo, iniciativa que como todas las que vinculan al círculo de mayor confianza de Milei con los empresarios cripto, estuvo rodeada de pedidos de coimas.  
            </p>
            <p class="timeline-item-p">
                El experto en finanzas descentralizadas Diogenes Casares reveló en X chats sobre esos rumores y relató que un funcionario le dijo que un grupo americano "entre ellos el fundador de Jupiter (que dotó tecnología para el lanzamiento de LIBRA), había propuesto la idea".
            </p>
            <p class="timeline-item-p">
                "El token se iba a llamar $afuera y era para hacer fundraising de la Fundación Faro para 'financiar la batalla cultural'. Pero entiendo no prospero", le dijo a Casares una de las fuentes consultadas, en alusión al instituto que lidera Laje.
            </p>
            <p class="timeline-item-p">
                Ante eso, el experto en finanzas descentralizadas sostuvo: "Me dijeron que alguien cercano a Milei había recibido un soborno de US$5 millones para ponerlo frente a él. Para ser claros, esto NO significa que Milei recibió dinero, sino que alguien cercano a él había recibido dinero para facilitar que Milei promocionara el token. La naturaleza de alto nivel de esta persona y la calidad de la fuente (aunque no puedo verificarlo por completo para que quede claro) me preocuparon mucho y me hicieron presionar más".
            </p>
            <p class="timeline-item-p">
                En la siguiente foto se ve a Agustín Laje y Mauricio Novelli en un partido de la NBA, a una semana del lanzamiento de $LIBRA. La foto sería eliminada posteriormente.
            </p>

            <Img
                src="https://fotos.perfil.com///2025/02/17/900/0/escandalo-libra-1968787.jpg?webp"
                alt="Agustín Laje y Mauricio Novelli una semana antes del lanzamiento de $LIBRA"
                size="max-w-xl"
                class="rounded-lg"
            />

            <p class="timeline-item-p">
                Manuel Adorni también es apuntado, por haber participado en la reunión con Julián Peh, después de la Tech Forum, el 19 de octubre del 2024. Lo mismo vale para Karina Milei, ambos ya incluidos en múltiples denuncias que acumula el caso $LIBRA.
            </p>

            <Button
                color="alternative"
                href="https://www.lapoliticaonline.com/politica/la-ruta-de-las-coimas-lleva-a-agustin-laje-y-la-fundacion-de-los-hermanos-caputo/"
                target="_blank">
                Fuente: La Política Online
            </Button>
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/politica/el-escandalo-de-libra-abrio-una-caja-de-pandora-pedidos-de-coimas-y-gestiones-para-acceder-a-milei-nid16022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804938-cripto-coimas-y-la-pista-de-la-plata-negra"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="El escándalo de $LIBRA impacta de lleno a Jupiter Exchange, Meteora y el ecosistema Solana" date="16 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                El lanzamiento del token $LIBRA era ampliamente conocido entre los conocedores de memecoin hasta dos semanas antes de su dramática subida y caída, según Jupiter Exchange. “Nos enteramos de esto hace ~2 semanas directamente de Kelsier Ventures. Aunque al principio no estábamos seguros, luego vimos pruebas creíbles en forma de tweets públicos de la cuenta personal de Milei de que iba en serio.”
            </p>

            <p class="timeline-item-p">
                Si bien no hay pruebas directas que incriminen a los miembros de Jupiter Exchange, las transacciones onchain muestran que la caída del token fue causada por monederos con información privilegiada que comenzaron a cobrar el token solo tres horas después de que debutara para su negociación, causando una caída del 94% del mismo. Es por eso que el fundador de dos de los sistemas más populares de intercambio de criptomonedas le pidió la renuncia a otro de los cofundadores.
            </p>

            <Tweet tweet={data.Jupiter_Exchange_tweet_16_02_2025} />
            <Tweet tweet={data.Meow_tweet_17_02_2025} />
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/economia/jupiter-responde-al-escandalo-de-libra-y-renuncia-el-cofundador-de-meteora-nid18022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="El influencer Ape comparte una captura de pantalla mostrando que Javier Milei lo ha bloqueado en X" date="16 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Ape</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <Tweet tweet={data.Ape_blocked_16_02_2025} />
        </TimelineItem>

        <TimelineItem title="Se realizan mas de 100 denuncias contra el accionar de Javier Milei" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Javier Milei acumuló durante el fin de semana más de cien denuncias penales por la estafa con la criptomoneda $Libra. Las presentaciones fueron hechas por damnificados y por figuras de la oposición política, que plantearon que el Presidente formó parte de la defraudación cometida, ya que participó del lanzamiento de la memecoin -tuiteando una recomendación a invertir en ella apenas tres minutos después de que se lanzara públicamente- y mantuvo su mensaje anclado a su cuenta de X durante siete horas, aún después de saber que era una estafa. Para los denunciantes, el argumento de que Milei solamente cometió un error, impulsado por el entusiasmo, es poco creíble. Señalan que los vínculos que los desarrolladores del proyecto tenían con La Libertad Avanza son inocultables. 
            </p>

            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804483-a-javier-milei-le-llueven-las-denuncias-penales-se-presentar"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="'Ese dinero es de los argentinos': Hayden Mark Davis en conversación con Dave Portnoy" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Dave Portnoy</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Una entrevista entre Dave Portnoy, empresario y dueño de Barstool Sports, y Hayden Davis, creador del controvertido token $LIBRA, reveló detalles sorprendentes sobre el revuelo que involucró al presidente argentino Javier Milei. Durante la conversación, Davis habló sobre los fondos que aún tiene bajo su control, supuestos compromisos incumplidos por el Gobierno argentino, y su relación con Milei y su equipo. Davis, al ser consultado sobre el dinero en cuestión, se encargó de aclarar que no era suyo. “Ese dinero es de los argentinos“, afirmó de manera contundente.
            </p>
            <p class="timeline-item-p">
                Un aspecto central de la conversación fue una supuesta promesa incumplida de Javier Milei de hacer un video en apoyo de la moneda, algo que nunca sucedió. Según Davis, la estrategia original incluía una serie de tuits y videos, siendo el presidente de Argentina una pieza clave. De hecho, llegó a asegurar que Milei había comprometido a su equipo a grabar un video para respaldar el proyecto, pero Davis mencionó que este video nunca se concretó.
            </p>
            <p class="timeline-item-p">
                Davis también hizo referencia a un “periodista de tercera parte” que, según sus palabras, documentó todo el proceso. Se comprometió a revelar este material más tarde, posiblemente esa misma semana. El creador de $LIBRA mencionó que, en su búsqueda por demostrar la transparencia del proyecto, había contactado a un periodista externo para que cubriera todos los detalles de su encuentro con Milei y las decisiones clave.
            </p>
            <embed type="video/mp4" src="https://cdn.jwplayer.com/previews/6ESbExJK" width="600" height="340" />

            <Tweet tweet={data.Maxi_Firtman_sobre_Davis_17_02_2025} />

            <Button
                color="alternative"
                href="https://www.infobae.com/economia/2025/02/17/ese-dinero-es-de-los-argentinos-la-definicion-del-cerebro-detras-de-libra-sobre-los-fondos-que-tiene-bajo-su-control/"
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="Tech Forum se desliga del escándalo" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.MauricioNovelli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            </p>

            <p class="timeline-item-p">
                Luego de las declaraciones del presidente Javier Milei en relación al escándalo que se desató alrededor de la criptomoneda $LIBRA, el Tech Forum, que está envuelto en el caso porque Mauricio Novelli, uno de sus creadores, organizó el encuentro en el que el mandatario conoció al CEO de Kip Protocol, emitió un comunicado para aclarar la situación y explicó que no tiene “nada que ver con los fondos conseguidos” a través del memecoin.
            </p>

            <p class="timeline-item-p">
                “Kielsier Ventures y Kip Protocol, de quienes somos asesores, lanzaron el viernes pasado la criptomoneda $LIBRA. La intención de sus creadores (conforme consta en su prospecto) consistía en generar una masa de dinero con las ganancias del proyecto para donarle a emprendedores locales que se encuentran obstaculizados de acceder a créditos. Mas allá de que consideramos que se trata de una iniciativa muy interesante para el desarrollo económico del país, nuestra participación en el manejo de los tokens y el dinero fue nula”, explicaron.
            </p>

            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/economia/tech-forum-emitio-un-comunicado-tras-el-escandalo-por-libra-no-tenemos-nada-que-ver-con-los-fondos-nid17022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="KIP Protocol y Julián Peh también se desligan y desmienten al Gobierno" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JulianPeh} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Julian Peh</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                La empresa KIP Protocol que generó la memecoin $LIBRA salió a desmentir al Gobierno argentino. Si bien la compañía reconoció que hubo una reunión en octubre pasado entre el CEO Julian Peh y el presidente Javier Milei, tal como lo había comunicado la Casa Rosada este sábado, aseguró que “no hubo discusión ni mención de ninguna iniciativa específica, incluido el proyecto (“Viva la Libertad”) y el lanzamiento de tokens”.
            </p>

            <p class="timeline-item-p">
                Según aseguró KIP Protocol en un comunicado oficial, eso no sucedió en aquel encuentro en la denominada feria comercial inaugural Tech Forum Argentina. La empresa “no se dedica a ayudar a las organizaciones a lanzar tokens”, aclaró y prosiguió en su defensa: “Somos una compañía de soluciones técnicas de IA [Inteligencia Artificial] centrada en la implementación de infraestructura de IA, es en lo que se centra nuestro negocio y sería inusual proponer algo más”.
            </p>

            <p class="timeline-item-p">
                Ese 19 de octubre, siempre según KIP Protocol, el CEO Peh habló con Milei a través de un traductor durante unos 30 minutos. “Dialogaron sobre IA, tecnología en general y el deseo de la empresa de hacer más negocios e invertir en la Argentina. El Presidente habló de su visión de la Argentina, sus filosofías económicas y cómo daba la bienvenida a la inversión extranjera en el país, especialmente por parte de empresas de inteligencia artificial. Esta fue la primera reunión del señor Peh con el presidente Milei”, se informó.
            </p>

            <p class="timeline-item-p">
                “KIP Protocol no tenía conocimiento ni participación en esta reunión. La empresa ciertamente no tuvo ningún representante presente en este encuentro”, aseguró. “La reunión del 19 de octubre de 2024 fue la única ocasión en la que el señor Peh o cualquier empleado de la compañía se reunió con el presidente Milei”, se afirmó de manera oficial. “KIP no tuvo ningún trato comercial con Hayden Mark Davis antes de esto. En ningún momento Davis fue empleado o representante de la empresa”, prosiguió la compañía.
            </p>

            <Tweet tweet={data.KIP_protocol_se_desliga_17_02_2025} />
            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/politica/la-empresa-detras-de-libra-desmintio-al-gobierno-en-la-reunion-con-milei-no-se-discutio-la-nid17022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="Milei y un retweet que en cuestión de minutos, hace saltar la cotización de $LIBRA nuevamente" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Lejos de alejarse del tema, Javier Milei volvió a postear material sobre la criptomoneda $LIBRA en X (exTwitter). El presidente utilizó un mensaje de Dario Epstein, consultor de la city muy cercano a La Libertad Avanza, donde se explicaba que "no era sencillo" realizar la compra.
            </p>
            <p class="timeline-item-p">
                El reposteo de los pasos a seguir para la compra de $LIBRA fue leído como un nuevo apoyo del presidente a la memecoin, que derivó en un escándalo el viernes pasado, y el volumen operado del token volvió a dispararse. Así, en pocos minutos, se dio una situación similar a la de la semana pasada: el precio pasó de u$s0,38 centavos a los u$s0,77 centavos veinte minutos después.
            </p>
            <p class="timeline-item-p">
                La capitalización de mercado llegó a los 640 millones de dólares y con la nueva caída, desde el mercado cripto se estima que se esfumaron más de 25 millones de dólares en una hora.
            </p>
            <Tweet tweet={data.Milei_Retweet_17_02_2025} />

            <Button
                color="alternative"
                href="https://www.ambito.com/finanzas/javier-milei-retuiteo-un-posteo-libra-el-token-volo-y-se-volvio-hundir-cuestion-minutos-n6114529"
                target="_blank">
                Fuente: Ámbito
            </Button>
        </TimelineItem>

        <TimelineItem title="Los pedidos de juicio político por $LIBRA llegan a Diputados" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                En medio de un clima político marcado por divisiones internas y fragmentación, el Congreso de la Nación se encuentra en el centro de un debate sobre la posible investigación del caso de la criptomoneda $LIBRA y el papel del presidente Javier Milei. Ya se han presentado los primeros pedidos de juicio político contra el mandatario, mientras que otros sectores impulsan la creación de una comisión investigadora. Sin embargo, las disputas internas dentro de los bloques parlamentarios, incluidas las filas libertarias, y la atomización de la oposición complican cualquier avance en estas iniciativas.
            </p>

            <Button
                color="alternative"
                href="https://www.infobae.com/politica/2025/02/17/los-pedidos-de-juicio-politico-por-libra-llegan-a-diputados-con-la-comision-acefala-y-tensiones-cruzadas/"
                target="_blank">
                Fuente: Infobae
            </Button>
        </TimelineItem>

        <TimelineItem title="Diego Santilli salió a defender a Milei a pesar que su hijo perdió dinero invirtiendo en $LIBRA" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.DiegoSantilli} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Diego Santilli</Badge>
            </p>

            <p class="timeline-item-p">
                El hijo de Diego Santilli y la periodista Nancy Pazos invirtió en $Libra por el posteo de Javier Milei en X (antes Twitter), y perdió dinero de “sus ahorros”. Pese a ese hecho, el diputado del PRO, que viene amagando con su pase a las filas libertarias, salió a defender al presidente: "Le hicieron una cama al propio presidente", dijo.
            </p>

            <p class="timeline-item-p">
                “A mi hijo lo que le tentó fue que el presidente de la Nación, en el que él confía, tiraba una nueva criptomoneda, y el hecho de que él la recomendara pensó que iba a ser un éxito, le dio seguridad”, contó Pazos en el programa de Georgina Barbarroza en Telefé.
            </p>

            <p class="timeline-item-p">
                Se trata de Teo Santilli Pazos, licenciado en Negocios Digitales, quien perdió dinero tras invertir en la moneda cripto $Libra promocionada por Milei el viernes por la noche. Su padre, el diputado en tránsito al libertarianismo, aseguró que su hijo  “es responsable sobre lo que tiene que hacer cuando te va bien y cuando te va mal”.
            </p>

            <Tweet tweet={data.Santilli_Hijo_17_02_2025} />
        </TimelineItem>

        <TimelineItem title="Luis Caputo salió a defender a Javier Milei" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.LuisCaputo} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Luis Caputo</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                "No hubo dolo, ni delito ni corrupción", enfatizó el ministro de Economía, Luis Caputo, atajándose de los cargos que empiezan a hacerse contra la intervención del presidente, Javier Milei, en la promoción de la criptomoneda conocida como $Libra.
            </p>

            <embed type="video/mp4" src="https://geo.dailymotion.com/player/xt5ee.html?video=x9emfyy" width="600" height="340" />
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804737-milei-estafador-eso-es-absurdo"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="Fallida defensa de Javier Milei y papelón de Jonatan Viale" date="17 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JonatanViale} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Jonatan Viale</Badge>
                <Badge rounded large color="dark">Santiago Caputo</Badge>
            </p>

            <p class="timeline-item-p">
                "Pero de vuelta... es bueno que lo dijiste en mi calidad de ciudadano, no de Presidente", dice Javier Milei y la entrevista se interrumpe de repente. "Sí, sí, sí... por el juicio, claro, sí, obvio", sigue el Presidente. "Claro, podés tener problemas judiciales", le dice Viale hijo. 
            </p>
            <p class="timeline-item-p">
                Ese diálogo inverosímil, que da cuenta del encubrimiento del entrevistador de TN al entrevistado, se filtró insólitamente anoche en las redes sociales, por un error de producción: el canal subió la entrevista sin recortes ni edición, y los usuarios fueron impiadosos con la situación. 
            </p>
            <p class="timeline-item-p">
                En el crudo del video subido a las redes de TN, Milei estaba señalando que iba a ser el ministro de Justicia, Mariano Cúneo Libarona, quien se encargaría de la parte judicial tras el escándalo con la criptomoneda $Libra. Ahí ocurrió la interrupción y la advertencia por el posible "quilombo legal".
            </p>
            
            <Tweet tweet={data.Viale_entrevista_Milei_17_02_2025} />
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804765-ordenes-al-ensobrado"
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="'No reaccioné como tendría que haber reaccionado': Jonatan Viale sobre la entrevista con Milei" date="18 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JonatanViale} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Jonatan Viale</Badge>
                <Badge rounded large color="dark">Santiago Caputo</Badge>
            </p>

            <p class="timeline-item-p">
                El periodista Jonatan Viale decidió dar explicaciones sobre la entrevista que le realizó este lunes a Javier Milei, de la que trascendió un fragmento editado de una intervención del asesor Santiago Caputo para interrumpir una pregunta. "No reaccioné como tendría que haber reaccionado", dijo sobre este martes el conductor de TN en una aparición en su programa radial del que se había ausentado.
            </p>
            <p class="timeline-item-p">
                “Para los que tengan dudas, les voy a contar lo que pasó. Pero solo les quiero adelantar que nunca jamás en la vida agarré un mango de este ni de ningún Gobierno. No lo quiero. No me interesa. Tuve mil oportunidades. Rechacé todas. De todas maneras, corresponde que dé una explicación tranquila y larga en el lugar en el que pasó. Esta situación es fea", dijo Viale en Radio Rivadavia.
            </p>

            <p class="timeline-item-p">
                El periodista se anticipó a lo que responderá en su programa de televisión en TN, donde fue la entrevista con Milei. “Esta noche en Todo Noticias voy a hacer un pequeño descargo respecto de lo que pasó. Voy a explicar la intervención de Caputo. Voy a contar todo. Qué hice, qué no hice, qué me falto hacer, la filtración del video. Voy a explicárselo a la gente que nos viene mirando hace muchos años", anticipó.
            </p>

            <Button
                color="alternative"
                href="https://www.clarin.com/politica/reaccione-reaccionado-jonatan-viale-hablo-momento-santiago-caputo-interrumpio-entrevista-javier-milei_0_yCSRZ2ykZh.html"
                target="_blank">
                Fuente: Clarín
            </Button>
        </TimelineItem>

        <TimelineItem title="Denuncian en Estados Unidos a Javier Milei y a los otros protagonistas del escándalo $LIBRA" date="18 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
                <Badge rounded large color="dark">Mauricio Novelli</Badge>
                <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
                <Badge rounded large color="dark">Julián Peh</Badge>
            </p>

            <p class="timeline-item-p">
                La presunta megaestafa digital $LIBRA llegó a las autoridades de Estados Unidos. El Departamento de Justicia y la Oficina Federal de Investigaciones (FBI) recibió al menos una denuncia criminal contra los protagonistas del fraude masivo, que generó ganancias ilícitas entre 80 y 100 millones de dólares.
            </p>
            <p class="timeline-item-p">
                El llamado “reporte de operaciones criminales” señaló de manera explícita el rol que asumió el presidente Javier Milei, como también apuntó los roles que asumieron el estadounidense Hayden Mark Davis, el singapurense Julian Peh y los “empresarios” argentinos Mauricio Novelli y Manuel Terrones Godoy, de origen español.
            </p>
            <p class="timeline-item-p">
                La denuncia la radicó un estudio jurídico argentino especializado en casos de insolvencia internacional y fraudes financieros, Moyano & Asociados, que también notificó a la Comisión de Valores estadounidense (SEC, por sus siglas en inglés) sobre las maniobras delictivas registradas desde la noche del viernes.
            </p>
            <p class="timeline-item-p">
                Con un historial previo de cooperaciones con el FBI, la agencia inmigratoria estadounidense (ICE) y otros brazos del Departamento de Justicia, los abogados denunciantes indicaron que representan “mayormente” a inversores argentinos, pero que están al tanto de que hay “miles” más que fueron perjudicados por la maniobra fraudulenta, incluidos ciudadanos estadounidenses.
            </p>

            <Button
                color="alternative"
                href="https://www.lanacion.com.ar/politica/denuncian-en-estados-unidos-a-javier-milei-y-a-los-otros-protagonistas-del-escandalo-libra-nid17022025/"
                target="_blank">
                Fuente: La Nación
            </Button>
        </TimelineItem>

        <TimelineItem title="El creador de $LIBRA se jacta de pagar sobornos en Argentina y de 'controlar' a Milei" date="18 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Karina Milei</Badge>
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                El escándalo cripto sigue sumando capítulos, en medio de una guerra cruzada entre el Gobierno argentino y los empresarios que le llevaron el negocio. Ahora, según publicó un sitio especializado, uno de los creadores de $Libra, Hayden Davis, se jactaba en chats de "controlar" al presidente Javier Milei, gracias a coimas que supuestamente les pagaba a funcionarios argentinos, incluida la hermana del mandatario.
            </p>
            <p class="timeline-item-p">
                El sitio que publicó la revelación, con más de 3 millones de seguidores en redes, es "CoinDesk para Data & Tokens". Se basó en presuntos chats que se hicieron públicos en el mundo digital, luego del escándalo que provocó pérdidas millonarias e involucró a Milei. Se trataría de intercambios entre Hayden Davis y traders, en los que el creador de $Libra alardeaba de su influencia en el Gobierno argentino.
            </p>
            <p class="timeline-item-p">
                "En mensajes de texto revisados por CoinDesk, Hayden Davis, CEO de Kelsier Ventures, afirmó que podía 'controlar' a Milei debido a los pagos que había estado haciendo a Karina Milei, una figura poderosa en el Gobierno", explica la nota del sitio especializado.
            </p>
            <p class="timeline-item-p">
                La nota de CoinDesk revela supuestas frases muy fuertes de Hayden Davis. "Yo controlo a ese negro", aseguran que afirmó Davis en mensajes de texto de mediados de diciembre. Y habría agregado: "Le envío dinero a su hermana y él firma todo lo que digo y hace lo que quiero". El sitio afirma que intentó comunicarse con la oficina de Karina Milei, pero no obtuvo respuesta. Tampoco lo hizo Hayden Davis.
            </p>

            <Button
                color="alternative"
                href="https://www.clarin.com/politica/escandalo-cripto-creador-libra-jactaba-pagar-sobornos-argentina-controlar-milei_0_kWL9wBNL1C.html"
                target="_blank">
                Fuente: Clarín
            </Button>
        </TimelineItem>

        <TimelineItem title="Se precisó que 74.698 wallets participaron en la pérdida de capital de más de 286 millones de dólares" date="18 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.JavierMilei} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Javier Milei</Badge>
            </p>

            <p class="timeline-item-p">
                Se precisó que hubo más de 74 mil inversores que en total llegaron a acumular una pérdida de capital de más de 286 millones de dólares. En el detalle, se indicó que hubo 71.369 que perdieron hasta 10.000 dólares, 2.409 perdieron entre 10.000 y 50.000, 438 perdieron entre 50.000 y 100.000, 318 perdieron entre 100.000 y 250.000, 87 perdieron más de 250.000, 52 perdieron más de 500.000 y 25 perdieron más de 1.000.000 de dólares. Hubo argentinos entre los perdedores.
            </p>
            <Button
                color="alternative"
                href="https://www.pagina12.com.ar/804715-no-una-dos-veces-fomento-la-estafa-libra#:~:text=se%20precis%C3%B3%20que,entre%20los%20perdedores."
                target="_blank">
                Fuente: Página12
            </Button>
        </TimelineItem>

        <TimelineItem title="Santiago Caputo y su tatuaje referente Libra" date="18 de febrero, 2025 - 23:06 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.SantiagoCaputo} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Santiago Caputo</Badge>
                <Badge rounded large color="dark">Maximiliano Firtman</Badge>
            </p>

            <p class="timeline-item-p">
                Maximiliano Firtman comparte en su cuenta de X un fotograma de la entrevista de Viale a Javier Milei, en el momento exacto cuando Santiago Caputo entra en el plano de la cámara y se visualiza un tatuaje de Libra en su brazo derecho.
            </p>

            <Tweet tweet={data.Santiago_Caputo_Tatuaje_18_02_2025} />
        </TimelineItem>

        <TimelineItem title="Hayden Mark Davis sería una identidad falsa" date="19 de febrero, 2025 - 01:28 hs" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Hayden Mark Davis</Badge>
            </p>

            <p class="timeline-item-p">
                Según abogados denunciantes, la identidad de Hayden Mark Davis sería falsa; una posibilidad que ya se había barajado al no poder encontrar nada relacionado a él en internet, previo a todo el suceso de $LIBRA.
            </p>

            <Tweet tweet={data.Hayden_identidad_falsa_19_02_2025} />
        </TimelineItem>

        <TimelineItem title="Hayden Davis negó el pago de coimas a Karina Milei" date="19 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.HaydenMarkDavis} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Juan Carlos Pallarols</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Karina Milei</Badge>
            </p>

            <p class="timeline-item-p">
                En medio del escándalo cripto, el trader estadounidense Hayden Mark Davis se despegó de los chats atribuidos a su persona donde aseguraba pagarle sobornos a Karina Milei, la secretaria general de Presidencia, para acceder y "controlar" al Presidente.
            </p>
            <p class="timeline-item-p">
                Este martes, el medio especializado en criptomonedas Coindesk había publicado una serie de chats atribuidos a Hayden Davis, CEO de Kelsier Ventures, donde afirmaba en diciembre pasado que tenía influencia sobre Milei debido a pagos realizados a su hermana Karina. "Envié $$ a su hermana y él firma lo que sea y hace lo que yo quiera. Una locura", se lee en el texto enviado a un remitente desconocido.
            </p>
            <p class="timeline-item-p">
                Sin embargo, ahora desde el entorno del empresario salieron a desmentir la veracidad de los mensajes, asegurando que Davis nunca los escribió.
            </p>
            <p class="timeline-item-p">
                "Distintas notas en la prensa afirman que pagué al presidente Javier Milei o a su hermana, Karina Milei, para lanzar la memecoin Libra. Son completamente falsos. Nunca les hice ningún pago, ni ellos lo pidieron. Su única preocupación era asegurar que las ganancias de Libra beneficiaran a la gente y a la economía de Argentina", dijo. "Esto no es más que un ataque políticamente motivado contra el presidente Milei", sumó.
            </p>

            <p class="timeline-item-p">
                Paralelamente a esto, en las redes reflotó la denuncia pública del histórico orfebre Juan Carlos Pallarols. Ocurrió el 3 de septiembre del 2023, previo a la victoria de Javier Milei. Pallarols apareció en TN y denunció públicamente que Karina Milei le pidió dinero para tener una cena con Javier Milei.
            </p>
            <p class="timeline-item-p">
                A Milei no le gustó nada lo que dijo en su momento Pallarols y lo trató de "tremendo mentiroso". "No saben siquiera armar una mentira. Siendo yo un bilardista fanático jamás me pondría la vestimenta de ganador hasta que no termine el partido", explicó el candidato. "Frente a esta mentira, en caso de ganar(las elecciones) pediré de manera explícita que mis atributos no los haga Pallarols", advirtió Milei.
            </p>

            <Button
                color="alternative"
                href="https://www.losandes.com.ar/politica/pese-los-chats-hayden-davis-nego-el-pago-sobornos-karina-milei-controlar-al-presidente-n5939077"
                target="_blank">
                Fuente: Los Andes
            </Button>
            <Button
                color="alternative"
                href="https://www.lapoliticaonline.com/politica/la-polemica-del-baston-pallarols-denuncio-que-karina-le-pidio-2-mil-dolares-para-cenar-con-milei/"
                target="_blank">
                Fuente: La Política Online
            </Button>
        </TimelineItem>

        <TimelineItem title="Guillermo Francos criticó a Santiago Caputo por interrumpir la entrevista de Jonatan Viale a Javier Milei" date="19 de febrero, 2025" classTime="text-md">
            <svelte:fragment slot="icon">
                <TimelineAvatar avatar={CustomAvatar.GuillermoFrancos} />
            </svelte:fragment>
            <p class="timeline-item-p">
                <Badge rounded large color="dark">Guillermo Francos</Badge>
                <Badge rounded large color="dark">Santiago Caputo</Badge>
                <Badge rounded large color="dark">Manuel Adorni</Badge>
                <Badge rounded large color="dark">Javier Milei</Badge>
                <Badge rounded large color="dark">Karina Milei</Badge>
            </p>

            <p class="timeline-item-p">
                El Jefe de Gabinete Guillermo Francos, que ya había tenido roces previos con Santiago Caputo, sostuvo que el asesor intervino en el reportaje “por una estupidez” y agregó que esto le servirá para darse cuenta de que “nadie es superpoderoso”.
            </p>
            <p class="timeline-item-p">
                En una entrevista con Radio Rivadavia, Francos detalló la reacción del presidente: “[Milei] se enojó [con Caputo], incluso sin saber que esa parte iba a salir al aire. Se enojó con Santiago Caputo porque le pareció una irresponsabilidad que, sin ningún acuerdo previo con el conductor del programa, interrumpiera. Pero además interrumpió para una estupidez, porque la verdad es que cuando uno mira la causa de la interrupción dice: ‘¿Cuál es el sentido?’”.
            </p>
            <p class="timeline-item-p">
                El jefe de Gabinete también reflexionó sobre el aprendizaje que debería extraer Caputo de este episodio: “De todas maneras me parece que también Santiago Caputo habrá aprendido una lección: que nadie es superpoderoso, que todas las cosas tienen sus límites. El Presidente se lo ha marcado y me parece importante”.
            </p>
            <p class="timeline-item-p">
                Francos consideró que la intervención de Caputo fue un error y mostró falta de criterio. Así se suma al vocero Manuel Adorni, quién dialogó con A24 y fue terminante al indicar que el accionar del consultor político fue "equivocado" y, además, afirmó que el propio Milei le dijo que fue "innecesario".
            </p>

            <Button
                color="alternative"
                href="https://www.perfil.com/noticias/politica/guillermo-francos-critico-a-santiago-caputo-por-interrumpir-la-entrevista-de-jonatan-viale-a-milei-nadie-es-superpoderoso.phtml"
                target="_blank">
                Fuente: Perfil
            </Button>
            <Button
                color="alternative"
                href="https://www.cronista.com/economia-politica/adorni-explico-por-que-santiago-caputo-interrumpio-la-entrevista-a-milei-tiene-el-defecto/#:~:text=el%20vocero%20Manuel%20Adorni%20dialog%C3%B3%20con%20A24%C2%A0y%20fue%20terminante%20al%20indicar%20que%20el%20accionar%20del%20consultor%20pol%C3%ADtico%20fue%20%22equivocado%22%20y%2C%20adem%C3%A1s%2C%20afirm%C3%B3%20que%20el%20propio%20Milei%20le%20dijo%20que%20fue%20%22innecesario%22."
                target="_blank">
                Fuente: Cronista
            </Button>
        </TimelineItem>

        <!-- <Activity>
            <ActivityItem
                activities={[
                    {
                        title: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
                        date: 'just now',
                        alt: 'image alt here',
                        src: JavierMilei
                    },
                    {
                        title: 'We don’t serve their kind here! What? Your droids. ',
                        date: '2 hours ago',
                        alt: 'image alt here',
                        src: '/images/profile-picture-2.webp',
                        text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
                    },
                    {
                        title: 'They’ll have to wait outside. We don’t want them here. ',
                        date: '1 day ago',
                        alt: 'image alt here',
                        src: '/images/profile-picture-3.webp'
                    }
                ]}
                imgClass="me-3 mb-3 w-12 h-12 rounded-full sm:mb-0"
                spanClass='flex absolute -start-5 justify-center items-center w-12 h-12'
            />
        </Activity>

        <Group date="January 13th, 2022">
            <GroupItem timelines={[
                {
                    title: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
                    src: JavierMilei,
                    alt: 'alt here',
                    href: '/',
                    isPrivate: true,
                    comment: '"I wanted to share a webinar zeroheight."'
                },
                {
                    title: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
                    src: '/images/profile-picture-2.webp',
                    alt: 'alt here',
                    href: '/',
                    isPrivate: true,
                    comment: '"I wanted to share a webinar zeroheight."'
                }
            ]} />
        </Group> -->
    </Timeline>
</div>