<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Se precisó que 74.698 wallets participaron en la pérdida de capital de más de 286 millones de dólares"
    date="18 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804715-no-una-dos-veces-fomento-la-estafa-libra#:~:text=se%20precis%C3%B3%20que,entre%20los%20perdedores.'
        }
    ]}
>
    <p class="timeline-item-p">
        Se precisó que hubo más de 74 mil inversores que en total llegaron a acumular una pérdida de capital de más de 286 millones de dólares. En el detalle, se indicó que hubo 71.369 que perdieron hasta 10.000 dólares, 2.409 perdieron entre 10.000 y 50.000, 438 perdieron entre 50.000 y 100.000, 318 perdieron entre 100.000 y 250.000, 87 perdieron más de 250.000, 52 perdieron más de 500.000 y 25 perdieron más de 1.000.000 de dólares. Hubo argentinos entre los perdedores.
    </p>
</Event>