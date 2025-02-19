<script lang="ts">
    import * as config from '$lib/config'
    import { Navbar, NavBrand } from 'flowbite-svelte';
    import { Photo } from '../lib/components/Photo';
    import SocialButtons from '../lib/components/SocialButtons.svelte'
</script>

<Navbar fluid={true} class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/">
        <img src={Photo.JavierMilei} class="me-3 h-6 sm:h-9" alt="Milei" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{config.title}</span>
    </NavBrand>
    <SocialButtons />
</Navbar>
