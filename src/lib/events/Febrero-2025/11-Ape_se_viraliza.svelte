<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El influencer Ape se viraliza tras declarar en pleno ataque de ira, haber perdido mas de 1 millón de dólares"
    date="14 de febrero, 2025 - 21:50 hs"
    avatar={CustomAvatar.Ape}
    parties={["Ape", "Javier Milei"]}
    sources={[]}
>
    <Tweet tweet={data.Ape_rugged_14_02_2025} />
</Event>