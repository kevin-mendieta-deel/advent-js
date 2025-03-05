import { describe, expect, it } from "bun:test";

import { minMovesToStables } from "./weavingTheReno";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = minMovesToStables([2, 6, 9], [3, 8, 5]);
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = minMovesToStables([2, 6, 9], [3, 8, 5]);
    expect(result).toStrictEqual(3);
  });
  it("should pass test 3", () => {
    const result = minMovesToStables([1, 1, 3], [1, 4, 8]);
    expect(result).toStrictEqual(8);
  });
  it("should pass test 4", () => {
    const result = minMovesToStables([5, 15, 10], [8, 18, 12]);
    expect(result).toStrictEqual(8);
  });
  it("should pass test 5", () => {
    const result = minMovesToStables([30, 1, 2], [1, 2, 30]);
    expect(result).toStrictEqual(0);
  });
  it("should pass test 6", () => {
    const result = minMovesToStables([30, 20, 10], [35, 25, 15]);
    expect(result).toStrictEqual(15);
  });
  it("should pass test 7", () => {
    const result = minMovesToStables([100, 1], [50, 75]);
    expect(result).toStrictEqual(74);
  });
});
