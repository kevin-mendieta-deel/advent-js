export function autonomousDrive(
  store: string[],
  movements: string[],
): string[] {
  let robotCoords: undefined | [number, number];
  for (const [row, currentRow] of store.entries()) {
    const col = currentRow.indexOf("!");
    if (col !== -1) {
      robotCoords = [row, col];
      break;
    }
  }
  if (!robotCoords) return store;

  const DELTAS = new Map([
    ["U", [-1, 0]],
    ["D", [1, 0]],
    ["R", [0, 1]],
    ["L", [0, -1]],
  ]);
  const finalRobotCoords = [...robotCoords];
  for (const movement of movements) {
    const [currentRow, currentCol] = finalRobotCoords;
    const [rowDelta, colDelta] = DELTAS.get(movement) ?? [0, 0];
    const newRow = currentRow + rowDelta;
    const newCol = currentCol + colDelta;
    const isValidRow = newRow >= 0 && newRow < store.length;
    const isValidCol = newCol >= 0 && newCol < store[0].length;

    if (isValidRow && isValidCol && store[newRow][newCol] !== "*") {
      finalRobotCoords[0] = newRow;
      finalRobotCoords[1] = newCol;
    }
  }

  const [initialRow, initialCol] = robotCoords;
  const [finalRow, finalCol] = finalRobotCoords;
  if (initialRow === finalRow && initialCol === finalCol) return store;

  const storeClone = store.map((row) => [...row]);
  storeClone[initialRow][initialCol] = ".";
  storeClone[finalRow][finalCol] = "!";
  return storeClone.map((row) => row.join(""));
}
