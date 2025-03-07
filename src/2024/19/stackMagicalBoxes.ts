export function distributeWeight(weight: number): string {
  const BOXES = new Map([
    [1, [" _ ", "|_|"]],
    [2, [" ___ ", "|___|"]],
    [5, [" _____ ", "|     |", "|_____|"]],
    [10, [" _________ ", "|         |", "|_________|"]],
  ]);
  const DIVS = [10, 5, 2, 1];

  const stackOfBoxes = [];
  let finalWeight = weight;
  for (const divisor of DIVS) {
    const boxesFactor = Math.floor(finalWeight / divisor);
    if (boxesFactor > 0) {
      for (let i = 0; i < boxesFactor; i++) {
        stackOfBoxes.push(BOXES.get(divisor));
      }
      finalWeight = finalWeight % divisor;
    }
  }

  const boxesRepresentation: string[] = [];
  while (stackOfBoxes.length > 0) {
    const box = stackOfBoxes.pop();
    if (!box) break;

    for (let index = 0; index < box.length; index++) {
      const line = box[index];
      if (index === 0 && boxesRepresentation.length > 0) {
        const lastIndex = boxesRepresentation.length - 1;
        const lastLine = boxesRepresentation[lastIndex];
        boxesRepresentation[lastIndex] =
          lastLine + line.slice(lastLine.length).trim();
        continue;
      }
      boxesRepresentation.push(`${line}`);
    }
  }

  return boxesRepresentation.join("\n");
}
