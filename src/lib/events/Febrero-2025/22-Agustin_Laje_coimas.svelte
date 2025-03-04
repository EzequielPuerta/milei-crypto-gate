<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Agustín Laje, presidente de la Fundación Faro, estaría involucrado en las coimas alrededor de Tech Forum y $LIBRA"
    date="16 de febrero, 2025"
    avatar={CustomAvatar.AgustinLaje}
    parties={["Agustín Laje", "Mauricio Novelli", "Santiago Caputo"]}
    sources={[
        {
            label: 'La Política Online',
            url: 'https://www.lapoliticaonline.com/politica/la-ruta-de-las-coimas-lleva-a-agustin-laje-y-la-fundacion-de-los-hermanos-caputo/'
        },
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/el-escandalo-de-libra-abrio-una-caja-de-pandora-pedidos-de-coimas-y-gestiones-para-acceder-a-milei-nid16022025/'
        },
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804938-cripto-coimas-y-la-pista-de-la-plata-negra'
        }
    ]}
>
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

    <ClickableImage
        src="https://fotos.perfil.com///2025/02/17/900/0/escandalo-libra-1968787.jpg?webp"
        alt="Agustín Laje y Mauricio Novelli una semana antes del lanzamiento de $LIBRA"
    />

    <p class="timeline-item-p">
        Manuel Adorni también es apuntado, por haber participado en la reunión con Julián Peh, después de la Tech Forum, el 19 de octubre del 2024. Lo mismo vale para Karina Milei, ambos ya incluidos en múltiples denuncias que acumula el caso $LIBRA.
    </p>
</Event>