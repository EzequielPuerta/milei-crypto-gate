<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="1º reunión de Novelli: Casa Rosada con Karina Milei"
    date="8 de enero, 2024"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Karina Milei", "Mauricio Novelli"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=1%20%E2%80%93%208%20de,en%20la%20Rosada.'
        },
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/karina-milei-la-puerta-de-entrada-a-la-casa-rosada-para-los-personajes-detras-de-la-criptomoneda-nid16022025/#:~:text=El%208%20de%20enero%20del,anterior%20a%20la%20del%20Presidente.'
        }
    ]}
>
    <p class="timeline-item-p">
        En los primeros días del gobierno de los hermanos Milei, Novelli ingresó a ver a Karina pocos minutos antes de las 15 hs y se fue pasadas las 19.30. Un día largo en la Rosada. Ésta será la primera de 8 reuniones oficiales que tendrá Novelli con los hermanos Milei, post asunción.
    </p>
    <p class="timeline-item-p">
        Dato de color, ninguna de las reuniones de Karina Milei con Novelli figuran en el registro oficial de audiencias. Todos fueron detectadas por <strong>El Destape</strong> en la planilla de accesos a la Casa Rosada.
    </p>
    <p class="timeline-item-p">
        Un dato curioso: al mismo momento entraron a la Casa Rosada 3 importantes representantes del FMI: Luis Cubeduu, Ashvin Ahuja y Ben Kelmanson. Según la planilla los directivos del FMI se reunieron con el entonces jefe de gabinete Nicolás Posse. Y más curioso es que, según las mismas planillas de ingreso, Novelli y los hombres del FMI se retiraron a exactamente a la misma hora, las 19.33hs.
    </p>

    <ClickableImage
        src="https://resizer.glanacion.com/resizer/v2/mauricio-novelli-ingreso-a-casa-rosada-autorizado-PKYO5MXU65EDJGO54FP22ZIMQ4.jpg?auth=e7501e372e2b3518478ed10f933ce4794a5d9937d6ea085a2f738ae243d46301&width=780&height=336&quality=70&smart=true"
        alt="Mauricio Novelli ingresó a Casa Rosada autorizado por Karina Milei el 8 de enero de 2024, según documentos oficiales."
    />
</Event>