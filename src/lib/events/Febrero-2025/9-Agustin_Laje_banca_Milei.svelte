<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Agustín Laje sale a bancar a Milei"
    date="14 de febrero, 2025"
    avatar={CustomAvatar.AgustinLaje}
    parties={["Agustin Laje", "Javier Milei"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Agustín Laje, el politólogo y escritor de ultraderecha especializado en la lucha contra la “ideología de género” y el “marxismo cultural”, realizó el siguiente tweet de apoyo a Javier Milei. Minutos después, Laje borró el mensaje sin dar mayores explicaciones.
    </p>

    <ClickableImage
        src="https://cdn.eldestapeweb.com/eldestape/022025/1739636442756/GjygRgeXUAAp-yy.webp?cw=933&ch=1407&extw=jpeg"
        alt="Agustín Laje sale a bancar a Milei"
    />
</Event>