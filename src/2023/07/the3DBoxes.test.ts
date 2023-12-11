import { describe, expect, it } from "bun:test";

import { drawGift } from "./the3DBoxes";

describe("the 3d boxes problem tests", () => {
  it("should return a number", () => {
    const result = drawGift(1, "+");
    expect(result).toBeString();
  });
  it("should pass test 1", () => {
    const result = drawGift(4, "+");
    expect(result).toStrictEqual(
      "   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n",
    );
  });
  it("should pass test 2", () => {
    const result = drawGift(5, "*");
    expect(result).toStrictEqual(
      "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n",
    );
  });
  it("should pass test 3", () => {
    const result = drawGift(1, "^");
    expect(result).toStrictEqual("#\n");
  });
  it("should pass test 4", () => {
    const result = drawGift(2, "&");
    expect(result).toStrictEqual(" ##\n###\n##\n");
  });
  it("should pass test 5", () => {
    const result = drawGift(10, "%");
    expect(result).toStrictEqual(
      "         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n",
    );
  });
});
