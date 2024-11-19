export function createMagicPotion(
  potions: number[],
  target: number,
): number[] | undefined {
  const combinations: Record<string, number[]> = {};
  for (let i = 0; i < potions.length - 1; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      const totalPower = potions[i] + potions[j];
      const difference = Math.abs(i - j);
      if (target - totalPower === 0) {
        if (!combinations[difference]) {
          combinations[difference] = [i, j];
        }
      }
    }
  }
  const closestCombinationIndex: string | undefined =
    Object.keys(combinations)[0];
  return closestCombinationIndex
    ? combinations[closestCombinationIndex]
    : undefined;
}
