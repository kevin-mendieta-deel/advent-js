export function detectBombs(grid: boolean[][]): number[][] {
  const DELTAS = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  const rows = grid.length;
  const cols = grid[0].length;
  const result: number[][] = [];
  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
    for (let j = 0; j < cols; j++) {
      for (let k = 0; k < DELTAS.length; k++) {
        const [dx, dy] = DELTAS[k];
        const x = i + dx;
        const y = j + dy;
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          result[i][j] += grid[x][y] ? 1 : 0;
        }
      }
    }
  }

  return result;
}
