import { describe, expect, it } from "bun:test";

import { calculatePrice } from "./howMuchDoesTheThreeCost";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = calculatePrice("***");
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = calculatePrice("***");
    expect(result).toStrictEqual(3);
  });
  it("should pass test 3", () => {
    const result = calculatePrice("*o");
    expect(result).toStrictEqual(4);
  });
  it("should pass test 4", () => {
    const result = calculatePrice("o*");
    expect(result).toStrictEqual(6);
  });
  it("should pass test 5", () => {
    const result = calculatePrice("*o@");
    expect(result).toStrictEqual(94);
  });
  it("should pass test 6", () => {
    const result = calculatePrice("^#");
    expect(result).toStrictEqual(40);
  });
  it("should pass test 7", () => {
    const result = calculatePrice("#@Z");
    expect(result).toBeUndefined();
  });
});
