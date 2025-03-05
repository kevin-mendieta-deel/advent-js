export function minMovesToStables(
  reindeer: number[],
  stables: number[],
): number {
  let moves = 0;
  const usedStables = new Set<number>();
  for (let i = 0; i < reindeer.length; i++) {
    let minDistance = Number.POSITIVE_INFINITY;
    let minDistanceStable = 0;
    const rnd = reindeer[i];
    for (let j = 0; j < stables.length; j++) {
      const stable = stables[j];
      if (usedStables.has(j)) {
        continue;
      }
      const distance = Math.abs(rnd - stable);
      if (distance < minDistance) {
        minDistance = distance;
        minDistanceStable = j;
      }
    }
    usedStables.add(minDistanceStable);
    moves += minDistance;
  }
  return moves;
}
