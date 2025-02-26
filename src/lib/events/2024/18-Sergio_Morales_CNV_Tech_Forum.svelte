<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Sergio Morales, asesor de la CNV, participa del Tech Forum"
    date="21 de octubre, 2024"
    avatar={CustomAvatar.SergioMorales}
    parties={["Sergio Morales"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Sergio Morales es un asesor de la Comisión Nacional de Valores (CNV). Tiene una consultora que se llama Criptocity. Con este perfil, participó de la convención Tech Forum y desde las redes de la CNV compartieron el acontecimiento.
    </p>
    <Tweet tweet={data.Sergio_Morales_CNV_Tech_Forum_21_10_2024} />
</Event>