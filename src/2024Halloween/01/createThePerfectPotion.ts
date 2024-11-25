export function createMagicPotion(
  potions: number[],
  target: number,
): number[] | undefined {
  const combinations = new Map<number, number>();
  for (let i = 0; i < potions.length; i++) {
    const potion = potions[i];
    const difference = target - potion;
    const combinationDifference = combinations.get(difference);
    if (combinationDifference !== undefined) {
      return [combinationDifference, i];
    }
    if (combinationDifference === undefined) {
      combinations.set(potion, i);
    }
  }
  return undefined;
}
