<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Asume Javier Milei la Presidencia: Mauricio Novelli, Manuel Terrones Godoy y Jeremías Walsh fueron invitados a la Gala del Teatro Colón"
    date="10 de diciembre, 2023"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli", "Jeremías Walsh", "Manuel Terrones Godoy"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/19/quienes-son-mauricio-novelli-y-manuel-terrones-godoy-los-jovenes-empresarios-involucrados-en-el-caso-libra/#:~:text=Gracias%20a%20su,W%20Professional%20Traders.'
        }
    ]}
>
    <Img
        src="https://www.infobae.com/resizer/v2/GZE6OLFVWVEWRDZWIL7R3QYKE4.png?auth=d5bf68514d2ec9098dfd0956fb6d41243e9bd73278e7cbdca2a8e810e8631742&smart=true&width=1200&height=1800&quality=85"
        size="max-w-lg"
        alt="Terrones Godoy, Walsh y Novelli en la puerta del teatro Colón en la gala de asunción de Milei"
        class="rounded-lg content-pic"
    />
    <Tweet tweet={data.Asume_Milei_10_12_2023} />
</Event>