export function maxGifts(houses: number[]): number {
  const sums = [0, houses[0]];
  for (let index = 1; index < houses.length; index++) {
    const currentNum = houses[index];
    const maxSum = Math.max(currentNum + sums[index - 1], sums[index]);
    sums.push(maxSum);
  }
  return sums[houses.length];
}
