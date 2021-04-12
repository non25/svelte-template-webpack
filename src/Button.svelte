<button class="btn {$$restProps.class || ''}" on:click><slot /></button>

<style module>
	.btn {
		border-radius: 4px;
		padding: 5px 10px;
		background-color: hsl(220, 50%, 70%);
		color: hsl(220, 50%, 95%);
		border: 2px solid transparent;
	}

	.btn:hover, .btn:not(disabled):active {
		background-color: hsl(220, 50%, 65%);
		color: hsl(220, 50%, 100%);
	}

	.btn:focus {
		border-color: hsl(220, 50%, 60%);
	}

	.btn:not(disabled):active {
		transform: translateY(1px);
	}
</style>
