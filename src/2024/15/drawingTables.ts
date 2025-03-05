export function drawTable(
  data: Array<Record<string, string | number | boolean>>,
): string {
  const maxColumnWidths = new Map<string, number>();
  for (const record of data) {
    for (const [key, value] of Object.entries(record)) {
      const colSize = String(value).length;
      const currentMax = maxColumnWidths.get(key) || 0;
      maxColumnWidths.set(key, Math.max(currentMax, colSize));
    }
  }

  let separator = "";
  let header = "";
  for (const [key] of maxColumnWidths) {
    const colSize = maxColumnWidths.get(key) || 0;
    const padding = Math.max(colSize, key.length);
    const formatedKey = key.charAt(0).toUpperCase() + String(key).slice(1);
    header += `| ${String(formatedKey).padEnd(padding, " ")} `;
    separator += `+${"-".repeat(padding + 2)}`;
  }
  header += "|\n";
  separator += "+\n";
  let table = `${separator}${header}${separator}`;
  for (const record of data) {
    for (const [key, value] of Object.entries(record)) {
      const colSize = maxColumnWidths.get(key) || 0;
      const padding = Math.max(colSize, key.length);
      table += `| ${String(value).padEnd(padding, " ")} `;
    }
    table += "|\n";
  }

  return table + separator.trim();
}
