import { describe, expect, it } from "bun:test";

import { organizeGifts } from "./sortingTheWarehouse";

describe("sorting the warehouse problem tests", () => {
  it("should return a number", () => {
    const result = organizeGifts("1a");
    expect(result).toBeString();
  });
  it("should pass test 1", () => {
    const result = organizeGifts("76a11b");
    expect(result).toStrictEqual("[a]{a}{a}(aaaaaa){b}(b)");
  });
  it("should pass test 2", () => {
    const result = organizeGifts("20a");
    expect(result).toStrictEqual("{a}{a}");
  });
  it("should pass test 3", () => {
    const result = organizeGifts("70b120a4c");
    expect(result).toStrictEqual("[b]{b}{b}[a][a]{a}{a}(cccc)");
  });
  it("should pass test 4", () => {
    const result = organizeGifts("9c");
    expect(result).toStrictEqual("(ccccccccc)");
  });
  it("should pass test 5", () => {
    const result = organizeGifts("19d51e");
    expect(result).toStrictEqual("{d}(ddddddddd)[e](e)");
  });
});
