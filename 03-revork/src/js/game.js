import { startBtn } from "./main.js";
import { stopBtn } from "./main.js";
import { setError } from "./error.js";
export let isGameStopped = false;

export function startGame() {
	const allInputs = document.querySelectorAll('.query-block__inputs');
	for (let input of allInputs) {
		input.style.opacity = '1';
		input.style.pointerEvents = 'all';
	}
	startBtn.style.pointerEvents = 'none';
	startBtn.style.opacity = '0.5';
	stopBtn.style.opacity = '1';
	stopBtn.style.pointerEvents = 'all';
}

export function clearInputs() {
	const inputs = document.querySelectorAll('.query-block__input');
	for (let input of inputs) {
		input.value = '';
	}
}

export function stopGame() {
	isGameStopped = true;

	const allInputs = document.querySelectorAll('.query-block__inputs');
	for (let i = 1; i < allInputs.length; i++) {
		allInputs[i].remove();
	}

	for (let input of allInputs) {
		input.style.opacity = '0.5';
		input.style.pointerEvents = 'none';
	}
	startBtn.style.opacity = '1';
	startBtn.style.pointerEvents = 'all';
	stopBtn.style.opacity = '0.5';
	stopBtn.style.pointerEvents = 'none';
	clearInputs();
}

export function validateInputValue(value) {
	switch (true) {
		case value === '':
			stopGame();
			setError('потрібно передати число, а не пустий рядок');
			return false;
		case !Number.isInteger(Number(value)):
			stopGame();
			setError('це число не є цілим');
			return false;
		case Number(value) > 100:
			stopGame();
			setError('число не має бути більше 100');
			return false;
		case Number.isNaN(Number(value)) || !Number.isFinite(Number(value)):
			stopGame();
			setError(value);
			return false;
		default:
			return true;
	}
}
