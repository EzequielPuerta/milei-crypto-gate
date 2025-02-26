<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Mencionan a Guillermo Montenegro como reemplazante de Cúneo Libarona en el Ministerio de Justicia"
    date="21 de febrero, 2025"
    avatar={CustomAvatar.MarianoCuneoLibarona}
    parties={["Mariano Cúneo Libarona", "Javier Milei", "Karina Milei", "Guillermo Montenegro"]}
    sources={[
        {
            label: 'La Política Online',
            url: 'https://www.lapoliticaonline.com/politica/mencionan-a-guillermo-montenegro-como-reemplazante-de-cuneo-libarona-en-justicia/'
        }
    ]}
>
    <p class="timeline-item-p">
        Una versión muy fuerte que circulaba este viernes en el gobierno nacional y los tribunales federales ubica al intendente de Mar del Plata, Guillermo Montenegro, como un posible reemplazante de Mariano Cúneo Libarona en el Ministerio de Justicia.
    </p>
    <p class="timeline-item-p">
        Como reveló LPO, Karina Milei analiza pedirle la renuncia a Cúneo Libarona para que se haga cargo full time de la defensa de ella y su hermano ante la investigación judicial por la estafa con la criptomoneda Libra.
    </p>
    <p class="timeline-item-p">
        En ese marco, en las últimas horas se instaló muy fuerte la posibilidad de que Javier Milei le haya ofrecido ese cargo a Montenegro, que es hombre del PRO pero viene acercándose aceleradamente a La Libertad Avanza.
    </p>
    <p class="timeline-item-p">
        En el entorno del intendente de Mar del Plata negaron a LPO que exista el ofrecimiento y lo atribuyeron a una operación de Mauricio Macri para desgastarlo u obturar el pase de Montenegro al gobierno nacional. De todos modos, admiten que el rumor está muy fuerte en todos los círculos políticos y en el Ministerio de Justicia, pero repiten que con Montenegro nadie habló.
    </p>
</Event>