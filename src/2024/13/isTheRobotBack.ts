type Movement = "L" | "R" | "U" | "D";

export function isRobotBack(moves: string): true | [number, number] {
  const DELTAS = new Map<Movement, [number, number]>([
    ["L", [-1, 0]],
    ["R", [1, 0]],
    ["U", [0, 1]],
    ["D", [0, -1]],
  ]);
  const RELATIONS = new Map<Movement, Movement>([
    ["L", "R"],
    ["R", "L"],
    ["U", "D"],
    ["D", "U"],
  ]);

  const position: [number, number] = [0, 0];
  const memory = new Set<string>();
  for (let index = 0; index < moves.length; index++) {
    let rate = 1;
    let movement = moves[index] as Movement;
    let relation = RELATIONS.get(movement);
    if (!relation) {
      const operation = moves[index];
      movement = moves[index + 1] as Movement;
      relation = RELATIONS.get(movement);
      if (relation === undefined) continue;
      index++;
      if (operation === "*") {
        rate = 2;
      } else if (operation === "!") {
        movement = relation;
      } else if (operation === "?" && memory.has(movement)) {
        continue;
      }
    }

    const [x, y] = DELTAS.get(movement) ?? [0, 0];
    position[0] += rate * x;
    position[1] += rate * y;
    memory.add(movement);
  }

  const isOrigin = position[0] + position[1] === 0;
  return isOrigin || position;
}
