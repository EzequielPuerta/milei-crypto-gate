<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Vitalik Buterin, cofundador de Ethereum, le pidió a Javier Milei que organice una cumbre en la Argentina"
    date=""
    avatar={CustomAvatar.VitalikButerin}
    parties={["Vitalik Buterin", "Javier Milei"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/en-medio-del-escandalo-libra-uno-los-gurues-del-mundo-cripto-le-pidio-javier-milei-que-organice-una-cumbre-la-argentina-n6115754'
        }
    ]}
>
    <p class="timeline-item-p">
        Tras la polémica que generó el caso $LIBRA - que involucra directamente al presidente Javier Milei - uno de los pesos pesados de la industria de criptomonedas, Vitalik Buterin (creador de Ethereum), compartió un mensaje en su cuenta de X en donde respaldó a la comunidad argentina relacionada con los criptoactivos. "La comunidad Ethereum de Argentina está llena de desarrolladores increíbles, que ya han contribuido con algunos de los software más importantes del ecosistema Ethereum", escribió.
    </p>
    <p class="timeline-item-p">
        El mensaje fue visto como un respaldo de uno de los gurúes del mundo cripto al Presidente en uno de los momentos más sensibles desde su llegada al poder. Buterin también deslizó la posibilidad de organizar el Devconnect - un evento para la comunidad de Ethereum - en Argentina, a lo que Milei contestó: "Sería un honor que Argentina sea sede de Devconnect".
    </p>

    <Tweet tweet={data.Vitalik_Argentina_20_02_2025} />
</Event>