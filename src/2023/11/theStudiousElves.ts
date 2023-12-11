export function getIndexsForPalindrome(word: string): number[] | null {
  const isPalindrome = (text: string): boolean => {
    const mid = Math.floor(text.length / 2);
    for (let index = 0; index <= mid; index++) {
      const startChar = text[index];
      const endChar = text[text.length - 1 - index];
      if (startChar !== endChar) return false;
    }
    return true;
  };

  const swapCharacters = (
    inputString: string,
    index1: number,
    index2: number,
  ): string => {
    const stringArray = inputString.split("");

    const temp = stringArray[index1];
    stringArray[index1] = stringArray[index2];
    stringArray[index2] = temp;

    const resultString = stringArray.join("");
    return resultString;
  };

  if (isPalindrome(word)) return [];

  for (let index = 0; index < word.length; index++) {
    for (let otherIndex = index + 1; otherIndex < word.length; otherIndex++) {
      const swapedWord = swapCharacters(word, index, otherIndex);
      if (isPalindrome(swapedWord)) return [index, otherIndex];
    }
  }
  return null;
}
