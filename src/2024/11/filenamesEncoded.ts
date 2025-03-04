export function decodeFilename(filename: string): string {
  let isLastNumeric = true;
  let fileExtensionFound = false;
  let decodedFilename = "";
  for (let index = 1; index < filename.length; index++) {
    const character = filename.at(index);
    isLastNumeric = !Number.isNaN(Number(filename[index - 1]));
    if (isLastNumeric) continue;
    if (!fileExtensionFound && character === ".") {
      fileExtensionFound = true;
      decodedFilename += character;
    } else if (fileExtensionFound && character === ".") {
      return decodedFilename;
    } else {
      decodedFilename += character;
    }
  }

  return decodedFilename;
}
