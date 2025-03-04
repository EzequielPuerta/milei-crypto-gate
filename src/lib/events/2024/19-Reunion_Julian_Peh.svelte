<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import ClickableImage from '$lib/components/ClickableImage.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Reunión de Julián Peh con Javier Milei post Tech Forum"
    date="19 de octubre, 2024"
    avatar={CustomAvatar.JulianPeh}
    parties={["Javier Milei", "Julián Peh", "Mauricio Novelli", "Manuel Adorni", "Bartosz Lipinski"]}
    sources={[
        {
            label: 'El Destape',
            url: 'https://www.eldestapeweb.com/politica/escandalo-cripto/los-accesos-a-la-rosada-y-olivos-del-hombre-que-conecta-al-gobierno-con-la-estafa-cripto-reuniones-con-karina-y-visita-a-milei-2025215191250#:~:text=reuniones%20sean%20m%C3%A1s.-,Tech%20Forum,tiene%20una%20pr%C3%B3xima%20convocatoria%20del%203%20al%205%20de%20abril%20pr%C3%B3ximos.,-Milei%20fue%20el'
        },
        {
            label: 'La Nación',
            url: 'https://www.lanacion.com.ar/politica/quien-es-julian-peh-el-ceo-de-la-empresa-detras-de-la-memecoin-libra-que-promovio-javier-milei-nid15022025/'
        },
        {
            label: 'Infobae',
            url: 'https://www.infobae.com/politica/2025/02/19/quienes-son-mauricio-novelli-y-manuel-terrones-godoy-los-jovenes-empresarios-involucrados-en-el-caso-libra/#:~:text=Pero%20sus%20visitas%20habr%C3%ADan%20sido%20al%20menos%209%2C%20seg%C3%BAn%20public%C3%B3%20el%20diario%20La%20Naci%C3%B3n%2C%20m%C3%A1s%20otras%20tres%20a%20la%20Residencia%20de%20Olivos.%20Esto%20significa%20que%20se%20reuni%C3%B3n%20con%20Milei%20o%20su%20hermana%20en%2C%20por%20lo%20menos%2C%20doce%20oportunidades%20a%20lo%20largo%20del%20a%C3%B1o%3A%20en%20enero%2C%20abril%2C%20junio%2C%20julio%2C%20agosto%2C%20septiembre%2C%20octubre%20y%20noviembre.'
        },
        {
            label: 'Wired',
            url: 'https://es.wired.com/articulos/no-solo-es-milei-estas-figuras-publicas-tambien-han-sido-implicadas-en-el-escandalo-dollarlibra#:~:text=posible%20esquema%20piramidal.-,Julian%20Peh,liquidez%2C%20dejando%20a%20los%20inversores%20sin%20posibilidad%20de%20recuperar%20sus%20fondos.,-Hayden%20Mark%20Davis'
        }
    ]}
>
    <p class="timeline-item-p">
        En ese marco fue que se reunió con Julián Peh, empresario de Singapur y CEO de Kit Protocol, la firma detrás de esta estafa virtual. Peh es un empresario tecnológico singapurense con más de dos décadas de experiencia en el sector. Fundó Kip Network Inc. en 2019 y, según su sitio web, ha participado en cuatro salidas exitosas a la bolsa. Se especializa en fusiones, adquisiciones y tecnologías Web3 desde 2016.
    </p>
    <p class="timeline-item-p">
        El periodista Agustín Giménez ha señalado que Kip Network Inc. estuvo involucrada en la emisión de una criptomoneda en la República Centroafricana, cuyo valor fue inflado artificialmente antes de retirar la liquidez, dejando a los inversores sin posibilidad de recuperar sus fondos.
    </p>

    <p class="timeline-item-p">
        La reunión de Milei con Peh fue el 19 de octubre de 2024. La juntada, según el registro de audiencias oficial del Ministerio del Interior, fue en el Hotel Libertador. Es extraño: Milei ya era presidente pero eligió juntarse con Peh en el hotel que fue su morada entre que ganó las elecciones y se mudó a la quinta de Olivos. Y más extraño es que lo pusieran en el registro de audiencias público, que sólo contiene las que se producen en las oficinas públicas.
    </p>

    <Tweet tweet={data.Milei_Peh_20_10_2024} />

    <p class="timeline-item-p">
        Hubo foto grupal en el Tech Forum. Milei en el centro; hacia la derecha, con anteojos, Julian Peh; más a la derecha, en la punta, Mauricio Novelli.
    </p>

    <Tweet tweet={data.Grupal_Tech_Forum_20_10_2024} />

    <p class="timeline-item-p">
        Del encuentro privado de Milei con Peh participaron el vocero presidencial Manuel Adorni y Novelli. Según la información oficial: “Analizaron cómo la tecnología de IA descentralizada de KIP puede respaldar a Argentina”. “El presidente Milei expresó un fuerte apoyo a estas innovaciones e iniciativas, posicionando a KIP como un actor fundamental en la transformación tecnológica de Argentina. Este compromiso de alto nivel coloca a $KIP en el centro de atención como un actor clave de IA en Latinoamérica”, sostuvo Julian Peh tras el encuentro con Milei.
    </p>

    <ClickableImage
        src="https://www.infobae.com/resizer/v2/UFTFCI5NGRAH3KWIQBJWKN2J6U.png?auth=f6de3541f6a1023267da39abf25484498c5711087cb206f696096a871fd4b206&smart=true&width=1200&height=800&quality=85"
        alt="Tres de las visitas de Novelli a la Casa Rosada en septiembre y octubre de 2024, con Milei en la Presidencia"
    />
</Event>