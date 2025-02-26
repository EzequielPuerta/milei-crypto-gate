<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Img } from 'flowbite-svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Javier Milei sube y dejado fijado el famoso tweet sobre la promoción de $LIBRA"
    date="14 de febrero, 2025 - 19:01 hs"
    avatar={CustomAvatar.JavierMilei}
    parties={["Javier Milei"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/patricia-bullrich-defendio-milei-escandalo-cripto-increible-pedir-juicio-politico-tuit_0_bvcJ50UcsC.html'
        }
    ]}
>
    <p class="timeline-item-p">
        A las 19:01 hs del 14 de febrero del 2025, Javier Milei postea un tweet sorpresivo, promocionando (o difundiendo, como insitiría posteriormente) un nuevo token llamado $LIBRA, subiendose a la ola cripto iniciada por los Trump días atras. Aunque en principio hay algunas diferencias, Milei nunca tilda la criptomoneda como una 'memecoin', algo que los Trump si hicieron y al momento de 'difundir' el token no eran parte del gobierno, pero Milei si. Además, toda una serie de irregularidades técnicas que se fueron descubriendo a lo largo de las siguientes 5 horas.
    </p>
    <p class="timeline-item-p">
        En la teoría, la idea del proyecto (cuya <a href="https://www.vivalalibertadproject.com/es-ar">web</a> aún es accesible) era "impulsar la economía Argentina financiando pequeños proyectos y empresas locales, apoyando a quienes buscan emprender y contribuir al desarrollo del país."
    </p>

    <p class="timeline-item-p">
        Spoiler: el tweet en cuestión no está presente (se adjunta una captura de la misma donde se aprecia que estaba fijado en su cuenta) ya que será borrado a las horas, cuando ya era muy tarde.
    </p>
    <Img
        src="https://www.clarin.com/2025/02/14/7of_Na1Is_720x0__1.jpg"
        alt="sample 1"
        size="max-w-xl"
        class="rounded-lg content-pic"
    />
</Event>