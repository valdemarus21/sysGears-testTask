import { stopGame, clearInputs } from './game.js';

export function setError(errorParam) {
	clearInputs();
	stopGame();
	const errorDisplayBlock = document.querySelector('.query-block__error-display');
	errorDisplayBlock.style.display = 'block';
	const errorDisplayElem = document.querySelector('.query-block__error-display-text');
	errorDisplayElem.textContent = `Виникла помилка під час вводу координат : ${errorParam}. Спробуйте ще раз`;
	const errorButtonElem = document.querySelector('.query-block__error-display-bnt-close');
	errorButtonElem.addEventListener('click', () => {
		errorDisplayBlock.style.display = 'none';
	});
}
