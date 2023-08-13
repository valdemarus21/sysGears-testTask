/**
 * app.js - Головний модуль додатка для сортування та відбору даних за визначеними правилами.
 */

// Імпорт модуля dataProcessor.js
import dataProcessor from './dataProcessor.js';

// Очікування завантаження DOM-структури
document.addEventListener('DOMContentLoaded', function () {
	try {
		// Отримання елементів DOM
		const resultBtn = document.getElementById('sort');
		const textarea = document.getElementById('textarea');
		const response = document.getElementById('response');
		const clearBtn = document.getElementById('clear');
		const attentionBtn = document.querySelector('.close__attention');

		// Обробник події натискання кнопки "Sort"
		resultBtn.addEventListener('click', () => {
			// Отримання введених даних з текстового поля та їх серіалізація
			const inputData = textarea.value;
			const serializedInputData = JSON.parse(inputData);

			// Обробка та сортування даних за визначеними правилами
			const resultData = {
				result: dataProcessor.sortByKey(
					dataProcessor.filterData(serializedInputData.data, serializedInputData.condition.exclude),
					serializedInputData.condition.sortBy,
				),
			};

			// Відображення результату
			response.textContent = JSON.stringify(resultData);
		});

		// Обробник події натискання кнопки "Clear"
		clearBtn.addEventListener('click', () => {
			// Очищення вмісту текстового поля
			textarea.value = '';
		});

		// Обробник події натискання кнопки "Close Attention"
		attentionBtn.addEventListener('click', () => {
			// Приховання блоку з повідомленням
			document.querySelector('.sorting-box__attention').style.display = 'none';
		});
	} catch (error) {
		console.error(error);
	}
});
