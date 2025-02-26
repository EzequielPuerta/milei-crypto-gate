<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Santiago Caputo y su tatuaje referente Libra"
    date="18 de febrero, 2025 - 23:06 hs"
    avatar={CustomAvatar.SantiagoCaputo}
    parties={["Santiago Caputo", "Maximiliano Firtman"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Maximiliano Firtman comparte en su cuenta de X un fotograma de la entrevista de Viale a Javier Milei, en el momento exacto cuando Santiago Caputo entra en el plano de la cámara y se visualiza un tatuaje de Libra en su brazo derecho.
    </p>

    <Tweet tweet={data.Santiago_Caputo_Tatuaje_18_02_2025} />
</Event>