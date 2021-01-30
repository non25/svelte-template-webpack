import { writable } from 'svelte/store';

export const name = writable('world', (set) => {
	setTimeout(() => {
		set('help pls');
	}, 5000);
});
