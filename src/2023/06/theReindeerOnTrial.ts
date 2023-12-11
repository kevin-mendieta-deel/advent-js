export function maxDistance(movements: string): number {
	let distance = 0;
	let direction = "";
	for (const character of movements) {
		if (character === "*") {
			distance++;
			continue;
		}
		if (direction === "") {
			direction = character;
		}

		character === direction ? distance++ : distance--;
	}
	return distance;
}
