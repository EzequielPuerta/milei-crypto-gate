<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El influencer estadounidense Ape dice haber sido amenazado por Milei"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.Ape}
    parties={["Ape", "Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/805206-criptogate-el-influencer-ape-dice-haber-sido-amenazado-por-m'
        }
    ]}
>
    <p class="timeline-item-p">
        El influencer estadounidense Ape, uno de los que denuncia haber sido afectado por la estafa multimillonaria con criptomonedas que tuvo como protagonista al presidente Javier Milei, dijo haber recibido una amenaza desde la cuenta oficial de X del mandatario. Fuentes del Gobierno desmintieron al inversor cripto y aseguraron que el líder de La Libertad Avanza no envió ese mensaje. 
    </p>
    <p class="timeline-item-p">
        "Recibí un DM del presidente de Argentina. ¡Está negando todo! ¿$LIBRA nunca pasó? ¡No puedo creer a este tipo! Vas a tratar de silenciarme, ¿eh? ¿Mantén mi nombre afuera de esto? Demasiado tarde", escribió el influencer en su cuenta de X, junto a una captura de pantalla del supuesto mensaje de Milei.
    </p>
    <p class="timeline-item-p">
        Según se lee en la captura de pantalla, el mandatario le habría escrito: "Dejá de difundir mentiras sobre mí en las noticias de Argentina. Nunca estuve involucrado con $LIBRA, y si sigues haciendo afirmaciones falsas, tomaré acciones legales contra ti. Mantén mi nombre fuera de esto, mandril". 
    </p>

    <Tweet tweet={data.Ape_amenazas_19_02_2025} />
</Event>