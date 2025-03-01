import { describe, expect, it } from "bun:test";

import { prepareGifts } from "./firstGiftRepeated";

describe("first gift repeated! problem tests", () => {
  it("should pass test 1", () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5]);
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it("should pass test 3", () => {
    const result = prepareGifts([5, 5, 5, 5]);
    expect(result).toStrictEqual([5]);
  });
  it("should pass test 4", () => {
    const result = prepareGifts([1, 2, 3]);
    expect(result).toStrictEqual([1, 2, 3]);
  });
  it("should pass test 5", () => {
    const result = prepareGifts([]);
    expect(result).toStrictEqual([]);
  });
  it("should pass test 6", () => {
    const result = prepareGifts([10, 20, 10, 30, 20, 30, 40]);
    expect(result).toStrictEqual([10, 20, 30, 40]);
  });
  it("should pass test 7", () => {
    const result = prepareGifts([3, 1, 2, 3, 1, 2]);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
