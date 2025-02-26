<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="3º reunión de Novelli: Casa Rosada con Karina Milei"
    date="6 de junio, 2024"
    avatar={CustomAvatar.JavierMilei}
    parties={["Karina Milei", "Mauricio Novelli", "Sergio Morales", "Santiago Caputo"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=3%20%2D%206%20de,Rosada%20Santiago%20Caputo.'
        },
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804396-tech-forum-la-cueva-de-los-negocios-y-las-coimas#:~:text=En%20el%20Foro%20del%20a%C3%B1o%20pasado%20participaron%20un%20asesor%20y%20un%20funcionario%20de%20la%20Comisi%C3%B3n%20Nacional%20de%20Valores%20(CNV)%2C%20un%20organismo%20del%20Estado%20que%20debe%20regular%20la%20especulaci%C3%B3n.%20La%20referencia%20es%20para%20Sergio%20Morales%20y%20Alejandro%20Rodr%C3%ADguez%20Ariola%2C%20analista%20de%20investigaciones%20del%20organismo%20y%20experto%20en%20tecnolog%C3%ADa.'
        }
    ]}
>
    <p class="timeline-item-p">
        Karina recibió de nuevo a Novelli el 6 de junio a las 12.20hs. Novelli fue acompañado por <strong>Sergio Morales</strong>. Minutos antes había ingresado a la Casa Rosada <strong>Santiago Caputo</strong>.
    </p>
    <p class="timeline-item-p">
        Sergio Morales es un asesor de la Comisión Nacional de Valores (CNV) y tiene una consultora que se llama Criptocity. Mientras asesora a la CNV, le lleva al organismo empresarios del sector, como Binance y KoiBanx. 
    </p>
</Event>