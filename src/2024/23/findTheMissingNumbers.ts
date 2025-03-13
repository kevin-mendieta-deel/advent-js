export function findMissingNumbers(nums: number[]): number[] {
  const existingNumbers = new Set<number>(nums);
  const max = Math.max(...nums);

  const missingNumbers = [];
  for (let i = 1; i <= max; i++) {
    if (!existingNumbers.has(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}
