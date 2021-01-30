<script>
	import { path } from 'svelte-pathfinder';
	import { name } from './store.js';
	import { adjust } from './helpers.js';
</script>

<main>
	<h1>Hello {adjust($name)}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={() => $path = '/'}>Go back</button>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: $margin;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: pxrem(64);
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
