function setCombinationsFromIndex(
  array: string[],
  setSize: number,
  fromIndex: number,
): string[][] {
  if (setSize === 0) return [];

  if (array.length - fromIndex === setSize) return [array.slice(fromIndex)];

  if (setSize === 1) {
    const result: string[][] = [];
    for (let j = fromIndex; j < array.length; j++) {
      result.push([array[j]]);
    }
    return result;
  }

  const result: string[][] = [];
  const rest = setCombinationsFromIndex(array, setSize - 1, fromIndex + 1);
  const rest2 = setCombinationsFromIndex(array, setSize, fromIndex + 1);

  for (const r of rest) {
    result.push([array[fromIndex], ...r]);
  }

  return [...result, ...rest2];
}

export function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];
  for (let setSize = 1; setSize <= gifts.length; setSize++) {
    const setResult = setCombinationsFromIndex(gifts, setSize, 0);
    result.push(...setResult);
  }
  return result;
}
