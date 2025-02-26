<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Javier Milei da su charla en el marco de la primera edición del Tech Forum"
    date="19 de octubre, 2024"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Luego de todas estos encuentros en la Casa Rosada y en Olivos llegó el <strong>Tech Forum</strong>, el evento sobre “tecnologías disruptivas” que organizó Novelli en octubre del año pasado y que tiene una próxima convocatoria del 3 al 5 de abril próximos.
    </p>
    <p class="timeline-item-p">
        Milei fue el orador de cierre en la misma sala del Hotel Libertador donde festejó su triunfo electoral. Dio un discurso de 44 minutos. 
    </p>

    <Tweet tweet={data.Milei_Tech_Forum_Infobae_19_10_2024} />
</Event>