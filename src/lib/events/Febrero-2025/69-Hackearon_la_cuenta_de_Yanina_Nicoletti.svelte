<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Hackean la cuenta de X de Yanina Nicoletti, la abogada de Hayden Mark Davis"
    date="23 de febrero, 2025"
    avatar={CustomAvatar.YaninaNicoletti}
    parties={["Yanina Nicoletti", "Hayden Mark Davis", "Javier Milei"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/actualidad/hackearon-la-cuenta-de-x-de-yanina-nicoletti-la-abogada-de-hayden-davis.phtml'
        }
    ]}
>
    <p class="timeline-item-p">
        Luego de conocerse que se presentará ante la Justicia argentina para exponer a los responsables de la estafa de $LIBRA, Yanina Nicoletti, la abogada de Hayden Davis —señalado como uno de los beneficiados en la operación—, sufrió el hackeo de su cuenta de X (ex Twitter).
    </p>
    <p class="timeline-item-p">
        Luego de conocerse que se presentará ante la Justicia argentina para exponer a los responsables de la estafa de $LIBRA, Yanina Nicoletti, la abogada de Hayden Davis —señalado como uno de los beneficiados en la operación—, sufrió el hackeo de su cuenta de X (ex Twitter).
    </p>
    <Tweet tweet={data.Yanina_Nicoletti_hackeo_1_23_02_2025} />
    <Tweet tweet={data.Yanina_Nicoletti_hackeo_2_23_02_2025} />
    <Tweet tweet={data.Yanina_Nicoletti_hackeo_3_23_02_2025} />
</Event>