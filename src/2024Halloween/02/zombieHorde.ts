export function battleHorde(zombies: string, humans: string): string {
  let zCount = 0;
  let hCount = 0;
  for (let i = 0; i < zombies.length; i++) {
    zCount += +zombies[i];
    hCount += +humans[i];
  }

  const diff = zCount - hCount;

  if (diff === 0) return "x";
  if (diff < 0) return `${-diff}h`;
  return `${diff}z`;
}
