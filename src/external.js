setTimeout(() => {
	app.toggle();
	console.log('toggled!');

	setTimeout(() => {
		app.$set({ toggled: false });
		console.log('toggled again!');
	}, 1000);
}, 1000);
