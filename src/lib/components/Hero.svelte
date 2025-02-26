<script lang="ts">
    import MileiPhoto from '$lib/assets/images/milei.png';
    let backgroundImage: string = MileiPhoto;
</script>

<style>
    .hero {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
        overflow: hidden;
    }

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .hero-content {
        position: relative;
        z-index: 2;
    }

    @media only screen and (max-width: 640px) {
        #main-title {
            font-size: xx-large;
        }

        #subtitle {
            padding-left: 3em;
            padding-right: 3em;
            font-size: medium;
        }
    }
</style>

<div class="hero" style="background-image: url({backgroundImage});">
    <div class="hero-content">
        <h1 id="main-title" class="text-4xl md:text-6xl font-bold">
            Crypto-Gate
        </h1>
        <p id="subtitle" class="mt-4 text-lg md:text-xl">
            Todos los hechos vinculados con el escándalo del <em>token</em> <strong>$LIBRA,</strong><br/>lanzado por Javier Milei el 14 de febrero del 2025, en orden cronológico
        </p>
    </div>
</div>