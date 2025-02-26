<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Patricia Bullrich, de las primeras en defender a Javier Milei"
    date="15 de febrero, 2025"
    avatar={CustomAvatar.PatriciaBullrich}
    parties={["Patricia Bullrich", "Javier Milei"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/patricia-bullrich-defendio-milei-escandalo-cripto-increible-pedir-juicio-politico-tuit_0_bvcJ50UcsC.html'
        }
    ]}
>
    <p class="timeline-item-p">
        "Me parece que lo que está pasando, o lo que pasó anoche con respecto a un tuit del Presidente, fue como una bomba atómica para intentar bajar al Presidente de un hondazo. Una cosa increíble. Una cosa increíble pedir juicio político por un tuit", esgrimió la ministra -una de las voces más fuertes dentro del elenco del oficialismo- en defensa del mandatario y contra la oposición. Bullrich dijo que la intención del Presidente fue promover una iniciativa que tenía como fin hacerle "bien al país".
    </p>

    <p class="timeline-item-p">
        "Realmente ese tuit tuvo solo la intención de generar o mostrar cómo se podían financiar pequeñas empresas, emprendedores. Después cada uno toma su decisión. Bueno, lo tuvo que sacar porque fue increíble", agregó,
    </p>

    <Tweet tweet={data.Bullrich_defensa_15_02_2025} />
</Event>