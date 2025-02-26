<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Comparten en la cuenta de Instagram de N&W Professional Traders, una foto de una clase de Javier Milei durante la Pandemia"
    date="26 de noviembre, 2020"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli", "Jeremías Walsh"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/19/quienes-son-mauricio-novelli-y-manuel-terrones-godoy-los-jovenes-empresarios-involucrados-en-el-caso-libra/#:~:text=Milei%20conoce%20a,relevados%20por%20Infobae.'
        }
    ]}
>
    <Img
        src="https://www.infobae.com/resizer/v2/QK3WDR6OW5DMNCHN2MO4VCA2PA.png?auth=c3b4287d879b976ddaa9b4affa2bcedd98b99db0c483274e11719bc494103db3&smart=true&width=1200&height=733&quality=85"
        alt="Clase de Milei en N&W"
        class="rounded-lg content-pic"
    />
</Event>