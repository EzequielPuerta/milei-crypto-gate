<script lang="ts">
	import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { injectAnalytics } from '@vercel/analytics/sveltekit'

    injectAnalytics();
</script>

<div>
    <Header/>
    <Sidebar/>
    <slot />
    <Footer/>
</div>
