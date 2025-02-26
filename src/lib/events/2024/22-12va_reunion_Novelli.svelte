<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="12º reunión de Novelli: Casa Rosada con Javier Milei"
    date="21 de noviembre, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/quienes-son-mauricio-novelli-y-manuel-terrones-godoy-los-empresarios-involucrados-el-caso-libra-n6115080#:~:text=Desde%20el%20cuestionado%20evento%20hasta%20la%20explosi%C3%B3n%20del%20esc%C3%A1ndalo%20las%20visitas%20se%20profundizaron%20con%20ingresos%20de%20Novelli%20a%20la%20Rosada%20el%201%C2%B0%20de%20noviembre%2C%20el%2010%20y%20el%2021.%20Este%20%C3%BAltimo%20acompa%C3%B1ado%20de%20Mark%20Hayden%20Davis.'
        },
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/karina-milei-la-puerta-de-entrada-a-la-casa-rosada-para-los-personajes-detras-de-la-criptomoneda-nid16022025/#:~:text=El%20segundo%2C%20el%2021%20de%20noviembre%2C%20entre%20las%2014%3A30%20y%20las%2015%3A17.%20Ninguno%20de%20ellos%20fue%20informado%20en%20el%20Registro%20de%20Audiencias.'
        }
    ]}
>
    <p class="timeline-item-p">
        Esta visita <strong>no fue informada en el Registro de Audiencias</strong>. Se conoció por un pedido de acceso a la información pública realizado por La Nación.
    </p>

    <Img
        src="https://resizer.glanacion.com/resizer/v2/mauricio-novelli-y-mark-hayden-davis-ingresaron-a-NAJGHA7JZ5E3HJI644Z34IITUM.jpg?auth=55ffaaef124a7740698f1ad318f577bbb56a4098230d2b181a98400581dbe700&width=780&height=351&quality=70&smart=true"
        alt="Mauricio Novelli y Mark Hayden Davis ingresaron a la Casa Rosada el 21 de noviembre del año pasado, según documentos oficiales."
        size="max-w-xl"
        class="rounded-lg content-pic"
    />
</Event>