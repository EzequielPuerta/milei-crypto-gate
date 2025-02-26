<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El Senado también rechazó el pedido de interpelación a Karina Milei"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.KarinaMilei}
    parties={["Karina Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804413-javier-milei-y-sus-horas-mas-dificiles-como-presidente-como-#:~:text=30%20minutos%20atr%C3%A1s-,CON%20KARINA%2C%20TAMPOCO,-La%20C%C3%A1mara%20de'
        }
    ]}
>
    <p class="timeline-item-p">
        La Cámara de Senadores no logró los dos tercios necesarios para aprobar el pedido de interpelación de la secretaria general de la Presidencia, Karina Milei, por la estafa con la criptomoneda $LIBRA, que había solicitado el bloque de senadores peronistas.
    </p>
    <p class="timeline-item-p">
        El senador formoseño José Mayans había anunciado que los interbloques peronistas pedirían la interpelación de “la secretaria General con rango de ministro”. “Que venga acá a dar explicaciones”, reclamó el legislador.
    </p>
    <p class="timeline-item-p">
        Sin embargo, el pedido no alcanzó los votos necesarios y también fue rechazado. 
    </p>

    <Tweet tweet={data.UP_Karina_Milei_20_02_2025} />
</Event>