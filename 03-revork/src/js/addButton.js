import { validateInputValue } from './game.js';
import { findAsteroidLocation } from './asteroid.js';

export function handleAddButtonClick() {
	const inputBlocks = document.querySelectorAll('.query-block__inputs');

	const probeCoordinatesList = Array.from(inputBlocks)
		.map((inputBlock) => {
			const inputElements = inputBlock.querySelectorAll('.query-block__input');
			const values = Array.from(inputElements).map((input) => input.value);
			const isValid = values.every((value) => validateInputValue(value));
			if (!isValid) {
				return null;
			} else {
				const [firstInput, secondInput, thirdInput] = values;
				return { x: firstInput, y: secondInput, z: thirdInput };
			}
		})
		.filter((coordinates) => coordinates !== null);

	findAsteroidLocation(probeCoordinatesList);
}
