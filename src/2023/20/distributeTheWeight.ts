export function distributeGifts(weights: (number | null)[][]): number[][] {
  const rows = weights.length;
  const cols = weights[0].length;
  const distributedGifts = Array.from({ length: rows }, () =>
    Array(cols).fill(0),
  );
  const DELTAS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentGift = weights[row][col];
      let sum = currentGift ?? 0;
      let count = currentGift !== null ? 1 : 0;
      for (const [deltaRow, deltaCol] of DELTAS) {
        const nextRow = row + deltaRow;
        const nextCol = col + deltaCol;
        const isValidRow = 0 <= nextRow && nextRow < rows;
        const isValidCol = 0 <= nextCol && nextCol < cols;
        if (isValidRow && isValidCol && weights[nextRow][nextCol] !== null) {
          sum += weights[nextRow][nextCol] ?? 0;
          count++;
        }
      }
      distributedGifts[row][col] = Math.round(sum / count);
    }
  }
  return distributedGifts;
}
