type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

export function moveTrain(board: Board, mov: Movement): Result {
  const deltas = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  } as const;
  const mappings = {
    o: "crash",
    "*": "eat",
    "·": "none",
  } as const;
  const delta = deltas[mov];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[i][j];
      if (cell !== "@") {
        continue;
      }
      const [row, col] = delta;
      const newRow = i + row;
      const newCol = j + col;
      if (
        newRow < 0 ||
        newRow >= board.length ||
        newCol < 0 ||
        newCol >= board[0].length
      ) {
        return "crash";
      }
      const newCell = board[newRow][newCol] as keyof typeof mappings;
      const mapping = mappings[newCell];
      return mapping ? mapping : "crash";
    }
  }
  return "none";
}
