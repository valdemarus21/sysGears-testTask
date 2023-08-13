
import { conversionRules } from './repositories/data.js';
import { displayConversionList } from './conversionListModule.js';
import { convertDistance } from './conversionModule.js';

document.addEventListener('DOMContentLoaded', function () {
	displayConversionList(conversionRules);

	const convertButton = document.getElementById('convertButton');
	convertButton.addEventListener('click', function () {
		convertDistance(conversionRules);
	});
});
