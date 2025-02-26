<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="KIP Protocol se despegó de $LIBRA pero le apuntó a Mauricio Novelli y complicó a Javier Milei"
    date="24 de febrero, 2025"
    avatar={CustomAvatar.JulianPeh}
    parties={["Julian Peh", "Javier Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/806311-kip-protocol-se-despego-de-libra-pero-le-apunto-a-mauricio-n'
        }
    ]}
>
    <p class="timeline-item-p">
        KIP Protocol, una de las empresas involucradas en la estafa multimillonaria con criptomonedas que tuvo como protagonista al presidente Javier Milei, desmintió este lunes haber participado del lanzamiento de $LIBRA, así como haber obtenido beneficios económicos del proyecto. La empresa reconoció la magnitud de las pérdidas que la estafa les provocó muchos inversores y le apuntó directamente a Mauricio Novelli, el empresario ligado al Presidente que lo introdujo al mundo cripto.
    </p>
    <p class="timeline-item-p">
        En un comunicado difundido por X, la compañía intentó despegarse de Milei, asegurando que no tiene "relación previa ni actual" con el mandatario, aunque sí admitió haber recibido una propuesta relacionada al proyecto por parte de  Novelli, uno de los organizadores junto a Manuel Terrones Godoy de Tech Forum, el evento de octubre de 2024 donde el líder de La Libertad Avanza habría conocido a Julian Peh (CEO de Kip Network) y al creador de la criptomoneda, Hayden Mark Davis (Kelsier Ventures).
    </p>
    <p class="timeline-item-p">
        En primer lugar, asegura el comunicado, "KIP no inició el proyecto Libra ni el Proyecto Viva La Libertad". Esto significa que "no dirigimos ninguna actividad ni participamos en ninguna discusión relacionada con el lanzamiento del token" sino que "somos una empresa de inteligencia artificial en etapa inicial que se convirtió en una parte conveniente para brindar cobertura a otras partes que iniciaron y gestionaron el lanzamiento del token", afirma en una confusa explicación.
    </p>
    <p class="timeline-item-p">
        "No se nos informó con antelación de la fecha ni de la hora de lanzamiento del token. No promovimos la compra del token de ninguna manera antes o después del lanzamiento", insistió la empresa.
    </p>
    <p class="timeline-item-p">
        Después del lanzamiento del token, señaló KIP Protocol, "Novelli nos pidió que hiciéramos una publicación en X para apoyar el proyecto, proporcionándonos texto en inglés y español". 
    </p>
    <p class="timeline-item-p">
        En ese momento, "la publicación original del presidente Javier Milei apoyando el proyecto todavía estaba activa, lo que nos permitió seguir confiando en los objetivos más amplios del proyecto. Por lo tanto, publicamos en X para apoyarlo", argumentó la compañía sobre su participación en la promoción de $LIBRA.
    </p>
    <p class="timeline-item-p">
        Según afirma el comunicado, "KIP no obtuvo ningún beneficio del lanzamiento del token. No recibimos tokens ni pagos, ni nos ofrecieron nada. KIP y su equipo no tienen tokens ni fondos asociados de ninguna manera con Libra o Hayden Davis/Kelsier. Ninguna de las billeteras involucradas en el lanzamiento de Libra pertenece a KIP".
    </p>
    <Tweet tweet={data.KIP_Protocol_desligue_24_02_2025} />
    <Tweet tweet={data.Maxi_Firtman_KIP_Protocol_desligue_24_02_2025} />
</Event>