import { describe, expect, it } from "bun:test";

import { escapePyramidHead } from "./escapePyramidHead";

describe("Escape Pyramid Head problem tests", () => {
  it("should pass test 1", () => {
    const result = escapePyramidHead([
      ["T", ".", "#", "."],
      [".", ".", ".", "."],
      ["▲", ".", ".", "#"],
      [".", "#", "#", "#"],
    ]);
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = escapePyramidHead([
      ["T", ".", "#", "."],
      [".", ".", ".", "."],
      ["▲", ".", ".", "#"],
      [".", "#", "#", "#"],
    ]);
    expect(result).toStrictEqual(2);
  });
  it("should pass test 3", () => {
    const result = escapePyramidHead([
      [".", ".", "#", ".", "▲"],
      ["#", ".", "#", ".", "#"],
      [".", ".", ".", ".", "."],
      ["#", "#", "#", ".", "#"],
      ["T", ".", ".", ".", "."],
    ]);
    expect(result).toStrictEqual(8);
  });
  it("should pass test 4", () => {
    const result = escapePyramidHead([
      ["#", "#", "#"],
      ["▲", ".", "#"],
      [".", "#", "T"],
    ]);
    expect(result).toStrictEqual(-1);
  });
  it("should pass test 5", () => {
    const result = escapePyramidHead([
      ["#", "#"],
      ["▲", "T"],
    ]);
    expect(result).toStrictEqual(1);
  });
  it("should pass test 6", () => {
    const result = escapePyramidHead([
      [".", ".", "."],
      ["T", "▲", "."],
      [".", ".", "."],
    ]);
    expect(result).toStrictEqual(1);
  });
});
