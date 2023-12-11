export function findFirstRepeated(gifts: number[]): number {
	const memory = new Set<number>();
	for (const id of gifts) {
		if (memory.has(id)) return id;
		memory.add(id);
	}
	return -1;
}
