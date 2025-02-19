<script>
	import { Email, Reddit, LinkedIn, Telegram, WhatsApp, Facebook, X } from 'svelte-share-buttons-component';

	const url = 'https://milei-crypto-gate.vercel.app';
	const title = 'CryptoGate';
	const desc = 'La cronología de los eventos sobre el escándalo del token de Javier Milei, $LIBRA.';
</script>

<div>
    <Email subject="{title}" body="{desc} {url}" />
    <Reddit class="share-button" {title} {url} />
    <LinkedIn class="share-button" {url} />
    <Telegram class="share-button" text={title} {url} />
    <WhatsApp class="share-button" text="{title} {url}" />
    <Facebook class="share-button" quote="{title}" {url} />
    <X class="share-button" text="{title}" {url} hashtags="LIBRA,token,Milei,CryptoGate" via="username" related="other,users" />
</div>