export function drawRace(indices: number[], length: number): string {
  let race = "";
  for (let index = 0; index < indices.length; index++) {
    const position = indices[index];
    const padding = " ".repeat(indices.length - 1 - index);
    let row = "";
    if (position === 0) {
      row = "~".repeat(length);
    } else {
      const replaceIndex = position > 0 ? position : length + position;
      row = "r".padStart(replaceIndex + 1, "~").padEnd(length, "~");
    }
    const head = ` /${index + 1}`;
    const end = index === indices.length - 1 ? "" : "\n";
    race += `${padding}${row}${head}${end}`;
  }
  return race;
}
