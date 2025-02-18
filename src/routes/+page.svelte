<script lang="ts">
    import {
        Avatar,
        Tooltip,
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
    import JavierMilei from '$lib/assets/profiles/javier-milei.png';
    import MauricioNovelli from '$lib/assets/profiles/mauricio-novelli.png'
    import JulianPeh from '$lib/assets/profiles/julian-peh.png'
    import HaydenMarkDavis from '$lib/assets/profiles/hayden-mark-davis.png'

    import { Tweet } from 'sveltekit-tweet';
	import type { PageData } from './$types';
    let { data }: {
		data: PageData;
	} = $props();

	// const tweet_Milei_Novelli = data.tweet_Milei_Novelli;
</script>

<style>
    .timeline-item-avatar {
        display: flex;
        position: absolute;
        left: -0.75rem;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
        background-color: var(--primary-200);
        border-radius: 9999px;
        box-shadow: 0 0 0 2px white;
        /* Dark mode styles */
        --tw-ring-color: var(--gray-900);
        --tw-bg-opacity: 1;
        background-color: var(--primary-900);
    }

    .timeline-item-p {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: #6b7280;
        /* Dark mode styles */
        color: #9ca3af; 
    }
</style>

  
<Timeline order="vertical">
    <!------------------------------------ 2019 ------------------------------------>
    <TimelineItem title="Mauricio Novelli funda el instituto N&W Professional Traders" date="2019" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Javier Milei" src={JavierMilei}/>
                <Tooltip>Javier Milei</Tooltip>
            </span>
        </svelte:fragment>
        <p class="timeline-item-p">
            <Badge rounded large color="dark">Javier Milei</Badge>
            <Badge rounded large color="dark">Mauricio Novelli</Badge>
            <Badge rounded large color="dark">Jeremías Walsh</Badge>
        </p>

        <p class="timeline-item-p">
            A partir de entonces, <strong>Javier Milei</strong> mantendrá un vínculo estrecho con ellos. Es tan así que él mismo se presentaba como parte del staff de N&W, como se puede apreciar en la imagen siguiente, perteneciente a su perfil de Instagram en aquel momento.
        </p>

        <Img
            src="https://dobleamarilla-assets.tadevel-cdn.com/67b39740beb6aeb9d6f1ac53/720.webp"
            alt="sample 1"
            size="max-w-xl"
            class="rounded-lg"
        />

        <Youtube id="sdslzCjua1A" />
    </TimelineItem>

    <!------------------------------------ 2021 ------------------------------------>
    <TimelineItem title="Primer fraude: Milei recomienda CoinX World" date="18 de diciembre, 2021" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Javier Milei" src={JavierMilei}/>
                <Tooltip>Javier Milei</Tooltip>
            </span>
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Javier Milei" src={JavierMilei}/>
                <Tooltip>Javier Milei</Tooltip>
            </span>
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

    <!------------------------------------ 2024 ------------------------------------>
    <TimelineItem title="1º reunión de Novelli: Casa Rosada con Karina Milei" date="8 de enero, 2024" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
        </svelte:fragment>
        <p class="timeline-item-p">
            <Badge rounded large color="dark">Karina Milei</Badge>
            <Badge rounded large color="dark">Mauricio Novelli</Badge>
        </p>

        <p class="timeline-item-p">
            En los primeros días del gobierno de los hermanos Milei, Novelli ingresó a ver a Karina pocos minutos antes de las 15 hs y se fue pasadas las 19.30. Un día largo en la Rosada. 
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
        </svelte:fragment>
        <p class="timeline-item-p">
            <Badge rounded large color="dark">Karina Milei</Badge>
            <Badge rounded large color="dark">Mauricio Novelli</Badge>
            <Badge rounded large color="dark">Manuel Terrones Godoy</Badge>
            <Badge rounded large color="dark">Hayden Mark Davis</Badge>
        </p>

        <p class="timeline-item-p">
            Karina recibió a Novelli pasadas las 15. Estuvieron en la reunión el youtuber Terrones Godoy; Bartosz Lipinski, cofundador y CEO de Cube Group y que trabajó también en <em>Solana</em>, la plataforma de <em>blockchain</em> sobre la que operó la estafa de <strong>LIBRA</strong>; y <strong>Hayden Mark Davis</strong>, ahora apuntado por <strong>Kit Protocol</strong> como el responsable de <strong>$LIBRA</strong>.
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
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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

    <TimelineItem title="7º reunión de Novelli: Casa Rosada con Javier Milei" date="20 de septiembre, 2024" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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

        <!-- <Tweet {tweet_Milei_Novelli} /> -->
        <Button
            color="alternative"
            href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=7%20%E2%80%93%2020%20de,a%20las%2014.50hs."
            target="_blank">
            Fuente: El Destape
        </Button>
    </TimelineItem>

    <TimelineItem title="8º reunión de Novelli: Quinta de Olivos con Javier Milei" date="27 de septiembre, 2024" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Mauricio Novelli" src={MauricioNovelli}/>
                <Tooltip>Mauricio Novelli</Tooltip>
            </span>
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

    <TimelineItem title="Reunión de Julián Peh con Javier Milei post Tech Forum" date="19 de octubre, 2024" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Julián Peh" src={JulianPeh}/>
                <Tooltip>Julián Peh</Tooltip>
            </span>
        </svelte:fragment>
        <p class="timeline-item-p">
            <Badge rounded large color="dark">Javier Milei</Badge>
            <Badge rounded large color="dark">Julián Peh</Badge>
            <Badge rounded large color="dark">Mauricio Novelli</Badge>
            <Badge rounded large color="dark">Manuel Adorni</Badge>
        </p>

        <p class="timeline-item-p">
            Luego de todas estos encuentros en la Casa Rosada y en Olivos llegó el <strong>Tech Forum</strong>, el evento sobre “tecnologías disruptivas” que organizó Novelli en octubre del año pasado y que tiene una próxima convocatoria del 3 al 5 de abril próximos.
        </p>
        <p class="timeline-item-p">
            Milei fue el orador de cierre en la misma sala del Hotel Libertador donde festejó su triunfo electoral. Dio un discurso de 44 minutos. En ese marco fue que se reunió con Julián Peh, el CEO de Kit Protocol, la firma detrás de esta estafa virtual.
        </p>
        <p class="timeline-item-p">
            La reunión de Milei con Peh fue el 19 de octubre de 2024. La juntada, según el registro de audiencias oficial del Ministerio del Interior, fue en el Hotel Libertador. Es extraño: Milei ya era presidente pero eligió juntarse con Peh en el hotel que fue su morada entre que ganó las elecciones y se mudó a la quinta de Olivos. Y más extraño es que lo pusieran en el registro de audiencias público, que sólo contiene las que se producen en las oficinas públicas.
        </p>
        
        <Img
            src="https://resizer.glanacion.com/resizer/v2/milei-con-julian-peh-el-responsable-de-kip-KPEQWETN4VDMVAYAQLQXSRPHWU.jpeg?auth=292c8ca2ccb44ad0c695d45e2d84e4f50c862be50dfb43dc6cf87e9b4b44046f&width=780&height=585&quality=70&smart=true"
            alt=""
            size="max-w-lg"
            class="rounded-lg"
        />

        <p class="timeline-item-p">
            Hubo foto grupal en el Tech Forum. Milei en el centro; hacia la derecha, con anteojos, Julian Peh; más a la derecha, en la punta, Mauricio Novelli.
        </p>

        <Img
            src="https://cdn.eldestapeweb.com/eldestape/022025/1739655327096/tech%20forum.webp?cw=1200&ch=800&extw=jpeg"
            alt=""
            size="max-w-lg"
            class="rounded-lg"
        />

        <p class="timeline-item-p">
            Del encuentro privado de Milei con Peh participaron el vocero presidencial Manuel Adorni y Novelli. Según la información oficial: “Analizaron cómo la tecnología de IA descentralizada de KIP puede respaldar a Argentina”. “El presidente Milei expresó un fuerte apoyo a estas innovaciones e iniciativas, posicionando a KIP como un actor fundamental en la transformación tecnológica de Argentina. Este compromiso de alto nivel coloca a $KIP en el centro de atención como un actor clave de IA en Latinoamérica”, sostuvo Julian Peh tras el encuentro con Milei. Ya sabemos como terminó.
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
    </TimelineItem>

    <!------------------------------------ 2025 ------------------------------------>
    <TimelineItem title="Reunión de Hayden Mark Davis con Javier Milei" date="30 de enero, 2025" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Hayden Mark Davis" src={HaydenMarkDavis}/>
                <Tooltip>Hayden Mark Davis</Tooltip>
            </span>
        </svelte:fragment>
        <p class="timeline-item-p">
            <Badge rounded large color="dark">Javier Milei</Badge>
            <Badge rounded large color="dark">Hayden Mark Davis</Badge>
        </p>

        <p class="timeline-item-p">
            Davis volvió el 30 de enero de 2025 a la Casa Rosada. Lo contó el propio Milei, que publicó en sus redes la foto con Davis y escribió: “Hoy mantuvimos una muy interesante charla con el empresario Hayden Mark Davis, quien me estuvo asesorando sobre el impacto y las aplicaciones de la tecnología blockchain e inteligencia artificial en el país. Seguimos trabajando para acelerar el desarrollo tecnológico argentino y hacer de Argentina una potencia tecnológica mundial”. El Destape pidió pero aún no tuvo respuesta oficial por la planilla de ingresos a Casa Rosada de enero de 2025, por lo que no puede confirmar si Novelli también estuvo ese día. No sería extraño.
        </p>

        <Tweet tweet={data.tweet} />
        <Button
            color="alternative"
            href="https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=Davis%20volvi%C3%B3%20el,No%20ser%C3%ADa%20extra%C3%B1o."
            target="_blank">
            Fuente: El Destape
        </Button>
    </TimelineItem>


    <TimelineItem title="Charles Hoskinson (cofundador de Cardano y ex cofundador de Ethereum) denuncia coimas en el Tech Forum" date="15 de febrero, 2025" classTime="text-md">
        <svelte:fragment slot="icon">
            <span class="timeline-item-avatar">
                <Avatar data-name="Javier Milei" src={JavierMilei}/>
                <Tooltip>Javier Milei</Tooltip>
            </span>
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
