<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="El creador de $LIBRA se jacta de pagar sobornos en Argentina y de 'controlar' a Milei"
    date="18 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei", "Karina Milei"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/escandalo-cripto-creador-libra-jactaba-pagar-sobornos-argentina-controlar-milei_0_kWL9wBNL1C.html'
        }
    ]}
>
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
</Event>