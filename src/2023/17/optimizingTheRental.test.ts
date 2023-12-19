import { describe, expect, it } from "bun:test";

import { optimizeIntervals } from "./optimizingTheRental";

describe("optimizing the rental problem tests", () => {
  it("should return an array", () => {
    const result = optimizeIntervals([]);
    expect(result).toBeArray();
  });
  it("should pass test 1", () => {
    const result = optimizeIntervals([
      [2, 7],
      [3, 4],
      [5, 8],
    ]);
    expect(result).toStrictEqual([[2, 8]]);
  });
  it("should pass test 2", () => {
    const result = optimizeIntervals([
      [3, 4],
      [5, 8],
      [2, 7],
    ]);
    expect(result).toStrictEqual([[2, 8]]);
  });
  it("should pass test 3", () => {
    const result = optimizeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
    ]);
    expect(result).toStrictEqual([
      [1, 6],
      [8, 10],
    ]);
  });
  it("should pass test 4", () => {
    const result = optimizeIntervals([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(result).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
  it("should pass test 5", () => {
    const result = optimizeIntervals([
      [5, 7],
      [6, 8],
    ]);
    expect(result).toStrictEqual([[5, 8]]);
  });
  it("should pass test 6", () => {
    const result = optimizeIntervals([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ]);
    expect(result).toStrictEqual([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ]);
  });
  it("should pass test 7", () => {
    const result = optimizeIntervals([
      [1, 15],
      [8, 12],
      [4, 7],
    ]);
    expect(result).toStrictEqual([[1, 15]]);
  });
  it("should pass test 8", () => {
    const result = optimizeIntervals([
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ]);
    expect(result).toStrictEqual([[1, 10]]);
  });
});
