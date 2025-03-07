type ResultGift = {
  missing: Record<string, number>;
  extra: Record<string, number>;
};

export function fixGiftList(
  received: string[],
  expected: string[],
): ResultGift {
  const result: ResultGift = {
    missing: {},
    extra: {},
  };
  const receivedCountMap = new Map<string, number>();
  for (const gift of received) {
    receivedCountMap.set(gift, (receivedCountMap.get(gift) || 0) + 1);
  }
  for (const gift of expected) {
    const receivedCount = receivedCountMap.get(gift) || 0;
    if (receivedCount === 0) {
      result.missing[gift] = (result.missing[gift] || 0) + 1;
    } else {
      receivedCountMap.set(gift, receivedCount - 1);
    }
  }
  for (const [gift, count] of receivedCountMap) {
    if (count > 0) {
      result.extra[gift] = count;
    }
  }
  return result;
}
