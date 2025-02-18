<script lang="ts">
    import * as config from '$lib/config'
    import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
</script>
 
<Footer>
    <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by={config.title} year={2025} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <FooterLink href="/">Acerca de</FooterLink>
        <FooterLink href="/">Contacto</FooterLink>
    </FooterLinkGroup>
    </div>
</Footer>
