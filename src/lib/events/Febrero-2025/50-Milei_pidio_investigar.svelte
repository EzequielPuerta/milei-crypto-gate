<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Javier Milei pidió investigar el 'vínculo' entre 'políticos corruptos' y 'periodistas ensobrados', incriminando particularmente a Horacio Rodríguez Larreta"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Jonatan Viale", "Horacio Rodríguez Larreta"]}
    sources={[
        {
            label: 'Los Andes',
            url: 'https://www.losandes.com.ar/politica/criptogate-javier-milei-pidio-investigar-el-vinculo-politicos-corruptos-y-periodistas-ensobrados-n5939112'
        }
    ]}
>
    <p class="timeline-item-p">
        Javier Milei pidió investigar el "vínculo directo" entre "los políticos corruptos y los periodistas ensobrados", en medio de la polémica por el escándalo de la criptomoneda $LIBRA. El mandatario se manifestó en estos términos al hacerse eco del descargo del periodista Jonatan Viale por la interrupción de la entrevista que le hiciera el lunes último.
    </p>
    <p class="timeline-item-p">
        "Ayer a la noche Jonatan Viale reveló tener conocimiento de algo que advierto desde 2021: existe vínculo directo entre los políticos corruptos y los periodistas ensobrados", expresó Milei en un texto publicado en X.
    </p>
    <p class="timeline-item-p">
        Y planteó que "la Justicia debería investigar, según lo dicho en TN, si el ex precandidato a presidente que sacó 11 puntos usó recursos de los porteños para su campaña presidencial y/o para ensuciar y calumniar al resto de los candidatos, ensobrando a todo aquel que esté a la venta", dijo en referencia al ex jefe de Gobierno porteño Horacio Rodríguez Larreta, que resultó derrotado por Patricia Bullrich en las PASO de Juntos por el Cambio (JxC), informó la Agencia Noticias Argentinas.
    </p>

    <Tweet tweet={data.Milei_ensobrados_19_02_2025} />
</Event>