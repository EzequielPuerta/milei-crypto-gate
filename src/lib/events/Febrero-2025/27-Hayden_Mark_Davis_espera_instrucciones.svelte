<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="En una nueva entrevista, Hayden Mark Davis dice esperar instrucciones del Gobierno Nacional"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Stephen Findeisen", "Javier Milei"]}
    sources={[
        {
            label: 'Letra P',
            url: 'https://www.letrap.com.ar/politica/mensaje-javier-milei-el-creador-libra-dijo-que-espera-instrucciones-del-gobierno-n5414137'
        }
    ]}
>
    <p class="timeline-item-p">
        Fue durante una entrevista con el youtuber experto en cripto Stephen Findeisen, más conocido como Coffeezilla.
    </p>

    <Tweet tweet={data.Davis_Milei_17_02_2025} />
</Event>