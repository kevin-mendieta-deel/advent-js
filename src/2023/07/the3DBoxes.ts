export function drawGift(size: number, symbol: string): string {
	if (size <= 1) return "#\n";
	const gift = [`${" ".repeat(size - 1)}${"#".repeat(size)}\n`];
	for (let index = 2; index < size; index++) {
		const padding = " ".repeat(size - index);
		gift.push(
			`${padding}#${symbol.repeat(size - 2)}#${symbol.repeat(index - 2)}#\n`,
		);
	}
	const reversed = [...gift]
		.map((str) => {
			return str.replaceAll(" ", "");
		})
		.reverse();
	gift.push(`${"#".repeat(size)}${symbol.repeat(size - 2)}#\n`);
	gift.push(...reversed);
	return gift.join("");
}
