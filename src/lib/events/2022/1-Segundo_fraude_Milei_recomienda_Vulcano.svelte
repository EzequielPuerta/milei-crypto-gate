<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Img } from 'flowbite-svelte';
    
    export let data;
</script>

<Event
    title="Segundo fraude: Milei recomienda Vulcano"
    date="18 de febrero, 2022"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'C5N',
            url: 'https://www.c5n.com/politica/escandalo-cripto-quienes-son-mauricio-novelli-y-manuel-terrones-godoy-apuntados-estar-detras-libra-n191194#:~:text=En%20febrero%20de,sucedi%C3%B3%20con%20%24LIBRA.'
        },
        {
            label: 'Tweet de Milei',
            url: 'https://x.com/JMilei/status/1494771114869993478'
        }
    ]}
>
    <p class="timeline-item-p">
        En febrero de 2022, <strong>Mauricio Novelli</strong> creó NFT Gaming, y el proyecto Vulcano Game. El 18 de febrero Javier Milei hizo en redes una publicidad que hoy suena premonitoria: "Muy interesante el proyecto de Vulcano Game (NFT Gaming). Un diagrama económico sostenible en el tiempo a diferencia de la gran mayoría. Les dejo su web: vulcano.gg" .
    </p>
    <p class="timeline-item-p">
        Pocas semanas después, el token de la empresa de videojuegos, <strong>$VULC</strong>, se desplomó a $0 con denuncias de fraude, igual que sucedió con <strong>$LIBRA</strong>.
    </p>

    <Img
        src="https://media.c5n.com/p/bce6674c1e30baa973c5fce3c1ceaa04/adjuntos/326/imagenes/000/315/0000315489/790x0/smart/tuit-javier-milei-vulcano-game-nft-gaming-guillermo-novelli-18-febrero-2022.png"
        alt="El tweet de Milei recomendando Vulcano, antes de ser borrado."
        size="max-w-lg"
        class="rounded-lg content-pic"
    />
</Event>