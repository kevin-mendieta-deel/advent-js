type Inventory = Array<{ name: string; quantity: number; category: string }>;
type OrganizedInventory = Record<string, Record<string, number>>;

export function organizeInventory(inventory: Inventory): OrganizedInventory {
  const inventoryResult: OrganizedInventory = {};
  for (const inventoryItem of inventory) {
    const { name, quantity, category } = inventoryItem;

    const existingCategory = inventoryResult[category];
    if (!existingCategory) {
      const newCategory = { [name]: quantity };
      inventoryResult[category] = newCategory;
      continue;
    }

    const existingItem = existingCategory[name];
    if (!existingItem) {
      existingCategory[name] = quantity;
      continue;
    }

    existingCategory[name] += quantity;
  }

  return inventoryResult;
}
