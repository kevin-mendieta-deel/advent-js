export function escapePyramidHead(room: string[][]): number {
  const deltas: [number, number][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const source: [number, number] = [0, 0];
  const end: [number, number] = [0, 0];
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (room[i][j] === "T") {
        end[0] = i;
        end[1] = j;
      }
      if (room[i][j] === "▲") {
        source[0] = i;
        source[1] = j;
      }
    }
  }
  const queue: [number, number][] = [];
  const visited = new Set<string>();
  const parentMap = new Map<string, [number, number]>();
  let isFound = false;
  queue.push(source);
  visited.add(`${source[0]},${source[1]}`);
  while (queue.length > 0 && !isFound) {
    const node = queue.shift();
    if (node === undefined) {
      break;
    }
    const [nodeX, nodeY] = node;
    for (const delta of deltas) {
      const [deltaX, deltaY] = delta;
      const x = nodeX + deltaX;
      const y = nodeY + deltaY;
      if (x >= 0 && x < room.length && y >= 0 && y < room[0].length) {
        if (!visited.has(`${x},${y}`) && room[x][y] !== "#") {
          visited.add(`${x},${y}`);
          parentMap.set(`${x},${y}`, [nodeX, nodeY]);
          queue.push([x, y]);
          isFound = isFound || (x === end[0] && y === end[1]);
        }
      }
    }
  }
  if (!isFound) return -1;
  let count = 0;
  let current = end;
  while (current[0] !== source[0] || current[1] !== source[1]) {
    count++;
    const [x, y] = current;
    current = parentMap.get(`${x},${y}`) as [number, number];
  }
  return count;
}
