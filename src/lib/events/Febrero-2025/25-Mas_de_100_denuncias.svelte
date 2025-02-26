<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Se realizan mas de 100 denuncias contra el accionar de Javier Milei"
    date="17 de febrero, 2025"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/804483-a-javier-milei-le-llueven-las-denuncias-penales-se-presentar'
        }
    ]}
>
    <p class="timeline-item-p">
        Javier Milei acumuló durante el fin de semana más de cien denuncias penales por la estafa con la criptomoneda $Libra. Las presentaciones fueron hechas por damnificados y por figuras de la oposición política, que plantearon que el Presidente formó parte de la defraudación cometida, ya que participó del lanzamiento de la memecoin -tuiteando una recomendación a invertir en ella apenas tres minutos después de que se lanzara públicamente- y mantuvo su mensaje anclado a su cuenta de X durante siete horas, aún después de saber que era una estafa. Para los denunciantes, el argumento de que Milei solamente cometió un error, impulsado por el entusiasmo, es poco creíble. Señalan que los vínculos que los desarrolladores del proyecto tenían con La Libertad Avanza son inocultables. 
    </p>
</Event>