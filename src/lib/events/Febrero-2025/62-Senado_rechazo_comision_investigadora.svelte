<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El Senado rechazó crear una comisión investigadora por el caso de la criptomoneda $LIBRA"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.DavidCayon}
    parties={["David Cayón"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/20/el-senado-rechazo-crear-una-comision-investigadora-por-el-caso-de-la-criptomoneda-libra/'
        },
        {
            label: 'La Izquierda Diario',
            url: 'https://www.laizquierdadiario.com/El-Senado-rechazo-investigar-a-Milei-la-casta-protege-a-los-estafadores'
        }
    ]}
>
    <p class="timeline-item-p">
        La propuesta para conformar la comisión planteaba un plazo de 180 días para investigar y emitir un informe sobre las irregularidades y posibles delitos asociados a $LIBRA. La misma incluía amplias facultades, como la posibilidad de solicitar información, realizar allanamientos y tomar declaraciones testimoniales, apuntando a presentar las denuncias correspondientes en caso de encontrar pruebas de actos ilícitos. Sin embargo, la iniciativa no alcanzó los dos tercios de los votos necesarios para su aprobación. Con 47 votos a favor y 23 en contra, quedó a un solo voto de lograr los 48 requeridos.
    </p>

    <Img
        src="https://www.infobae.com/resizer/v2/ABI6JFBVCFDCTJUDPTRCXYKTYI.jpeg?auth=4a108697ea59f422df4dc88fd45bee29a0172ad451d16ef3421997fc60ce2d72&smart=true&width=1200&height=900&quality=85"
        alt="El tablero de la votación"
        size="max-w-2xl"
        class="rounded-lg content-pic"
    />

    <p class="timeline-item-p">
        La iniciativa fue presentada formalmente por el senador Pablo Blanco, de la Unión Cívica Radical (UCR), y por Guadalupe Tagliaferri, representante del PRO. En un intento por agilizar el proceso, el senador Martín Lousteau solicitó que el proyecto fuera tratado sobre tablas, lo que generó un debate interno en el bloque radical ya que algunos miembros del radicalismo que inicialmente habían expresado su apoyo a la propuesta decidieron no acompañarla en el momento de la votación, lo que evidenció las tensiones dentro del espacio político y la presión que había realizado la Casa Rosada sobre los gobernadores y líderes políticos de diferentes provincias.
    </p>
    <p class="timeline-item-p">
        Al término de la exposición de los radicales, Mayans pidió la palabra y adelantó que iban a acompañar, pero pidió un cuarto intermedio para constituir la Comisión. “Que se sepa que ya está conformada”. La senadora Mónica Silva, de Juntos Somos Río Negro, pidió conformar una comisión bicameral, pero esta idea fue rechazada rápidamente por UP y por la UCR.
    </p>
    <p class="timeline-item-p">
        La habilitación del proyecto para que sea tratado en ese momento obtuvo 53 votos a favor contra 17 en contra. Por la negativa votaron los senadores Vigo, Silva, Romero, Espínola y Juez entre otros. Luego se votó la conformación de la Comisión investigadora y, en un hecho insólito, se impuso el oficialismo que logró frenar la conformación de la misma.
    </p>

    <Tweet tweet={data.Votacion_senado_20_02_2025} />

    <p class="timeline-item-p">
        Durante toda la jornada hubo llamados de Casa Rosada a los gobernadores y esto se notó a la hora de votar la conformación de la Comisión. Un ejemplo de esto fue el caso del <strong>senador Vischi, presidente del bloque de la UCR que firmó el proyecto de conformación de la comisión, pero votó en contra.</strong> En esa línea -en contra del proyecto de su bloque- votaron los senadores radicales Galaretto, Zimmerman, Valenzuela, Juri, Olaya. A este grupo se le sumó Juez, Goerling, Alvarez Rivero y Alfredo de Angeli, más los senadores de bloques provinciales.
    </p>

    <Tweet tweet={data.Bregman_senado_20_02_2025} />

    <p class="timeline-item-p">
        Frustrada la conformación de la comisión en ese instante, ahora los proyectos de ley deberán ser tratados en las comisiones una vez que se habilite el período de sesiones ordinarias.
    </p>
</Event>