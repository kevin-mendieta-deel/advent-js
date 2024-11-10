import { describe, expect, it } from "bun:test";

import { createMagicPotion } from "./createThePerfectPotion";

describe("first repeated gift problem tests", () => {
  it("should pass test 1", () => {
    const result = createMagicPotion([13, 5, 6, 2], 8);
    expect(result).toBe([2, 3]);
  });
  it("should pass test 2", () => {
    const result = createMagicPotion([11, 3, 7, 5], 10);
    expect(result).toBe([1, 2]);
  });
  it("should pass test 3", () => {
    const result = createMagicPotion([4, 3, 2, 3, 4], 6);
    expect(result).toBe([0, 2]);
  });
  it("should pass test 4", () => {
    const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10);
    expect(result).toBe([3, 4]);
  });
  it("should pass test 5", () => {
    const result = createMagicPotion([1, 2, 3, 4, 5], 8);
    expect(result).toBe([2, 4]);
  });
  it("should pass test 6", () => {
    const result = createMagicPotion([5, 1, 4, 6, 2], 9);
    expect(result).toBe([0, 2]);
  });
  it("should pass test 7", () => {
    const result = createMagicPotion([1, -2, 3, -4, 5], -1);
    expect(result).toBe([0, 1]);
  });
  it("should pass test 8", () => {
    const result = createMagicPotion([10, 20, 30, 40], 50);
    expect(result).toBe([1, 2]);
  });
  it("should pass test 9", () => {
    const result = createMagicPotion([], 10);
    expect(result).toBeUndefined();
  });
});
