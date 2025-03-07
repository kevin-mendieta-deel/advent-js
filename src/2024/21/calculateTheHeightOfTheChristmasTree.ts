type Node = {
  value: string;
  left: Node | null;
  right: Node | null;
};

export function treeHeight(tree: Node | null): number {
  if (tree === null) return 0;
  return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
}
