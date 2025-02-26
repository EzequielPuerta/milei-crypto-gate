<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Denuncian en Estados Unidos a Javier Milei y a los otros protagonistas del escándalo $LIBRA"
    date="18 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Hayden Mark Davis", "Mauricio Novelli", "Manuel Terrones Godoy", "Julián Peh"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/denuncian-en-estados-unidos-a-javier-milei-y-a-los-otros-protagonistas-del-escandalo-libra-nid17022025/'
        }
    ]}
>
    <p class="timeline-item-p">
        La presunta megaestafa digital $LIBRA llegó a las autoridades de Estados Unidos. El Departamento de Justicia y la Oficina Federal de Investigaciones (FBI) recibió al menos una denuncia criminal contra los protagonistas del fraude masivo, que generó ganancias ilícitas entre 80 y 100 millones de dólares.
    </p>
    <p class="timeline-item-p">
        El llamado “reporte de operaciones criminales” señaló de manera explícita el rol que asumió el presidente Javier Milei, como también apuntó los roles que asumieron el estadounidense Hayden Mark Davis, el singapurense Julian Peh y los “empresarios” argentinos Mauricio Novelli y Manuel Terrones Godoy, de origen español.
    </p>
    <p class="timeline-item-p">
        La denuncia la radicó un estudio jurídico argentino especializado en casos de insolvencia internacional y fraudes financieros, Moyano & Asociados, que también notificó a la Comisión de Valores estadounidense (SEC, por sus siglas en inglés) sobre las maniobras delictivas registradas desde la noche del viernes.
    </p>
    <p class="timeline-item-p">
        Con un historial previo de cooperaciones con el FBI, la agencia inmigratoria estadounidense (ICE) y otros brazos del Departamento de Justicia, los abogados denunciantes indicaron que representan “mayormente” a inversores argentinos, pero que están al tanto de que hay “miles” más que fueron perjudicados por la maniobra fraudulenta, incluidos ciudadanos estadounidenses.
    </p>
</Event>