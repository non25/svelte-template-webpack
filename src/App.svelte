<script>
	export function toggle() {
		toggled = !toggled;
	}

	export let toggled = false;
</script>

<div>{toggled ? 'true' : 'false'}</div>
