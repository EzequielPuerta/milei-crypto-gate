<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Hayden Davis negó el pago de coimas a Karina Milei"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Hayden Mark Davis", "Javier Milei", "Karina Milei", "Juan Carlos Pallarols"]}
    sources={[
        {
            label: 'Los Andes',
            url: 'https://www.losandes.com.ar/politica/pese-los-chats-hayden-davis-nego-el-pago-sobornos-karina-milei-controlar-al-presidente-n5939077'
        },
        {
            label: 'La Política Online',
            url: 'https://www.lapoliticaonline.com/politica/la-polemica-del-baston-pallarols-denuncio-que-karina-le-pidio-2-mil-dolares-para-cenar-con-milei/'
        }
    ]}
>
    <p class="timeline-item-p">
        En medio del escándalo cripto, el trader estadounidense Hayden Mark Davis se despegó de los chats atribuidos a su persona donde aseguraba pagarle sobornos a Karina Milei, la secretaria general de Presidencia, para acceder y "controlar" al Presidente.
    </p>
    <p class="timeline-item-p">
        Este martes, el medio especializado en criptomonedas Coindesk había publicado una serie de chats atribuidos a Hayden Davis, CEO de Kelsier Ventures, donde afirmaba en diciembre pasado que tenía influencia sobre Milei debido a pagos realizados a su hermana Karina. "Envié $$ a su hermana y él firma lo que sea y hace lo que yo quiera. Una locura", se lee en el texto enviado a un remitente desconocido.
    </p>
    <p class="timeline-item-p">
        Sin embargo, ahora desde el entorno del empresario salieron a desmentir la veracidad de los mensajes, asegurando que Davis nunca los escribió.
    </p>
    <p class="timeline-item-p">
        "Distintas notas en la prensa afirman que pagué al presidente Javier Milei o a su hermana, Karina Milei, para lanzar la memecoin Libra. Son completamente falsos. Nunca les hice ningún pago, ni ellos lo pidieron. Su única preocupación era asegurar que las ganancias de Libra beneficiaran a la gente y a la economía de Argentina", dijo. "Esto no es más que un ataque políticamente motivado contra el presidente Milei", sumó.
    </p>

    <p class="timeline-item-p">
        Paralelamente a esto, en las redes reflotó la denuncia pública del histórico orfebre Juan Carlos Pallarols. Ocurrió el 3 de septiembre del 2023, previo a la victoria de Javier Milei. Pallarols apareció en TN y denunció públicamente que Karina Milei le pidió dinero para tener una cena con Javier Milei.
    </p>
    <p class="timeline-item-p">
        A Milei no le gustó nada lo que dijo en su momento Pallarols y lo trató de "tremendo mentiroso". "No saben siquiera armar una mentira. Siendo yo un bilardista fanático jamás me pondría la vestimenta de ganador hasta que no termine el partido", explicó el candidato. "Frente a esta mentira, en caso de ganar(las elecciones) pediré de manera explícita que mis atributos no los haga Pallarols", advirtió Milei.
    </p>
</Event>