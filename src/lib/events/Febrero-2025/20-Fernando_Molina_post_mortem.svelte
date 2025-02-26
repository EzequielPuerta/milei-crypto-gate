<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El especialista cripto Fernando Molina comparte los números del post mortem"
    date="16 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Fernando Molina", "Javier Milei"]}
    sources={[
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/economia/2025/02/18/ganadores-y-perdedores-los-numeros-de-quienes-salieron-beneficiados-por-libra-y-quienes-pagaron-el-costo/'
        }
    ]}
>
    <p class="timeline-item-p">
        * El 62% de las wallets perdieron entre 1 y 1k
    </p>
    <p class="timeline-item-p">
        * Un 21% ganó entre 1 y 1k
    </p>
    <p class="timeline-item-p">
        * Casi un 9% perdió entre 1k y 10k
    </p>
    <p class="timeline-item-p">
        * Un 2.7% perdió entre 10ky 100k
    </p>
    <p class="timeline-item-p">
        * Los que ganaron más de 100k son solo el 0.18%
    </p>
    <Tweet tweet={data.Fernando_Molina_analisis_16_02_2025} />
</Event>