<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    
    export let data;
</script>

<Event
    title="La CNV intimó a CoinX para que deje de ofrecer inversiones"
    date="9 de junio, 2022"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'La Voz',
            url: 'https://www.lavoz.com.ar/politica/la-cnv-intimo-a-una-empresa-promocionada-por-javier-milei-para-que-deje-de-ofrecer-inversiones/'
        }
    ]}
>
    <p class="timeline-item-p">
        La Comisión Nacional de Valores (CNV) intimó a la empresa Coinx y a su dueño para que cese en forma inmediata la oferta de atesoramiento de inversiones y cualquier acto de valores negociables porque no está habilitada para operar.
    </p>
    <p class="timeline-item-p">
        Se trata de una empresa que era promocionada por el entonces diputado nacional y líder de Avanza Libertad, Javier Milei, quien ya había anticipado sus intenciones de postularse a la presidencia del país.
    </p>
</Event>