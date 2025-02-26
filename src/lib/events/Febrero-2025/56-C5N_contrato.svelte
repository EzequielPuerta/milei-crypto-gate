<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="C5N mostró al aire un supuesto contrato que compromete a Javier Milei con Hayden Mark Davis"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.SergioMorales}
    parties={["Sergio Morales", "Javier Milei", "Mauricio Novelli", "Manuel Terrones Godoy", "Hayden Mark Davis"]}
    sources={[
        {
            label: 'C5N',
            url: 'https://www.c5n.com/politica/escandalo-libra-el-contrato-que-compromete-javier-milei-hayden-davis-n191531'
        }
    ]}
>
    <p class="timeline-item-p">
        Reveló que "junto con Mauricio Novelli y Manuel Terrones Godoy, los organizadores de Tech Forum, Morales redactó un borrador del contrato que pidió Hayden Davis para un acuerdo de asociación entre el Kelsier Group y la Argentina".
    </p>
    <p class="timeline-item-p">
        "Es un borrador de cuatro páginas, que no llegó a firmarse, pero era el reaseguro que quiso Davis cuando vio que no eran fiables los 'criptobros' del entorno del Presidente", agregó el periodista.
    <p class="timeline-item-p">
        Según Bercovich, el borrador del contrato, que no implica la comisión de un delito, establece una "asociación indirecta con el gobierno de Argentina" e indica que ellos van a ser "los asesores exclusivos de Milei y del Gobierno en materia de criptoactivos".
    <p class="timeline-item-p">
        El propio Morales participó del evento Argentina Tech Forum que se realizó el 19 de octubre en el hotel Libertador, que tuvo a Milei como principal orador y en el que el Presidente conoció a Julian Peh, CEO de la empresa KIP Protocol. También participó de la conferencia ADN, Argentina Digital Nation, semanas antes de la ya mencionada, y estuvo presente en varias de las reuniones que mantuvieron Mauricio Novelli y Manuel Terrones Godoy con los hermanos Milei en Casa Rosada y Olivos.
    </p>
    <Tweet tweet={data.Contrato_Davis_19_02_2025} />
</Event>