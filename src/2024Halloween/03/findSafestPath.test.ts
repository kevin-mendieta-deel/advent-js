import { describe, expect, it } from "bun:test";

import { findSafestPath } from "./findSafestPath";

describe("find safest path problem tests", () => {
  it("should pass test 1", () => {
    const result = findSafestPath([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = findSafestPath([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);
    expect(result).toStrictEqual(7);
  });
  it("should pass test 3", () => {
    const result = findSafestPath([
      [5, 9],
      [4, 2],
    ]);
    expect(result).toStrictEqual(11);
  });
  it("should pass test 4", () => {
    const result = findSafestPath([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
    expect(result).toStrictEqual(5);
  });
  it("should pass test 5", () => {
    const result = findSafestPath([
      [1, 2, 3],
      [3, 2, 1],
      [4, 4, 4],
    ]);
    expect(result).toStrictEqual(10);
  });
  it("should pass test 6", () => {
    const result = findSafestPath([
      [1, 2],
      [3, 4],
      [6, 5],
      [7, 8],
    ]);
    expect(result).toStrictEqual(20);
  });
  it("should pass test 7", () => {
    const result = findSafestPath([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(result).toStrictEqual(21);
  });
});
