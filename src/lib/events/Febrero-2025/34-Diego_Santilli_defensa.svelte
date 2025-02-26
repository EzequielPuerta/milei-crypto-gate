<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Diego Santilli salió a defender a Milei a pesar que su hijo perdió dinero invirtiendo en $LIBRA"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.DiegoSantilli}
    parties={["Diego Santilli"]}
    sources={[]}
>
    <p class="timeline-item-p">
        El hijo del diputado del PRO, Diego Santilli y la periodista Nancy Pazos invirtió en $Libra por el posteo de Javier Milei en X (antes Twitter), y perdió dinero de “sus ahorros”. Pese a ese hecho, el diputado del PRO, que viene amagando con su pase a las filas libertarias, salió a defender al presidente: "Le hicieron una cama al propio presidente", dijo.
    </p>

    <p class="timeline-item-p">
        “A mi hijo lo que le tentó fue que el presidente de la Nación, en el que él confía, tiraba una nueva criptomoneda, y el hecho de que él la recomendara pensó que iba a ser un éxito, le dio seguridad”, contó Pazos en el programa de Georgina Barbarroza en Telefé.
    </p>

    <p class="timeline-item-p">
        Se trata de Teo Santilli Pazos, licenciado en Negocios Digitales, quien perdió dinero tras invertir en la moneda cripto $Libra promocionada por Milei el viernes por la noche. Su padre, el diputado en tránsito al libertarianismo, aseguró que su hijo  “es responsable sobre lo que tiene que hacer cuando te va bien y cuando te va mal”.
    </p>

    <Tweet tweet={data.Santilli_Hijo_17_02_2025} />
</Event>