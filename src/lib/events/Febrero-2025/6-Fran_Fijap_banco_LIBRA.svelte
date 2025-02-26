<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Fran Fijap bancó el token $LIBRA, invirtiendo al menos 4.140 dólares"
    date="14 de febrero, 2025 - 20:20 hs"
    avatar={CustomAvatar.FranFijap}
    parties={["Fran Fijap"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Fran Fijap, el youtuber libertario, se mostró entusiasmado con su inversión de $LIBRA y lo compartió en X. Por la captura que mostró, se deduce que invirtió 4.140 dólares y al momento de subir el tweet estaba obteniendo 3.420.30 dólares de ganancia. Se desconoce si pudo mantenerla o si perdió todo, pero al tiempo borró su tweet y subió otro practicando una defensa acérrima a Javier Milei.
    </p>

    <Img
        src="https://pbs.twimg.com/media/Gj2MVSzWIAAfzD0.jpg:large"
        alt="Fran Fijap muestra en X su inversión en LIBRA"
        size="max-w-xl"
        class="rounded-lg content-pic"
    />
    <Tweet tweet={data.Fran_Fijap_15_02_2025} />
</Event>