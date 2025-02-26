<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import Youtube from "svelte-youtube-embed";
    
    export let data;
</script>

<Event
    title="Primer fraude: Milei recomienda CoinX World"
    date="18 de diciembre, 2021"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Post en el Instagram de Milei',
            url: 'https://www.instagram.com/p/CXoGvseA1OG/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
        }
    ]}
>
    <p class="timeline-item-p">
        Con una inversión mínima de US$ 500 o de $ 100 mil en aquel entonces, prometían una rentabilidad del 5%, y para aquellos que ingresaban con un monto de US$ 1.000 aseguraban una rentabilidad del 8% mensual. “Hacemos inversiones de muy bajo riesgo y tenemos traders profesionales que están constantemente analizando el mercado”, argumentaba CoinX. Sin embargo, expertos del sector financiero advirtieron que tales tasas eran insostenibles y compararon su funcionamiento con un esquema Ponzi, ya que no se encontraban registrados ante la CNV.
    </p>
    <p class="timeline-item-p">
        Mas tarde, la empresa (cuya sede central se encontraba en El Salvador) sería denunciada por fraude.
    </p>
    <Youtube id="LeyMsR7UNl8" />
</Event>