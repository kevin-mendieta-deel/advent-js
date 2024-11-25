export function battleHorde(zombies: string, humans: string): string {
  let diff = 0;
  for (let i = 0; i < zombies.length; i++) {
    diff += +zombies[i] - +humans[i];
  }
  if (diff === 0) return "x";
  if (diff < 0) return `${-diff}h`;
  return `${diff}z`;
}
