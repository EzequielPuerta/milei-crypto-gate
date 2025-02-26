<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Se conocen los primeros números, 8 billeteras vinculadas a $LIBRA retiraron 107 millones de USD"
    date="15 de febrero, 2025 - 01:30 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/cordoba/caso-libra-primera-denuncia-penal-en-cordoba-contra-milei-por-el-criptoescandalo.phtml#:~:text=%22Hubo%20ocho%20ganadores%2C%20cuyas%20identidades%20est%C3%A1n%20protegidas%20por%20el%20anonimato%2C%20que%20se%20hicieron%20en%20una%20noche%20con%20un%20bot%C3%ADn%20de%20107%20millones%20de%20d%C3%B3lares%22%2C%20indica%20el%20documento.'
        }
    ]}
>
    <p class="timeline-item-p">
        Luego que el precio de $LIBRA se desplome en tan solo un par de horas, se conoce que 8 billeteras obtuvieron ganancias por 107 millones de dólares.
    </p>

    <Tweet tweet={data.Lookonchain_cashout_15_02_2025} />
</Event>