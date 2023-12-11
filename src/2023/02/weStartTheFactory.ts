export function manufacture(gifts: string[], materials: string): string[] {
  const memory = new Set(materials.split(""));

  return gifts.reduce((finalGifts: string[], gift) => {
    [...gift].every((character) => memory.has(character)) &&
      finalGifts.push(gift);
    return finalGifts;
  }, []);
}
