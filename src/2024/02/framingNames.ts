export function createFrame(names: string[]): string {
  let maxNameLen = Number.NEGATIVE_INFINITY;
  for (const name of names) {
    if (name.length >= maxNameLen) {
      maxNameLen = name.length;
    }
  }

  const border = "*".repeat(maxNameLen + 4);
  let frame = `${border}\n`;
  for (const name of names) {
    frame += `* ${name.padEnd(maxNameLen, " ")} *\n`;
  }
  return frame + border;
}
