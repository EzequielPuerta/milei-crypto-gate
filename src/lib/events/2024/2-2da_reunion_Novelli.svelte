<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="2º reunión de Novelli: Casa Rosada con Karina Milei"
    date="5 de abril, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Karina Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=2%20%E2%80%93%205%20de,casi%201%20hora.'
        }
    ]}
>
    <p class="timeline-item-p">
        Karina recibió a Novelli, que fue acompañado por un tal Beek Uolderrier (así figura en la planilla), Ivan Canales Vandewijngaerden (director ejecutivo de Degussa Global Custodia y de ICV Advisors) y August Von Finck, heredero de una de las principales fortunas alemanas. Estuvieron casi 1 hora.
    </p>
</Event>