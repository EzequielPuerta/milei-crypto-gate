<script lang="ts">
    import * as config from '$lib/config'
    import { Navbar, NavBrand } from 'flowbite-svelte';
    import { Photo } from '../lib/components/Photo';
</script>

<Navbar fluid={true}>
    <NavBrand href="/">
        <img src={Photo.JavierMilei} class="me-3 h-6 sm:h-9" alt="Milei" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{config.title}</span>
    </NavBrand>
</Navbar>
