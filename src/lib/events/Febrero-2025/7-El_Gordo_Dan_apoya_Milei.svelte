<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="'El Gordo Dan' sale a apoyar a Javier Milei"
    date="14 de febrero, 2025 - 20:24 hs"
    avatar={CustomAvatar.ElGordoDan}
    parties={["El Gordo Dan"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Daniel Parisini, conocido por su nombre en redes sociales 'Gordo Dan', salió a bancar el tweet de Milei. Él es un activista político ultraconservador y de extrema derecha, empresario de medios argentino que ha llegado a ejercer la medicina. Es quien el 16 de noviembre del 2024 lanzó "Las Fuerzas del Cielo", la agrupación que pretende ser "el brazo armado" y "la guardia pretoriana" de Javier Milei.
    </p>
    <p class="timeline-item-p">
        Como tantos otros tweets y posteos, fue borrado al poco tiempo.
    </p>

    <ClickableImage
        src="https://media.minutouno.com/p/95c02b5819a435b95af9a0fa893f3688/adjuntos/150/imagenes/042/187/0042187667/610x0/smart/imagepng.png"
        alt="El Gordo Dan sale a bancar a Milei"
    />
</Event>