<script>
	import { blue } from './style.module.css';
	import Button from './Button.svelte';

	let bright = false;
</script>

<div class={blue}>Testing static external class</div>
<div class:blue={bright}>Testing external class in directive</div>
<div class={bright ? blue : ''}>Testing external class in ternary</div>

<div class="future" class:is-bright={bright}>Toggle me!</div>

<Button class="right" on:click={() => bright = !bright}>Toggle</Button>

<style lang="scss" module>
	$red: hsl(0, 50%, 70%);

	.future {
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 2rem;
		color: #333;
		transition: color .2s ease;
	}

	.is-bright {
		color: $red;
	}

	/* this should work ? */
	.right {
		margin-right: auto;
	}
</style>
