<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Horacio Rodríguez Larreta salió a contestarle a Javier Milei y adelantó que lo denunciará"
    date="19 de febrero, 2025"
    avatar={CustomAvatar.HoracioRodriguezLarreta}
    parties={["Horacio Rodriguez Larreta", "Javier Milei", "Jonatan Viale"]}
    sources={[
        {
            label: 'Ámbito',
            url: 'https://www.ambito.com/politica/horacio-rodriguez-larreta-salio-cruzar-javier-milei-nos-vemos-tribunales-n6115394'
        }
    ]}
>
    <p class="timeline-item-p">
        El exjefe de Gobierno porteño, Horacio Rodríguez Larreta, le contestó este miércoles al presidente Javier Milei, quien lo acusó de presuntos sobornos a periodistas. Pidió que el Congreso lo investigue por el escándalo cripto y le anticipó que lo demandará por las acusaciones: "Nos vemos en Tribunales".
    </p>
    <p class="timeline-item-p">
        El exjefe de Gobierno porteño recordó los insultos y acusaciones que el líder libertario le propina desde hace años, incluso desde antes de asumir como diputado nacional en 2021. Esta vez no sólo decidió contestar, sino presentar una demanda judicial por las graves acusaciones de supuestos sobornos a periodistas que hiciera Jonatan Viale, a la que se sumó Javier Milei.
    </p>
    <p class="timeline-item-p">
        "Quiero que se investigue a fondo. A diferencia tuya, no tengo nada que esconder", aseguró Rodríguez Larreta. Después subió la apuesta y pidió que "el Congreso se ponga firme y te investigue por la estafa de $Libra. Y que la Justicia los investigue a vos y a tu hermana por 'difundir' negocios truchos".
    </p>

    <Tweet tweet={data.Descargo_Larreta_19_02_2025} />
</Event>