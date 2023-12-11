export function decode(message: string): string {
	const stack: number[] = [];
	const charList = [...message];
	for (let index = 0; index < message.length; index++) {
		const character = message[index];
		if (character === "(") {
			stack.push(index + 1);
			continue;
		}
		if (character === ")") {
			const start = stack.pop();
			if (!start) continue;

			const reversed = charList.slice(start, index).reverse();
			charList.splice(start, reversed.length, ...reversed);
		}
	}
	return charList.join("").replaceAll("(", "").replaceAll(")", "");
}
