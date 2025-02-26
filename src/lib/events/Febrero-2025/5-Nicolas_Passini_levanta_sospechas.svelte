<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Nicolas Passini levanta sospechas sobre la wallet del desarrollador de $LIBRA"
    date="14 de febrero, 2025 - 20:07 hs"
    avatar={CustomAvatar.NicolasPassini}
    parties={["Nicolas Passini"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Nicolás Passini, experto en cripto finanzas, indicó los mismos <em>red flags</em> que muchos otros usuarios de X. A esta altura de la noche, la idea que la cuenta de Javier Milei había sido hackeada todavía tenía peso.
    </p>
    <Tweet tweet={data.Nicolas_Passini_tweet_14_02_2025} />
</Event>