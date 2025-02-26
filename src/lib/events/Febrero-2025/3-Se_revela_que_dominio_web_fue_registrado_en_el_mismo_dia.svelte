<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se revela que el dominio web 'vivalalibertadproject.com' fue registrado en el mismo día del lanzamiento"
    date="14 de febrero, 2025 - 19:27 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Efectivamente se descubre que el dominio web 'vivalalibertadproject.com' había sido registrado el mismo día del lanzamiento, momentos antes del mismo, y solo por un año. Además el correo electrónico del sitio del proyecto era una simple cuenta de Gmail y la web te vincula a un Google Form para aplicar. Por último, la información del dueño del dominio era privada.
    </p>
    <Tweet tweet={data.Domain_info_14_02_2025} />
</Event>