<script>
	import { path, goto } from 'svelte-pathfinder';
	import OtherComponent from './OtherComponent.svelte';

	$: console.log($path);
</script>

<button on:click={() => goto('/other')}>
	Go to other
</button>

{#if $path.pattern('/other')}
	<OtherComponent />
{/if}
