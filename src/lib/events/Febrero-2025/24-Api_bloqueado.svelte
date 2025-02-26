<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El influencer Ape comparte una captura de pantalla mostrando que Javier Milei lo ha bloqueado en X"
    date="16 de febrero, 2025"
    avatar={CustomAvatar.Ape}
    parties={["Ape", "Javier Milei"]}
    sources={[]}
>
    <Tweet tweet={data.Ape_blocked_16_02_2025} />
</Event>