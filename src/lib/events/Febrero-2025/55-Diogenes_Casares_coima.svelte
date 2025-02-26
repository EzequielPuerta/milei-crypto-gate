<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Piden que se cite a declarar al empresario cripto Diógenes Caseres que habló de un supuesto pedido de coima"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.DiogenesCaseres}
    parties={["Diógenes Caseres", "Javier Milei", "Hayden Mark Davis"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/caso-libra-piden-que-se-cite-declarar-al-empresario-cripto-diogenes-casares-que-hablo-un-supuesto-pedido-coima-n6115175'
        }
    ]}
>
    <p class="timeline-item-p">
        La Justicia recibió un pedido para que se cite como testigo al experto en cripto y cofundador de la firma Stream Finance, Diógenes Caseres luego de que el mismo detallara maniobras de sobornos que habrían efectuado empresarios vinculados al ecosistema cripto a funcionarios del actual Gobierno. El objetivo detrás de esta maniobra, según Caseres, era que el presidente Javier Milei promocionara el polémico token $LIBRA.
    </p>
    <p class="timeline-item-p">
        Casares hizo públicas conversaciones que mantuvo con diversos colegas del rubro financiero en donde se anticipaba el lanzamiento de una criptomoneda vinculada con el Presidente Milei. En esta línea, la acusación del cofundador de Stream Finance apuntó directamente contra el gobierno y manifestó que empresarios desembolsaron la suma total de u$s5.000.000 para lograr que Milei publicara el link promocionando el criptoactivo.
    </p>

    <Tweet tweet={data.Diogenes_Caseres_coima_19_02_2025} />
</Event>