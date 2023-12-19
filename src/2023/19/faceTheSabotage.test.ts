import { describe, expect, it } from "bun:test";

import { revealSabotage } from "./faceTheSabotage";

describe("face the sabotage problem tests", () => {
  it("should return an array", () => {
    const result = revealSabotage([[" "]]);
    expect(result).toBeArray();
  });
  it("should pass test 1", () => {
    const result = revealSabotage([
      ["*", " ", " ", " "],
      [" ", " ", "*", " "],
      [" ", " ", " ", " "],
      ["*", " ", " ", " "],
    ]);
    expect(result).toStrictEqual([
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["1", "2", "1", "1"],
      ["*", "1", " ", " "],
    ]);
  });
  it("should pass test 2", () => {
    const result = revealSabotage([
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "],
    ]);
    expect(result).toStrictEqual([
      ["1", "1", "1"],
      ["1", "*", "1"],
      ["1", "1", "1"],
    ]);
  });
  it("should pass test 3", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", "*", " "],
      [" ", " ", "*"],
    ]);
    expect(result).toStrictEqual([
      ["*", "2", "1"],
      ["2", "*", "2"],
      ["1", "2", "*"],
    ]);
  });
  it("should pass test 4", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    expect(result).toStrictEqual([
      ["*", "1", " "],
      ["1", "1", " "],
      [" ", " ", " "],
    ]);
  });
  it("should pass test 5", () => {
    const result = revealSabotage([
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ]);
    expect(result).toStrictEqual([
      ["*", "*", "*"],
      ["*", "8", "*"],
      ["*", "*", "*"],
    ]);
  });
  it("should pass test 6", () => {
    const result = revealSabotage([["*", " ", "*"]]);
    expect(result).toStrictEqual([["*", "2", "*"]]);
  });
  it("should pass test 7", () => {
    const result = revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", "*"],
    ]);
    expect(result).toStrictEqual([
      ["*", "1", " "],
      ["1", "2", "1"],
      [" ", "1", "*"],
    ]);
  });
  it("should pass test 8", () => {
    const result = revealSabotage([
      ["*", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "*", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "*"],
    ]);
    expect(result).toStrictEqual([
      ["*", "1", " ", " ", " "],
      ["1", "2", "1", "1", " "],
      [" ", "1", "*", "1", " "],
      [" ", "1", "1", "2", "1"],
      [" ", " ", " ", "1", "*"],
    ]);
  });
});
