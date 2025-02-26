<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="10º reunión de Novelli: Casa Rosada con Javier Milei"
    date="1 de noviembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli", "Hayden Mark Davis", "Manuel Adorni"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/quienes-son-mauricio-novelli-y-manuel-terrones-godoy-los-empresarios-involucrados-el-caso-libra-n6115080#:~:text=Desde%20el%20cuestionado%20evento%20hasta%20la%20explosi%C3%B3n%20del%20esc%C3%A1ndalo%20las%20visitas%20se%20profundizaron%20con%20ingresos%20de%20Novelli%20a%20la%20Rosada%20el%201%C2%B0%20de%20noviembre%2C%20el%2010%20y%20el%2021.%20Este%20%C3%BAltimo%20acompa%C3%B1ado%20de%20Mark%20Hayden%20Davis.'
        }
    ]}
>

</Event>