<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La memecoin Minidoge lanzó una recaudación de fondos para pagarle a las 'víctimas de LIBRA'"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Hayden Mark Davis", "Javier Milei"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/una-memecoin-que-vinculan-a-musk-se-metio-en-el-escandalo-por-la-estafa-cripto-de-libra-202521710466'
        }
    ]}
>
    <p class="timeline-item-p">
        Minidoge, una memecoin que traders, influencers cripto y medios especializados en Estados Unidos vinculan con Musk, lanzó un crowdfund -una recaudación de fondos virtual- para pagarle a las "víctimas de LIBRA".
    </p>
    <p class="timeline-item-p">
        Este lunes, esta misma memecoin llamó a su comunidad a "donar para las víctimas de $LIBRA", a quienes les pide la dirección de la plataforma en la cual fue lanzada la cripto el viernes, el monto que perdieron y una captura de pantalla de la compra que hicieron. Acto seguido, arrobaron a Elon Musk, hoy funcionario nacional de Estados Unidos como titular del Departamento de Eficiencia Gubernamental.
    </p>

    <Tweet tweet={data.Minidoge_crowdfund_17_02_2025} />
</Event>