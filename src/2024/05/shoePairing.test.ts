import { describe, expect, it } from "bun:test";

import { organizeShoes } from "./shoePairing";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = organizeShoes([
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ]);
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = organizeShoes([
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ]);
    expect(result).toStrictEqual([38, 42]);
  });
  it("should pass test 3", () => {
    const result = organizeShoes([
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "I", size: 38 },
      { type: "I", size: 38 },
      { type: "R", size: 38 },
    ]);
    expect(result).toStrictEqual([38, 38]);
  });
  it("should pass test 4", () => {
    const result = organizeShoes([
      { type: "I", size: 38 },
      { type: "R", size: 36 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ]);
    expect(result).toStrictEqual([42]);
  });
  it("should pass test 5", () => {
    const result = organizeShoes([
      { type: "I", size: 40 },
      { type: "R", size: 40 },
      { type: "I", size: 40 },
      { type: "R", size: 40 },
    ]);
    expect(result).toStrictEqual([40, 40]);
  });
  it("should pass test 6", () => {
    const result = organizeShoes([
      { type: "I", size: 39 },
      { type: "R", size: 39 },
      { type: "R", size: 39 },
    ]);
    expect(result).toStrictEqual([39]);
  });
});
