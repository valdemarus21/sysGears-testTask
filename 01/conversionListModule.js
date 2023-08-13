// conversionListModule.js
export function displayConversionList(conversionRules) {
	const conversionList = document.getElementById('conversionList');

	function createListItem(textContent) {
		const listItem = document.createElement('li');
		listItem.textContent = textContent;
		return listItem;
	}

	function createNestedList() {
		const nestedList = document.createElement('ul');
		nestedList.classList.add('nested');
		return nestedList;
	}

	function addToggleEvent(listItem) {
		listItem.addEventListener('click', function () {
			this.querySelector('.nested').classList.toggle('active');
		});
	}

	for (const unit in conversionRules.conversions) {
		const listItem = createListItem(unit);
		const nestedList = createNestedList();

		for (const targetUnit in conversionRules.conversions[unit]) {
			const unitItem = createListItem(targetUnit);
			nestedList.appendChild(unitItem);
		}

		listItem.appendChild(nestedList);
		conversionList.appendChild(listItem);

		addToggleEvent(listItem);
	}
}
