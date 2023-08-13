/**
 * dataProcessor.js - Модуль для обробки даних, сортування та відбору.
 */

const dataProcessor = {
	/**
	 * Фільтрує дані за заданими умовами.
	 * @param {Array} data - Масив даних для фільтрації.
	 * @param {Object} condition - Об'єкт, що містить умови фільтрації.
	 * @returns {Array} - Відфільтрований масив даних.
	 */
	filterData(data, condition) {
		let filteredData = [...data];
		for (const rule in condition) {
			if (rule === 'exclude') {
				const excludeRules = condition[rule];
				filteredData = this.excludeData(filteredData, excludeRules);
			} else if (rule === 'include') {
				const includeRules = condition[rule];
				filteredData = this.includeData(filteredData, includeRules);
			}
		}
		return filteredData;
	},

	/**
	 * Виключає дані, що відповідають заданим правилам.
	 * @param {Array} data - Масив даних для фільтрації.
	 * @param {Array} excludeRules - Масив правил виключення.
	 * @returns {Array} - Відфільтрований масив даних.
	 */
	excludeData(data, excludeRules) {
		return data.filter((item) => {
			for (const rule of excludeRules) {
				const [key, value] = Object.entries(rule)[0];
				if (item.hasOwnProperty(key) && item[key] === value) {
					return false;
				}
			}
			return true;
		});
	},

	/**
	 * Включає лише дані, що відповідають заданим правилам.
	 * @param {Array} data - Масив даних для фільтрації.
	 * @param {Array} includeRules - Масив правил включення.
	 * @returns {Array} - Відфільтрований масив даних.
	 */
	includeData(data, includeRules) {
		return data.filter((item) => {
			for (const rule of includeRules) {
				const [key, value] = Object.entries(rule)[0];
				if (item.hasOwnProperty(key) && item[key] !== value) {
					return false;
				}
			}
			return true;
		});
	},

	/**
	 * Сортує дані за заданими ключами.
	 * @param {Array} data - Масив даних для сортування.
	 * @param {Array} keys - Масив ключів для сортування.
	 * @returns {Array} - Відсортований масив даних.
	 */
	sortByKey(data, keys) {
		return data.sort((a, b) => {
			for (const key of keys) {
				if (a[key] < b[key]) {
					return -1;
				} else if (a[key] > b[key]) {
					return 1;
				}
			}
			return 0;
		});
	},
};

export default dataProcessor;
