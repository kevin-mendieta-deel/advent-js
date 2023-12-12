export function checkIsValidCopy(original: string, copy: string): boolean {
  if (original.length !== copy.length) return false;
  const IS_UPPER_REG = /[A-Z]/;
  const IS_LOWER_REG = /[a-z]/;
  const inSpecChars = ["#", "+", ":", "."];
  const specChars = ["#", "+", ":", ".", " "];

  return [...original].every((orginalChar, index) => {
    const copyChar = copy[index];

    const isSameChar = orginalChar === copyChar;
    const isSameCharLowered = orginalChar.toLowerCase() === copyChar;

    const isOriginalUpper = IS_UPPER_REG.test(orginalChar);
    const isOriginalLower = IS_LOWER_REG.test(orginalChar);

    const isOrigASpecChar = inSpecChars.some((char) => char === orginalChar);
    const isCopyASpecChar = specChars.some((char) => char === copyChar);

    const isValidUpper = isCopyASpecChar || isSameChar || isSameCharLowered;
    const isUpperCase = isOriginalUpper && isValidUpper;
    const isLowerCase = isOriginalLower && isCopyASpecChar;
    const isDiffCase = isOrigASpecChar && isCopyASpecChar;
    return isSameChar || isUpperCase || isLowerCase || isDiffCase;
  });
}
