<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="El otro criptonegocio al que aparece vinculado Javier Milei: Cube Exchange"
    date="23 de febrero, 2025"
    avatar={CustomAvatar.BartoszLipinski}
    parties={["Bartosz Lipinski", "Javier Milei", "Mauricio Novelli", "Manuel Terrones Godoy", "Agustín Laje", "Hayden Mark Davis", "Gideon Davis"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/politica/libra-quienes-estan-detras-de-cube-exchange-la-empresa-que-habria-firmado-el-contrato-con-milei.phtml'
        },
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/806726-el-otro-criptonegocio-al-que-aparece-vinculado-javier-milei'
        }
    ]}
>
    <p class="timeline-item-p">
        Cube Exchange. Se trata de la firma que, según Gideon Davis, cerró el preacuerdo con Javier Milei para lanzar el proyecto que terminó por convertirse en un escándalo mundial. Aunque el nombre de la compañía y el de su CEO, Bartosz Lipiński, recién comienzan a circular ahora, su presencia en Argentina lleva un buen tiempo.
    </p>
    <p class="timeline-item-p">
        Solo con la información disponible en la web se puede saber que, en noviembre de 2024, Lipiński participó del Tech Forum, el evento en el que se cruzaron buena parte de los protagonistas de esta historia. En octubre, hizo un gran anuncio sobre su alianza con Argentina aunque sin mayores detalles del proyecto. En septiembre, organizó un exclusivo after party en Puerto Madero con Travis Scott. En julio, estuvo en una reunión con Karina Milei en Casa Rosada junto Mauricio Novelli, Manuel Terrones Godoy y Hayden Davis. Y unos días antes, en junio, patrocinó al youtuber preferido del gobierno, Agustín Laje.
    </p>
    <p class="timeline-item-p">
        Gideon Davis es el hermano de Hayden Davis, el creador de $Libra, y fue quien habló, durante una entrevista con Tony Sablan, del acuerdo que habría sellado Milei con la empresa Cube Exchange. Sus palabras textuales fueron las siguientes: “Argentina acaba de firmar un LOI (“Letter Of Intent”) con Cube que nosotros facilitamos para usar su tecnología subyacente para ayudar con las cosas criptográficas y abrir eso, pero también potencialmente abrir una cooperativa de crédito y algo estilo banco donde las criptomonedas y el tráfico se fusionan”.
    </p>
    <p class="timeline-item-p">
        El fragmento se viralizó de inmediato. Los periodistas Hugo Alconada Mon y Alejandro Bercovich ya habían hablado de la supuesta firma de un acuerdo y con la declaración de Gideon parece no quedar lugar a dudas. La entrevista, además, fue eliminada de Youtube, lo que alimentó aún más las sospechas. A pesar de los esfuerzos de algunos de estos personajes por borrar su huella digital, los vínculos de Lipiński y Cube Exchange con Argentina todavía están disponibles en la web.
    </p>

    <Tweet tweet={data.Maxi_Firtman_Cube_Exchange_23_02_2025} />
    <Tweet tweet={data.Cube_Exchange_X_Milei_23_02_2025} />
</Event>