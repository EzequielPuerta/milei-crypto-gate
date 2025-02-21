<script lang="ts">
    import MileiPhoto from '$lib/assets/images/milei.png';
    let backgroundImage: string = MileiPhoto;
</script>

<style>
    .hero {
        position: relative;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
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
        position: absolute;
        z-index: 2;
    }
</style>

<div class="hero" style="background-image: url({backgroundImage});">
    <div class="hero-content">
        <h1 class="text-4xl md:text-6xl font-bold">
            Crypto-Gate
        </h1>
        <p class="mt-4 text-lg md:text-xl">
            Todos los hechos vinculados con el escándalo del <em>token</em> llamado <strong>$LIBRA,</strong><br/>lanzado por Javier Milei el 14 de febrero del 2025, en orden cronológico
        </p>
    </div>
</div>