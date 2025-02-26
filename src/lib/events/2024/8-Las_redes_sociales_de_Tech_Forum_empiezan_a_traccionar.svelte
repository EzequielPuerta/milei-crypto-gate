<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Las redes sociales de Tech Forum empiezan a traccionar"
    date="6 de septiembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli", "Manuel Terrones Godoy"]}
    sources={[]}
>
    <Tweet tweet={data.Cofundadores_Tech_Forum_06_09_2024} />
</Event>