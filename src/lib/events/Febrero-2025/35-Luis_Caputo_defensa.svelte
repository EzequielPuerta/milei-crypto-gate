<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Luis Caputo salió a defender a Javier Milei"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.LuisCaputo}
    parties={["Luis Caputo", "Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804737-milei-estafador-eso-es-absurdo'
        }
    ]}
>
    <p class="timeline-item-p">
        "No hubo dolo, ni delito ni corrupción", enfatizó el ministro de Economía, Luis Caputo, atajándose de los cargos que empiezan a hacerse contra la intervención del presidente, Javier Milei, en la promoción de la criptomoneda conocida como $Libra.
    </p>

    <embed type="video/mp4" src="https://geo.dailymotion.com/player/xt5ee.html?video=x9emfyy" width="600" height="340" />
</Event>