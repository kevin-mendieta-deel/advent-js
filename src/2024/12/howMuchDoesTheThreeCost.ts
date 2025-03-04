export function calculatePrice(ornaments: string): number | undefined {
  const values = new Map<string, number>([
    ["*", 1],
    ["o", 5],
    ["^", 10],
    ["#", 50],
    ["@", 100],
  ]);

  let sum = 0;
  for (let index = 0; index < ornaments.length - 1; index++) {
    const ornament = ornaments[index];
    const value = values.get(ornament);
    const nextOrnament = ornaments[index + 1];
    const nextValue = values.get(nextOrnament);
    if (!value || !nextValue) return undefined;
    const sumValue = value < nextValue ? -value : value;
    sum += sumValue;
  }

  const lastOrnament = ornaments.at(-1) ?? "";
  const lastValue = values.get(lastOrnament) ?? 0;

  return sum + lastValue;
}
