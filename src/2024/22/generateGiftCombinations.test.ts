import { describe, expect, it } from "bun:test";

import { generateGiftSets } from "./generateGiftCombinations";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = generateGiftSets(["car"]);
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = generateGiftSets(["car"]);
    expect(result).toStrictEqual([["car"]]);
  });
  it("should pass test 3", () => {
    const result = generateGiftSets(["car", "doll"]);
    expect(result).toStrictEqual([["car"], ["doll"], ["car", "doll"]]);
  });
  it("should pass test 4", () => {
    const result = generateGiftSets(["car", "doll", "puzzle"]);
    expect(result).toStrictEqual([
      ["car"],
      ["doll"],
      ["puzzle"],
      ["car", "doll"],
      ["car", "puzzle"],
      ["doll", "puzzle"],
      ["car", "doll", "puzzle"],
    ]);
  });
  it("should pass test 5", () => {
    const result = generateGiftSets(["apple", "banana", "cherry", "date"]);
    expect(result).toStrictEqual([
      ["apple"],
      ["banana"],
      ["cherry"],
      ["date"],
      ["apple", "banana"],
      ["apple", "cherry"],
      ["apple", "date"],
      ["banana", "cherry"],
      ["banana", "date"],
      ["cherry", "date"],
      ["apple", "banana", "cherry"],
      ["apple", "banana", "date"],
      ["apple", "cherry", "date"],
      ["banana", "cherry", "date"],
      ["apple", "banana", "cherry", "date"],
    ]);
  });
  it("should pass test 6", () => {
    const result = generateGiftSets([
      "pen",
      "notebook",
      "eraser",
      "pencil",
      "marker",
    ]);
    expect(result).toStrictEqual([
      ["pen"],
      ["notebook"],
      ["eraser"],
      ["pencil"],
      ["marker"],
      ["pen", "notebook"],
      ["pen", "eraser"],
      ["pen", "pencil"],
      ["pen", "marker"],
      ["notebook", "eraser"],
      ["notebook", "pencil"],
      ["notebook", "marker"],
      ["eraser", "pencil"],
      ["eraser", "marker"],
      ["pencil", "marker"],
      ["pen", "notebook", "eraser"],
      ["pen", "notebook", "pencil"],
      ["pen", "notebook", "marker"],
      ["pen", "eraser", "pencil"],
      ["pen", "eraser", "marker"],
      ["pen", "pencil", "marker"],
      ["notebook", "eraser", "pencil"],
      ["notebook", "eraser", "marker"],
      ["notebook", "pencil", "marker"],
      ["eraser", "pencil", "marker"],
      ["pen", "notebook", "eraser", "pencil"],
      ["pen", "notebook", "eraser", "marker"],
      ["pen", "notebook", "pencil", "marker"],
      ["pen", "eraser", "pencil", "marker"],
      ["notebook", "eraser", "pencil", "marker"],
      ["pen", "notebook", "eraser", "pencil", "marker"],
    ]);
  });
  it("should pass test 7", () => {
    const result = generateGiftSets([]);
    expect(result).toStrictEqual([]);
  });
});
