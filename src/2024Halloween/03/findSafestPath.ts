export function findSafestPath(dream: number[][]): number {
  const rows = dream.length;
  const cols = dream[0].length;
  const dp: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(Number.POSITIVE_INFINITY),
  );

  dp[0][0] = dream[0][0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + dream[i][j]);
      }
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + dream[i][j]);
      }
    }
  }

  return dp[rows - 1][cols - 1];
}

function findSafestPathRecurrency(dream: number[][]): number {
  const MEM = new Map<string, number>();
  const solve = (i: number, j: number): number => {
    if (i === 0 && j === 0) {
      return dream[i][j];
    }

    const key = `${i}-${j}`;
    const memoized = MEM.get(key);
    if (memoized !== undefined) {
      return memoized;
    }

    const left = j - 1 >= 0 ? solve(i, j - 1) : Number.POSITIVE_INFINITY;
    const top = i - 1 >= 0 ? solve(i - 1, j) : Number.POSITIVE_INFINITY;

    const result = dream[i][j] + Math.min(left, top);
    MEM.set(key, result);

    return result;
  };
  return solve(dream.length - 1, dream[0].length - 1);
}
