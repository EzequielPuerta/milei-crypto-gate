<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se conoció otra foto de Hayden Davis con Javier Milei"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/805445-critpogate-se-conocio-otra-foto-de-hayden-davis-con-javier-m'
        }
    ]}
>
    <p class="timeline-item-p">
        Mientras el Gobierno intenta despegar al presidente Javier Milei de cualquier vínculo con Hayden Mark Davis, el creador de la memecoin que disparó la criptoestafa internacional, en las últimas horas se conoció una nueva fotografía que demuestra que ambos habían tenido varios encuentros más del que se conoció luego del escándalo.
    </p>
    <p class="timeline-item-p">
        La imagen que los muestra juntos, sonrientes y confiables data de este año y por el momento no está claro dónde es. Sí se los ve con vestimenta distinta a la que usaron en la selfie que se habían tomado en Casa Rosada, lo cual evidencia que ambos no sólo se volvieron a ver sino que lo hicieron en otro ámbito.
    </p>
    <p class="timeline-item-p">
        La fotografía que hasta ahora había circulado era del encuentro que tuvieron en Casa de Gobierno en enero pasado, luego de que Davis conociera a Milei en la Tech Forum de octubre del 2024 a través del trader Mauricio Novelli.
    </p>
    <p class="timeline-item-p">
        Allí se lo ve a Davis con anteojos, de camisa y corbata negra; y a Milei con una camisa gris y su inefable campera de cuero. En la nueva selfie que reveló un canal de noticias la estética es inversa: Milei con corbata y camisa celeste, y Hayden sonriendo sin los antejos ni una corbata.
    </p>

    <Tweet tweet={data.Nueva_Foto_Hayden_20_02_2025} />
</Event>