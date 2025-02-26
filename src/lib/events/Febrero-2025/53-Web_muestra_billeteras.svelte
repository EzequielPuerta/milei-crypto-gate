<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Una web muestra las billeteras que obtuvieron las principales ganancias y mediante un bot publica en X cada vez que una transferencia es detectada"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[]}
>
    <Tweet tweet={data.Investigacion_Libra_19_02_2025} />
</Event>