// conversionModule.js
export function convertDistance(conversionRules) {
	const fromUnitInput = document.getElementById('fromUnit');
	const valueInput = document.getElementById('value');
	const convertToInput = document.getElementById('convertTo');
	const resultElement = document.getElementById('result');

	const fromUnit = fromUnitInput.value;
	const value = parseFloat(valueInput.value);
	const convertTo = convertToInput.value;

	if (
		!conversionRules.conversions.hasOwnProperty(fromUnit) ||
		!conversionRules.conversions[fromUnit].hasOwnProperty(convertTo)
	) {
		resultElement.textContent = 'Неприпустимі одиниці виміру';
		return;
	}

	const conversionFactor = conversionRules.conversions[fromUnit][convertTo];
	const convertedValue = value * conversionFactor;

	resultElement.textContent = `Отримане значення: ${convertedValue.toFixed(2)} ${convertTo}`;
}
