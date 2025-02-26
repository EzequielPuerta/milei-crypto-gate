<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="La cuenta Bubblemaps advierte que el 82% de $LIBRA está desbloqueado"
    date="14 de febrero, 2025 - 19:38 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/economia/2025/02/16/glosario-cripto-que-significan-rug-pull-pump-and-dump-staking-y-otros-terminos-del-mundo-digital/#:~:text=interesantes%20de%20conocer%3A-,Rug%20Pull,la%20experta%20en%20criptomonedas%20%E2%80%9CLady%20Market%E2%80%9D%2C%20en%20su%20cuenta%20de%20X.,-%E2%80%9CGeneralmente%20los%20due%C3%B1os'
        }
    ]}
>
    <p class="timeline-item-p">
        La empresa de análisis de blockchain Bubblemaps advierte antes del colapso sobre la tokenomics defectuosa de $LIBRA, revelando que el 82% del suministro estaba desbloqueado y vendible desde el principio (lo que en el argot financiero se conoce como <em>rug pull</em>).
    </p>

    <Tweet tweet={data.Bubblemaps_tweet_14_02_2025} />
    <Tweet tweet={data.Bubblemaps_tweet_2_14_02_2025} />
</Event>