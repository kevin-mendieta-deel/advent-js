enum ShoeTypeEnum {
  I = "I",
  R = "R",
}

type Shoe = {
  type: ShoeTypeEnum;
  size: number;
};

const KEYS = {
  [ShoeTypeEnum.I]: ShoeTypeEnum.R,
  [ShoeTypeEnum.R]: ShoeTypeEnum.I,
} as const;

export function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: number[] = [];
  const inventory = new Map<number, Map<ShoeTypeEnum, number>>();

  for (const shoe of shoes) {
    const { type, size } = shoe;
    const currentShoe = inventory.get(size);
    if (currentShoe) {
      const nCount = currentShoe.get(type) ?? 0;
      const cKey = KEYS[type];
      const cCount = currentShoe.get(cKey) ?? 0;
      if (cCount > 0) {
        pairs.push(size);
        currentShoe.set(cKey, cCount - 1);
      } else {
        currentShoe.set(type, nCount + 1);
      }
      continue;
    }

    const newInventory = new Map([
      [ShoeTypeEnum.I, 0],
      [ShoeTypeEnum.R, 0],
    ]);
    newInventory.set(type, 1);
    inventory.set(size, newInventory);
  }
  return pairs;
}
