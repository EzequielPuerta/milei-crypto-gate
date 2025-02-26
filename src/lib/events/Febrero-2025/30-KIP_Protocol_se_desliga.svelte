<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="KIP Protocol y Julián Peh también se desligan y desmienten al Gobierno"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JulianPeh}
    parties={["Julian Peh", "Javier Milei"]}
    sources={[
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/la-empresa-detras-de-libra-desmintio-al-gobierno-en-la-reunion-con-milei-no-se-discutio-la-nid17022025/'
        }
    ]}
>
    <p class="timeline-item-p">
        La empresa KIP Protocol que generó la memecoin $LIBRA salió a desmentir al Gobierno argentino. Si bien la compañía reconoció que hubo una reunión en octubre pasado entre el CEO Julian Peh y el presidente Javier Milei, tal como lo había comunicado la Casa Rosada este sábado, aseguró que “no hubo discusión ni mención de ninguna iniciativa específica, incluido el proyecto (“Viva la Libertad”) y el lanzamiento de tokens”.
    </p>

    <p class="timeline-item-p">
        Según aseguró KIP Protocol en un comunicado oficial, eso no sucedió en aquel encuentro en la denominada feria comercial inaugural Tech Forum Argentina. La empresa “no se dedica a ayudar a las organizaciones a lanzar tokens”, aclaró y prosiguió en su defensa: “Somos una compañía de soluciones técnicas de IA [Inteligencia Artificial] centrada en la implementación de infraestructura de IA, es en lo que se centra nuestro negocio y sería inusual proponer algo más”.
    </p>

    <p class="timeline-item-p">
        Ese 19 de octubre, siempre según KIP Protocol, el CEO Peh habló con Milei a través de un traductor durante unos 30 minutos. “Dialogaron sobre IA, tecnología en general y el deseo de la empresa de hacer más negocios e invertir en la Argentina. El Presidente habló de su visión de la Argentina, sus filosofías económicas y cómo daba la bienvenida a la inversión extranjera en el país, especialmente por parte de empresas de inteligencia artificial. Esta fue la primera reunión del señor Peh con el presidente Milei”, se informó.
    </p>

    <p class="timeline-item-p">
        “KIP Protocol no tenía conocimiento ni participación en esta reunión. La empresa ciertamente no tuvo ningún representante presente en este encuentro”, aseguró. “La reunión del 19 de octubre de 2024 fue la única ocasión en la que el señor Peh o cualquier empleado de la compañía se reunió con el presidente Milei”, se afirmó de manera oficial. “KIP no tuvo ningún trato comercial con Hayden Mark Davis antes de esto. En ningún momento Davis fue empleado o representante de la empresa”, prosiguió la compañía.
    </p>

    <Tweet tweet={data.KIP_protocol_se_desliga_17_02_2025} />
</Event>