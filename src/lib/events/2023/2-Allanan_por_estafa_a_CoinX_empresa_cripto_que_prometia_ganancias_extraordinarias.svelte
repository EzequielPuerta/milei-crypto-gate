<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    
    export let data;
</script>

<Event
    title="Allanan por estafa a Coinx, empresa cripto que prometía ganancias extraordinarias"
    date="7 de agosto, 2023"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/sociedad/policiales/2023/08/07/allanan-por-estafa-a-coinx-otra-empresa-cripto-que-prometia-ganancias-extraordinarias/'
        }
    ]}
>
    <p class="timeline-item-p">
        Coinx World, la empresa cripto que Javier Milei apoyó públicamente en diciembre de 2021 cuando ya era diputado, es allanada por la Policía Federal en puntos como Buenos Aires y Santa Fe, en el marco de una investigación iniciada en 2022 por el delito de estafa a cargo del Juzgado Federal N°12, subrogado por Ariel Lijo.
    </p>
    <p class="timeline-item-p">
        El rastro de la firma es difuso. Para empezar, no hay ninguna empresa llamada Coinx en los registros de la AFIP. Es una marca, casualmente registrada en el Instituto Nacional de la Propiedad Intelectual en el rubro de software, no de operaciones financieras. Y la empresa a la que le pertenece es Proyectos RSS, con domicilio fiscal en Avenida del Libertador.
    </p>
    <p class="timeline-item-p">
        Está registrada en la AFIP al menos desde 2018, no como dedicada a las operaciones financieras, sino a las instalaciones eléctricas, con aportes impagos a empleados según registros previsionales. Juan Manuel Malaspina, mencionado por la CNV, presentado como director de inversiones en piezas del grupo, ni siquiera fue empleado en blanco de Proyectos RSS.
    </p>
</Event>