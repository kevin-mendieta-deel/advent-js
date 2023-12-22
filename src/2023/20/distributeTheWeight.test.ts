import { describe, expect, it } from "bun:test";

import { distributeGifts } from "./distributeTheWeight";

describe("face the sabotage problem tests", () => {
  it("should return an array", () => {
    const result = distributeGifts([[1, null]]);
    expect(result).toBeArray();
  });
  it("should pass test 1", () => {
    const result = distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4],
    ]);
    expect(result).toStrictEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ]);
  });
  it("should pass test 2", () => {
    const result = distributeGifts([
      [2, null],
      [null, 3],
    ]);
    expect(result).toStrictEqual([
      [2, 3],
      [3, 3],
    ]);
  });
  it("should pass test 3", () => {
    const result = distributeGifts([
      [2, 1, 1],
      [3, 4, null],
    ]);
    expect(result).toStrictEqual([
      [2, 2, 1],
      [3, 3, 3],
    ]);
  });
  it("should pass test 4", () => {
    const result = distributeGifts([
      [null, 5],
      [3, null],
    ]);
    expect(result).toStrictEqual([
      [4, 5],
      [3, 4],
    ]);
  });
  it("should pass test 5", () => {
    const result = distributeGifts([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(result).toStrictEqual([
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8],
    ]);
  });
  it("should pass test 6", () => {
    const result = distributeGifts([
      [null, 1, null, 1, null],
      [1, null, 1, null, 1],
    ]);
    expect(result).toStrictEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
  });
});
