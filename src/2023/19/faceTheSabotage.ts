export function revealSabotage(store: string[][]): string[][] {
  const DELTAS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const rowsLength = store.length;
  const colsLength = store[0].length;

  for (let row = 0; row < rowsLength; row++) {
    for (let col = 0; col < colsLength; col++) {
      if (store[row][col] !== "*") continue;
      for (const [rowDelta, colDelta] of DELTAS) {
        const nextRow = row + rowDelta;
        const nextCol = col + colDelta;
        const isValidRow = nextRow >= 0 && nextRow < rowsLength;
        const isValidCol = nextCol >= 0 && nextCol < colsLength;
        if (isValidRow && isValidCol && store[nextRow][nextCol] !== "*") {
          store[nextRow][nextCol] = (+store[nextRow][nextCol] + 1).toString();
        }
      }
    }
  }

  return store;
}
