import { describe, expect, it } from "bun:test";

import { detectBombs } from "./grinchsBombs";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ]);
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ]);
    expect(result).toStrictEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]);
  });
  it("should pass test 3", () => {
    const result = detectBombs([
      [false, true, false],
      [true, false, true],
      [false, true, false],
    ]);
    expect(result).toStrictEqual([
      [2, 2, 2],
      [2, 4, 2],
      [2, 2, 2],
    ]);
  });
  it("should pass test 4", () => {
    const result = detectBombs([
      [true, true],
      [true, true],
      [false, false],
    ]);
    expect(result).toStrictEqual([
      [3, 3],
      [3, 3],
      [2, 2],
    ]);
  });
  it("should pass test 5", () => {
    const result = detectBombs([
      [true, true],
      [true, true],
    ]);
    expect(result).toStrictEqual([
      [3, 3],
      [3, 3],
    ]);
  });
  it("should pass test 6", () => {
    const result = detectBombs([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]);
    expect(result).toStrictEqual([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]);
  });
  it("should pass test 7", () => {
    const result = detectBombs([
      [true, false],
      [false, false],
    ]);
    expect(result).toStrictEqual([
      [0, 1],
      [1, 1],
    ]);
  });
});
