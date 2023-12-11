export function organizeGifts(gifts: string): string {
  const giftsTuples: [number, string][] = [];
  let quantityString = "";
  for (const character of gifts) {
    if (Number.isNaN(+character)) {
      giftsTuples.push([+quantityString, character]);
      quantityString = "";
      continue;
    }
    quantityString += character;
  }

  let organizedGifts = "";
  for (const giftsTuple of giftsTuples) {
    const [quantity, gift] = giftsTuple;
    let giftsQuantity = quantity;
    let boxes = 0;
    let pallets = 0;

    if (giftsQuantity >= 10) {
      boxes = Math.floor(giftsQuantity / 10);
      giftsQuantity %= 10;
    }
    if (boxes >= 5) {
      pallets = Math.floor(boxes / 5);
      boxes %= 5;
    }

    organizedGifts += `${`[${gift}]`.repeat(pallets)}`;
    organizedGifts += `${`{${gift}}`.repeat(boxes)}`;
    if (giftsQuantity > 0) {
      organizedGifts += `${`(${gift.repeat(giftsQuantity)})`}`;
    }
  }
  return organizedGifts;
}
