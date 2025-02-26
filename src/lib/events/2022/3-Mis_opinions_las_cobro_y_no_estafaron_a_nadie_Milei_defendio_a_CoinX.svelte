<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import Youtube from "svelte-youtube-embed";
    
    export let data;
</script>

<Event
    title="'Mis opinions las cobro' y 'No estafaron a nadie'. Milei defendió a CoinX"
    date="28 de junio, 2022"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'El Diario AR',
            url: 'https://www.eldiarioar.com/politica/2021-diputado-milei-llamo-invertir-empresa-termino-escandalo-fraude-estafa-piramidal_1_12058704.html'
        }
    ]}
>
    <p class="timeline-item-p">
        Antes de asumir como Presidente, el periodista Jairo Straccia le preguntó a Javier Milei por qué recomendó CoinX, un sitio que estafó a sus inversores, cuando era diputado. 
    </p>
    <Youtube id="9JeYVa4-y5E" />
</Event>