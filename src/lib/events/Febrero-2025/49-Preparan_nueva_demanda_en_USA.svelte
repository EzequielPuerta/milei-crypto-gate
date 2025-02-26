<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Preparan en EEUU una nueva multimillonaria demanda por la estafa cripto que promocionó Milei"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/preparan-en-eeuu-una-multimillonaria-demanda-por-la-estafa-cripto-que-promociono-milei-202521914195'
        }
    ]}
>
    <p class="timeline-item-p">
        Uno de los estudios de abogados especializados en delitos con criptomonedas más importante del mundo, Burwick Law, prepara una demanda civil multimillonaria en Estados Unidos por los perjuicios que generó el escándalo $LIBRA, que promocionó el viernes pasado el presidente Javier Milei desde sus redes sociales. Esta presentación se sumará a la del estudio jurídico Moyano, que pidió, ante el Departamento de Justicia, la Oficina Federal de Investigaciones (FBI) y la Comisión de Valores estadounidense, que el Presidente sea investigado.
    </p>
    <p class="timeline-item-p">
        Son más de 200 personas de Argentina, Estados Unidos, Europa y Asia que se vieron afectadas por la multimillonaria estafa que difundió el mandatario argentino por varias horas desde su cuenta de la red social X y que ahora preparan acciones legales. Desde el estudio Burwick Law confirmaron en redes sociales que están preparando esta demanda, que fue revelada también por el portal La Nación.
    </p>

    <Tweet tweet={data.Demanda_millonaria_USA_19_02_2025} />
</Event>