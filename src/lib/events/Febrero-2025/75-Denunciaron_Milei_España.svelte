<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Denunciaron a Javier Milei en España por el escándalo cripto de $LIBRA"
    date="25 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Gerardo Pisarello", "Javier Milei", "Hayden Mark Davis"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/denunciaron-javier-milei-espana-el-escandalo-cripto-libra-n6117362'
        }
    ]}
>
    <p class="timeline-item-p">
        El presidente Javier Milei fue denunciado en España por el diputado Gerardo Pisarello ante la Fiscalía de la Audiencia Nacional para que investiguen "los posibles fraudes de los criptobrothers" del mandatario argentino en el país europeo. La acusación se da en el marco del escándalo de la criptomoneda $LIBRA, promocionada por mandatario en sus redes sociales.
    </p>
    <p class="timeline-item-p">
        El legislador español señaló: "Esta mañana hemos presentado una denuncia a la Fiscalía para que se investiguen las consecuencias en España de las operaciones fraudulentas y contra la seguridad financiera llevadas a cabo por el presidente de Argentina, Javier Milei".
    </p>
    <p class="timeline-item-p">
        "Uno de los cómplices de Milei en esta actuación fue el estadounidense Hayden Mark Davis, CEO de la firma Kelsier Ventures, que se jactó de sobornar a la hermana del presidente argentino a cambio de que le facilitara estos negocios. Pues bien, según información publicada por el diario El Mundo y en otro portales digitales, este señor residiría parte del año en España, concretamente en Cataluña, junto a su padre, Tom Davis, condenado por fraude en Estados Unidos y miembro también de Kelsier Ventures", planteó.
    </p>
    <p class="timeline-item-p">
        Pisarello también señaló que "a partir de esos datos, lo que hemos hecho esta mañana es solicitar a la Fiscalía española que, en coordinación con Fiscalía europea, investigue la residencia exacta de estos miembros de la familia Davis y determine si podrían haber participado desde España en operaciones ilegales de manipulación financiera o estafas fraudulentas".
    </p>
    <p class="timeline-item-p">
        "De prosperar esta iniciativa la presuntamente delictiva actuación del presidente argentino y de sus cómplices sería investigada ya no solo por el FBI en Estados Unidos y por tribunales argentinos sino también por la Audiencia Nacional Española y por la Fiscalía europea", anticipó.
    </p>
</Event>