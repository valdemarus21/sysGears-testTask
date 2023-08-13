export function handleAddBlockButtonClick() {
	const inputBlock = document.querySelector('.query-block__inputs');
	const clonedBlock = inputBlock.cloneNode(true);

	const clonedButton = clonedBlock.querySelector('.query-block__input-btn');
	if (clonedButton) {
		clonedButton.remove();
	}

	document.querySelector('.query-block__inputs-container').appendChild(clonedBlock);
}
