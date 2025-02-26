<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import Youtube from "svelte-youtube-embed";

    export let data;
</script>

<Event
    title="Editorial de María O'Donnell sobre la estafa de la criptomoneda $LIBRA"
    date="20 de febrero, 2025"
    avatar={CustomAvatar.MariaODonnell}
    parties={["María O'Donnell", "Javier Milei", "Mauricio Novelli", "Karina Milei"]}
    sources={[]}
>
    <Youtube id="M-H8J_nVCBQ" />
</Event>