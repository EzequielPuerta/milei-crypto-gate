<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    export let data;
</script>

<Event
    title="Guillermo Francos criticó a Santiago Caputo por interrumpir la entrevista de Jonatan Viale a Javier Milei"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.GuillermoFrancos}
    parties={["Guillermo Francos", "Santiago Caputo", "Manuel Adorni", "Javier Milei", "Karina Milei"]}
    sources={[
        {
            label: 'Perfil',
            url: 'https://www.perfil.com/noticias/politica/guillermo-francos-critico-a-santiago-caputo-por-interrumpir-la-entrevista-de-jonatan-viale-a-milei-nadie-es-superpoderoso.phtml'
        },
        {
            label: 'Cronista',
            url: 'https://www.cronista.com/economia-politica/adorni-explico-por-que-santiago-caputo-interrumpio-la-entrevista-a-milei-tiene-el-defecto/#:~:text=el%20vocero%20Manuel%20Adorni%20dialog%C3%B3%20con%20A24%C2%A0y%20fue%20terminante%20al%20indicar%20que%20el%20accionar%20del%20consultor%20pol%C3%ADtico%20fue%20%22equivocado%22%20y%2C%20adem%C3%A1s%2C%20afirm%C3%B3%20que%20el%20propio%20Milei%20le%20dijo%20que%20fue%20%22innecesario%22.'
        }
    ]}
>
    <p class="timeline-item-p">
        El Jefe de Gabinete Guillermo Francos, que ya había tenido roces previos con Santiago Caputo, sostuvo que el asesor intervino en el reportaje “por una estupidez” y agregó que esto le servirá para darse cuenta de que “nadie es superpoderoso”.
    </p>
    <p class="timeline-item-p">
        En una entrevista con Radio Rivadavia, Francos detalló la reacción del presidente: “[Milei] se enojó [con Caputo], incluso sin saber que esa parte iba a salir al aire. Se enojó con Santiago Caputo porque le pareció una irresponsabilidad que, sin ningún acuerdo previo con el conductor del programa, interrumpiera. Pero además interrumpió para una estupidez, porque la verdad es que cuando uno mira la causa de la interrupción dice: ‘¿Cuál es el sentido?’”.
    </p>
    <p class="timeline-item-p">
        El jefe de Gabinete también reflexionó sobre el aprendizaje que debería extraer Caputo de este episodio: “De todas maneras me parece que también Santiago Caputo habrá aprendido una lección: que nadie es superpoderoso, que todas las cosas tienen sus límites. El Presidente se lo ha marcado y me parece importante”.
    </p>
    <p class="timeline-item-p">
        Francos consideró que la intervención de Caputo fue un error y mostró falta de criterio. Así se suma al vocero Manuel Adorni, quién dialogó con A24 y fue terminante al indicar que el accionar del consultor político fue "equivocado" y, además, afirmó que el propio Milei le dijo que fue "innecesario".
    </p>
</Event>