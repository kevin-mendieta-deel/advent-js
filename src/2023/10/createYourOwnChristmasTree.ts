export function createChristmasTree(ornaments: string, height: number): string {
  let tree = "";
  let ornamentIndex = 0;
  for (let index = 0; index < height; index++) {
    tree += `${" ".repeat(height - 1 - index)}`;
    let treeLine = "";
    for (let lineIndex = 0; lineIndex < index + 1; lineIndex++) {
      const needSpace = lineIndex === index;
      treeLine += `${ornaments[ornamentIndex]}${needSpace ? "" : " "}`;
      if (++ornamentIndex > ornaments.length - 1) {
        ornamentIndex = 0;
      }
    }
    tree += `${treeLine}\n`;
  }
  tree += `${" ".repeat(height - 1)}|\n`;
  return tree;
}
