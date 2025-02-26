<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La billetera cripto Ripio anuncia que el token $LIBRA se encuentra disponible en su plataforma"
    date="14 de febrero, 2025 - 21:40 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[]}
>
    <p class="timeline-item-p">
        A menos de 3 horas del lanzamiento de $LIBRA, la billetera cripto Ripio informa que la tienen listada en su plataforma.
    </p>

    <Tweet tweet={data.Ripio_tweet_14_02_2025} />
</Event>