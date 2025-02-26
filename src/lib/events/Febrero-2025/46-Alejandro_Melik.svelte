<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Alejandro Melik, titular de la Oficina Anticorrupción, ex socio del Ministro de Justicia Cuneo Libarona y encargado de investigar a Milei en el escándalo cripto"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.AlejandroMelik}
    parties={["Alejandro Melik", "Javier Milei", "Mariano Cuneo Libarona<"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/quien-es-alejandro-melik-el-ex-socio-de-cuneo-libarona-y-encargado-de-investigar-a-milei-en-el-escandalo-cripto-202521817471'
        }
    ]}
>
    <p class="timeline-item-p">
        La entrevista de Jonatan Viale a Javier Milei reveló que la estrategia judicial de defensa del Presidente en el escándalo cripto está a cargo del ministro de Justicia, Mariano Cuneo Libarona. El Gobierno delegó la investigación del hecho en la Oficina Anticorrupción (OA), a cargo de Alejandro Melik, que responde al titular de la cartera judicial.
    </p>
    <p class="timeline-item-p">
        Socio de Cuneo Libarona, Melnik fue abogado de Guillermo Cóppola durante la década del '90 en el mediático caso del jarrón con cocaína y también fue letrado del club River Plate. Las crónicas y fotografías de la época lo muestran en agosto 2007, por ejemplo, en una conferencia de prensa con una activa participación por el asesinato de Gonzalo Acro, que se dio en el marco de un enfrentamiento entre facciones de barras del club. Melnik fue designado en la OA a fines de 2023. 
    </p>
    <p class="timeline-item-p">
        El sábado, el Gobierno nacional, a través de la cuenta Oficina del Presidente, rechazó cualquier responsabilidad directa del mandatario y anunció que abrirá dos investigaciones, ambas bajo la órbita del Poder Ejecutivo: la OA y una Unidad de Tareas de Investigación (UTI).
    </p>
    <p class="timeline-item-p">
        Francos consideró que la intervención de Caputo fue un error y mostró falta de criterio. Así se suma al vocero Manuel Adorni, quién dialogó con A24 y fue terminante al indicar que el accionar del consultor político fue "equivocado" y, además, afirmó que el propio Milei le dijo que fue "innecesario".
    </p>
</Event>