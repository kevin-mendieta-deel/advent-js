export function findNaughtyStep(original: string, modified: string): string {
	if (original === modified) return "";

	const hasAddition = modified.length > original.length;
	let index = 0;
	for (index; index < original.length; index++) {
		if (original[index] !== modified[index]) {
			return hasAddition ? modified[index] : original[index];
		}
	}

	return modified[index];
}
