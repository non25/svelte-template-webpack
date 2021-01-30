<script>
	import { path, goto } from 'svelte-pathfinder';
	import OtherComponent, { prep } from './OtherComponent.svelte';
</script>

<button on:click={() => goto('/other')}>
	Go to other
</button>

{#if $path.pattern('/other')}
	<OtherComponent someprop={prep('lul')} />
{/if}
