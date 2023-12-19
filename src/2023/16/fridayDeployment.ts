export function transformTree(tree: (number | null)[]): object | null {
  const buildTree = (tree: (number | null)[], index: number): object | null => {
    if (index >= tree.length || tree[index] === null) return null;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    return {
      value: tree[index],
      left: buildTree(tree, left),
      right: buildTree(tree, right),
    };
  };
  return buildTree(tree, 0);
}
