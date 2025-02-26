<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="El video en el que Patricia Bullrich promocionaba una criptomoneda como solución a la inflación"
    date="25 de febrero, 2025"
    avatar={CustomAvatar.PatriciaBullrich}
    parties={["Patricia Bullrich"]}
    sources={[
        {
            label: 'Página12',
            url: 'https://www.pagina12.com.ar/806321-el-video-en-el-que-patricia-bullrich-promocionaba-una-cripto'
        }
    ]}
>
    <p class="timeline-item-p">
        En 2022, la actual ministra de Seguridad estaba de visita en San Francisco y conoció la sede de la fundación Stellar. Desde esas oficinas grabó un video y aseguró que la criptomoneda podía ayudar a la economía argentina. En aquel momento, Bullrich era presidenta del PRO y tenía claras aspiraciones presidenciales.
    </p>
    <p class="timeline-item-p">
        El video, publicado en X el 4 de abril de 2022, estuvo acompañado de un texto que decía: "Hay nuevas formas de combatir la inflación. Por ejemplo, con un modelo digital de moneda estable como el que propone Stellar, una ONG que visité en San Francisco. En el video te explico cómo se puede implementar para recuperar el valor del salario y vivir con estabilidad". 
    </p>
    <p class="timeline-item-p">
        Ya en el video, la entonces presidenta del PRO expresó: "Estoy en la fundación Stellar, aquí en San Francisco. Es impresionante lo que hacen. Tienen un sistema en el que vos podés tener tu plate en un sistema digital. Y esa plata es contra una moneda estable, lo que te permite que luches contra la inflación que tenemos en la Argentina".
    </p>
    <p class="timeline-item-p">
        Pese a la fe que depositó Bullrich en el proyecto, el precio de Stellar Lumens no logró sostener la estabilidad prometida luego de la promoción de la dirigente argentina. Al momento de la publicación del video, su valor rondaba los 0,20 dólares, de acuerdo a los datos de la plataforma CoinMarketCap. Para finales del año, la criptomoneda se había desplomado entre un 60% y un 70%, llegando a mínimos cercanos a los 0,07 dólares.
    </p>
    <p class="timeline-item-p">
        Sin embargo, es necesario marcar algunas diferencias respecto a la estrepitosa caída de $LIBRA. A diferencia de la cripto difundida por el presidente, supuestamente creada para financiar pequeñas empresas argentinas, Stellar no es una "shitcoin", término usado para proyectos cripto fraudulentos o sin valor. Se trata de un proyecto establecido con una red operativa y asociaciones con empresas como IBM, que la utilizan para su plataforma de pagos World Wire.
    </p>
    <Tweet tweet={data.Bullrich_Stellar_25_02_2025} />
</Event>