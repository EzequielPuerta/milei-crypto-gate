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
    parties={["Patricia Bullrich", "Javier Milei", "Julián Peh", "Claudia Neira", "Diego Fernandez", "Maximiliano Firtman"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/patricia-bullrich-defendio-milei-escandalo-cripto-increible-pedir-juicio-politico-tuit_0_bvcJ50UcsC.html'
        },
        {
            label: 'Tiempo Argentino',
            url: 'https://www.tiempoar.com.ar/ta_article/los-supuestos-vinculos-de-jorge-macri-con-tech-forum-el-encuentro-donde-nacio-el-entramado-de-la-criptoestafa/'
        }
    ]}
>
    <p class="timeline-item-p">
        "Me parece que lo que está pasando, o lo que pasó anoche con respecto a un tuit del Presidente, fue como una bomba atómica para intentar bajar al Presidente de un hondazo. Una cosa increíble. Una cosa increíble pedir juicio político por un tuit", esgrimió la ministra -una de las voces más fuertes dentro del elenco del oficialismo- en defensa del mandatario y contra la oposición. Bullrich dijo que la intención del Presidente fue promover una iniciativa que tenía como fin hacerle "bien al país".
    </p>

    <Tweet tweet={data.Bullrich_defensa_15_02_2025} />

    <p class="timeline-item-p">
        "Realmente ese tuit tuvo solo la intención de generar o mostrar cómo se podían financiar pequeñas empresas, emprendedores. Después cada uno toma su decisión. Bueno, lo tuvo que sacar porque fue increíble", agregó,
    </p>

    <p class="timeline-item-p">
        Luego Bullrich menciona: "Ahora, esta es una empresa que por ejemplo ha trabajado con la Ciudad de Buenos Aires previamente. No es una empresa que sale de la nada, estaba en una feria". Esto alimenta la versión de que efectivamente KIP Protocol tiene alguna vinculación con el Gobierno de la Ciudad de Buenos Aires, como se deduce del tweet de KIP Protocol etiquetando al GCBA y agradeciendo la invitación a participar de un "Comité Blockchain", algo que plantea la legisladora porteña Claudia Neira, presidenta del bloque de Unión por la Patria.
    </p>
    
    <Tweet tweet={data.Bullrich_Maxi_Firtman_15_02_2025} />
    <Tweet tweet={data.Bullrich_Claudia_Neira_16_02_2025} />

    <p class="timeline-item-p">
        Según el secretario de Innovación de la Ciudad, Diego Fernández, manifestó que no existe “Comité Blockchain”. Ni Peh, ni KIP Protocol mantuvieron o mantienen relación alguna con el Gobierno porteño. A pesar de esto, en la web de la convención Tech Forum (la misma en la que participaron Peh y KIP Protocol), tanto el Gobierno de la Ciudad como Argentina.gob.ar figuran como sponsors.
    </p>

    <Tweet tweet={data.Diego_Fernandez_15_02_2025} />
    <Tweet tweet={data.GCBA_sponsors_16_02_2025} />
</Event>