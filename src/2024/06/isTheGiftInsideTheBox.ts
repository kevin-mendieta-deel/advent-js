export function inBox(box: string[]): boolean {
  const rSize = box.length;
  const cSize = box[0].length;
  for (let i = 0; i < rSize; i++) {
    for (let j = 0; j < cSize; j++) {
      if (box[i][j] === "*") {
        const rows = i > 0 && i < rSize - 1;
        const cols = j > 0 && j < cSize - 1;
        return rows && cols;
      }
    }
  }
  return false;
}
