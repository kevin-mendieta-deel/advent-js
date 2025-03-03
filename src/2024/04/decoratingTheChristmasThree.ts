export function createXmasTree(height: number, ornament: string): string {
  const treeBaseSize = 2 * (height - 1) + 1;
  let tree = "";
  for (let level = 0; level < height; level++) {
    const levelSize = 2 * level + 1;
    const levelBackfill = (treeBaseSize - levelSize) / 2;
    let levelTree = ornament.repeat(levelSize);
    levelTree += "_".repeat(levelBackfill);
    levelTree = "_".repeat(levelBackfill) + levelTree;
    tree += `${levelTree}\n`;
  }

  const treeTailBackfill = (treeBaseSize - 1) / 2;
  let treeTail = "#";
  treeTail += "_".repeat(treeTailBackfill);
  treeTail = "_".repeat(treeTailBackfill) + treeTail;

  return `${tree}${treeTail}\n${treeTail}`;
}
