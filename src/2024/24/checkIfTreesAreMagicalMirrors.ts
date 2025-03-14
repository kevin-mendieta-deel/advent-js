type Node = {
  value: string;
  left?: Node;
  right?: Node;
};

function reverse(tree: Node | undefined): Node | undefined {
  if (!tree) return undefined;

  return {
    value: tree.value,
    left: reverse(tree.right),
    right: reverse(tree.left),
  };
}

function areTreesEqual(
  tree1: Node | undefined,
  tree2: Node | undefined,
): boolean {
  if (!tree1 && !tree2) return true;

  if (tree1?.value !== tree2?.value) return false;

  return (
    areTreesEqual(tree1?.left, tree2?.left) &&
    areTreesEqual(tree1?.right, tree2?.right)
  );
}

export function isTreesSynchronized(
  tree1: Node | undefined,
  tree2: Node | undefined,
): [boolean, string] {
  const reversedTree = reverse(tree2);
  return [areTreesEqual(tree1, reversedTree), tree1?.value ?? ""];
}
