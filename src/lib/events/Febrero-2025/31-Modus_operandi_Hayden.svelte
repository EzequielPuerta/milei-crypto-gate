<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Explican el modus operandi de Kelsier Ventures, la firma de Hayden Mark Davis, el cerebro detrás de $LIBRA"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Fernando Molina", "Nick O'Neill"]}
    sources={[]}
>
    <p class="timeline-item-p">
        En el tweet subido por Nick O'Neill (y recomendado por Fernando Molina), se explica como Kelsier ofrece su servicio de lanzamiento de tokens, sniping de la liquidez y lavado de dinero como hicieron con $MELANIA y $LIBRA . 
    </p>
    <p class="timeline-item-p">
        - 2% de los tokens se quedan ellos
        Y 3000 dólares por día o el 20% de lo que quieras retirar del mercado y lavar
    </p>
    <p class="timeline-item-p">
        - Tienen diferentes precios para el Market Cap que queres que salga tu token
    </p>
    <p class="timeline-item-p">
        - Aclara que todos los lanzamientos de tokens que hacen los snipean. Lo hacen entre un 87% y un 97% de los tokens. Locura 
    </p>
    <p class="timeline-item-p">
        - da a entender que el 90% de los snipers los hacen insiders. Sus propios bots, familia, amigo
    </p>

    <Tweet tweet={data.Kelsier_modus_operandi_17_02_2025} />
    <Tweet tweet={data.Kelsier_modus_operandi_Nick_17_02_2025} />
</Event>