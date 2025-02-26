<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Hayden Mark Davis realiza su descargo"
    date="15 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Hayden Mark Davis, CEO de Kelsier Ventures, empresa detrás de <strong>$LIBRA</strong>, culpó al presidente argentino por la abrupta caída. "A pesar de los compromisos previos, el presidente y su equipo inesperadamente revirtieron su postura. Es fundamental reconocer que las inversiones en memecoins dependen de la confianza y el respaldo. Cuando [el Gobierno argentino] eliminó sus publicaciones, los inversores que habían adquirido el token, confiando en su respaldo, se sintieron traicionados", aseguró.
    </p>
    <Tweet tweet={data.Davis_descargo_15_02_2025} />
</Event>