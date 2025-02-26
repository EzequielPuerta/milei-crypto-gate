<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se lanza $TRUMP, la cripto de Donald Trump"
    date="17 de enero, 2025"
    avatar={CustomAvatar.DonaldTrump}
    parties={["Donald Trump"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/estados-unidos/escandalo-cripto-cuales-son-las-diferencias-entre-las-memecoins-que-promocionaron-trump-y-milei-nid18022025/'
        }
    ]}
>
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
</Event>