export function compile(instructions: string[]): number | undefined {
  let index = 0;
  const memory = new Map<string, number | undefined>();
  while (index < instructions.length) {
    const instruction = instructions[index];
    const [command, x, y] = instruction.split(" ");
    const xValue = memory.get(x) ?? 0;
    index++;
    if (command === "MOV") {
      const isNumeric = !Number.isNaN(Number(x));
      if (isNumeric) {
        memory.set(y, Number(x));
      } else {
        memory.set(y, xValue);
      }
      continue;
    }
    if (command === "INC") {
      memory.set(x, xValue + 1);
      continue;
    }
    if (command === "DEC") {
      memory.set(x, xValue - 1);
      continue;
    }
    if (command === "JMP" && xValue === 0) {
      index = Number(y);
    }
  }
  return memory.get("A");
}
