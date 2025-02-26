<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Maximiliano Firtman advierte señales de sospecha acerca del Tech Forum"
    date="18 de octubre, 2024"
    avatar={CustomAvatar.MaximilianoFirtman}
    parties={["Javier Milei", "Maximiliano Firtman"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Maximiliano Firtman, programador, docente y periodista especializado en tecnología, publica en X un mensaje advirtiendo que los organizadores de Tech Forum son estafadores. Lo llama un asesor de Milei, preocupado por su tweet, diciendo que si era verdad “suspendían todo”. Firtman les hace un informe y se los envía, pero no hacen nada.
    </p>

    <Tweet tweet={data.Firtman_Tech_Forum_18_10_2024} />
</Event>