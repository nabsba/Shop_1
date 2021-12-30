const onPressEntry = (
	event: React.KeyboardEvent,
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	myFunction: any,
): void => {
	const enterOrSpace = event.key === 'Enter' || event.key === 'Spacebar';
	if (enterOrSpace) {
		myFunction;
	}
};

export { onPressEntry };
