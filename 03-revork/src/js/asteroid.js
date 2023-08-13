function generateAsteroidLocation() {
	const x = Math.floor(Math.random() * 101);
	const y = Math.floor(Math.random() * 101);
	const z = Math.floor(Math.random() * 101);
	return { x, y, z };
}

function calculateDistance(probeCoordinates, asteroidLocation) {
	const xDiff = Math.abs(probeCoordinates.x - asteroidLocation.x);
	const yDiff = Math.abs(probeCoordinates.y - asteroidLocation.y);
	const zDiff = Math.abs(probeCoordinates.z - asteroidLocation.z);
	const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2 + zDiff ** 2);
	return distance;
}

export function findAsteroidLocation(probeCoordinatesList) {
	const asteroidLocation = generateAsteroidLocation();
	let minDistance = Infinity;
	let minDistanceProbes = [];

	for (const probeCoordinates of probeCoordinatesList) {
		const distance = calculateDistance(probeCoordinates, asteroidLocation);

		if (distance < minDistance) {
			minDistance = distance;
			minDistanceProbes = [{ ...probeCoordinates }];
		} else if (distance === minDistance) {
			minDistanceProbes.push({ ...probeCoordinates });
		}
	}

	let objResult = {
		result: {
			location: { ...asteroidLocation },
			probes: {
				count: minDistanceProbes.length,
				coordinates: minDistanceProbes,
			},
		},
	};

	renderResult(objResult);
}

function renderResult(obj) {
	const resultBlock = document.getElementById('result');
	resultBlock.textContent = `\nУВАГА! АСТЕРОЇД ЗНАЙДЕНО!\n\nДАЮ КООРДИНАТИ : ${JSON.stringify(
		obj.result.location,
	)} . Для знаходження астероїда знадобится лише ${
		obj.result.probes.count
	} зонд(-ів).\n\n🚀 Зонд ефективніше усього буде активувати у секторі ${JSON.stringify(
		obj.result.probes.coordinates,
	)}`;
}
