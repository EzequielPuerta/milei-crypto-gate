<script lang="ts">
    import * as config from '$lib/config'
    import { Footer, FooterCopyright } from 'flowbite-svelte';
</script>
 
<Footer>
    <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by={config.title} year={2025} />
    </div>
</Footer>
