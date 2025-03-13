import { describe, expect, it } from "bun:test";

import { findMissingNumbers } from "./findTheMissingNumbers";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = findMissingNumbers([1, 2, 4, 6]);
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = findMissingNumbers([1, 2, 4, 6]);
    expect(result).toStrictEqual([3, 5]);
  });
  it("should pass test 3", () => {
    const result = findMissingNumbers([4, 8, 7, 2]);
    expect(result).toStrictEqual([1, 3, 5, 6]);
  });
  it("should pass test 4", () => {
    const result = findMissingNumbers([3, 2, 1, 1]);
    expect(result).toStrictEqual([]);
  });
  it("should pass test 5", () => {
    const result = findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
    expect(result).toStrictEqual([4]);
  });
  it("should pass test 6", () => {
    const result = findMissingNumbers([1, 2, 3, 4, 5]);
    expect(result).toStrictEqual([]);
  });
});
