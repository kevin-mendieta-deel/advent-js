export function removeSnow(snow: string): string {
  let index = 0;
  let finalSnow = snow;
  while (index < finalSnow.length - 1) {
    const snowPile = finalSnow[index];
    const nextPile = finalSnow[index + 1];
    if (snowPile !== nextPile) {
      index++;
      continue;
    }
    finalSnow =
      finalSnow.slice(0, index) + finalSnow.slice(index + 2, finalSnow.length);
    index = 0;
  }

  return finalSnow;
}
