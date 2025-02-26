<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="Especialistas en informática expusieron sobre uso de criptomonedas"
    date=""
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli", "Jeremías Walsh"]}
    sources={[
        {
            label: 'Honorable Cámara de Diputados de la Nación',
            url: 'https://www.hcdn.gob.ar/prensa/noticia/ESPECIALISTAS-EN-INFORMATICA-EXPUSIERON-SOBRE-USO-DE-CRIPTOMONEDAS/'
        }
    ]}
>
    <p class="timeline-item-p">
        La Comisión de Comunicaciones e Informática de la Cámara de Diputados de la Nación realizó una reunión informativa y recibió a especialistas en informática que expusieron sobre el uso de criptomonedas y la prevención de estafas. El titular de la Comisión, Pablo Carro (UxP), dijo que la intención de la reunión era “poder escuchar especialistas y hacer las preguntas que tanto nos inquietan”, en relación a la criptomoneda $Libra. “Sé que hay proyectos presentados de juicio político y pedidos de interpelación a funcionarios, pero son temas que se van a tratar cuando comiencen las sesiones ordinarias”, explicó. 
    </p>
    <p class="timeline-item-p">
        Entre los exponentes estuvieron Mariano Biocca, Emilse Garzón, Maximiliano Firtman, Guido Zatloukal, Santiago Siri, Laureano Bielsa, Fernando Molina y Gustavo Nigohosian.
    </p>
    <Tweet tweet={data.HCDN_Expo_cripto_25_02_2025} />
    <Tweet tweet={data.HCDN_Expo_cripto_Fernando_Molina_25_02_2025} />
</Event>