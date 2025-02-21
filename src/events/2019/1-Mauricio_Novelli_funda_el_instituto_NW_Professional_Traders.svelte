<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';

    // export let data;
</script>

<Event
    title="Mauricio Novelli funda el instituto N&W Professional Traders"
    date="2019"
    avatar={CustomAvatar.MauricioNovelli}
    parties={["Mauricio Novelli", "Jeremías Walsh"]}
    sources={[
        {
            label: 'Clarín',
            url: 'https://www.clarin.com/politica/escandalo-cripto-empresario-acerco-milei-vinculado-fraudes-millonarios_0_QzbQWTVIvj.html?srsltid=AfmBOorUv4ZmfcfgdH3dvjFqnHfRP3vlrvQIg6xoWmqvDj0p51lVhGzJ#:~:text=accedi%C3%B3%20Clar%C3%ADn.-,Novelli%20fue%20empleado%20de%20Arrayanes%20Capital%20SA%20y%20Cr%C3%A9ditos%20Al%20R%C3%ADo,gan%C3%B3%20la%20confianza%20de%20los%20Milei%20en%20los%20%C3%BAltimos%20a%C3%B1os.,-%C3%89l%20oculta%20en'
        },
        {
            label: 'LinkedIn de N&W',
            url: 'https://www.linkedin.com/company/nwprofessionaltraders/about/#:~:text=Fundaci%C3%B3n,2019'
        }
    ]}
>
    <p class="timeline-item-p">
        <strong>Mauricio Gaspar Novelli</strong>, 29 años, licenciado en comercialización, fue empleado de Arrayanes Capital SA y Créditos Al Río. La estafa millonaria en la que esas firmas tuvieron un rol crucial se conoció en público como <strong>caso Wenance</strong>. A pesar de haber tenido puestos en esas dos firmas creadas para el engaño, Novelli se reinventó.
    </p>
    <p class="timeline-item-p">
        Junto con otro trader, <strong>Jeremías Walsh</strong>, fundaron el instituto en el que ofrecían clases para novatos en el arte de la operatoria financiera a un solo click.
    </p>
</Event>