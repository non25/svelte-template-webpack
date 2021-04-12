<script>
	import Button from './Button.svelte';

	let bright = false;
</script>

<div class="future" class:is-bright={bright}>Toggle me!</div>

<Button class="right" on:click={() => bright = !bright}>Toggle</Button>

<style module>
	.future {
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 2rem;
		color: #333;
		transition: color .2s ease;
	}

	.is-bright {
		color: hsl(0, 50%, 70%);
	}

	/* this should work ? */
	.right {
		margin-right: auto;
	}
</style>
