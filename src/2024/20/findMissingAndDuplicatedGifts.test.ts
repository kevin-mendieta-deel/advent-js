import { describe, expect, it } from "bun:test";

import { fixGiftList } from "./findMissingAndDuplicatedGifts";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = fixGiftList(["puzzle", "car"], ["puzzle", "car", "ball"]);
    expect(result).toBeObject();
  });
  it("should pass test 2", () => {
    const result = fixGiftList(["puzzle", "car"], ["puzzle", "car", "ball"]);
    expect(result).toStrictEqual({
      missing: {
        ball: 1,
      },
      extra: {},
    });
  });
  it("should pass test 3", () => {
    const result = fixGiftList(
      ["car", "puzzle", "car"],
      ["puzzle", "car", "doll"],
    );
    expect(result).toStrictEqual({
      missing: {
        doll: 1,
      },
      extra: {
        car: 1,
      },
    });
  });
  it("should pass test 4", () => {
    const result = fixGiftList(
      ["train", "book", "kite"],
      ["train", "kite", "book", "kite"],
    );
    expect(result).toStrictEqual({
      missing: {
        kite: 1,
      },
      extra: {},
    });
  });
  it("should pass test 5", () => {
    const result = fixGiftList(["bear", "car"], ["bear", "car", "car"]);
    expect(result).toStrictEqual({
      missing: {
        car: 1,
      },
      extra: {},
    });
  });
  it("should pass test 6", () => {
    const result = fixGiftList([], ["bear", "car", "car"]);
    expect(result).toStrictEqual({
      missing: {
        car: 2,
        bear: 1,
      },
      extra: {},
    });
  });
  it("should pass test 7", () => {
    const result = fixGiftList(["puzzle", "puzzle", "car"], ["puzzle", "car"]);
    expect(result).toStrictEqual({
      missing: {},
      extra: {
        puzzle: 1,
      },
    });
  });
  it("should pass test 8", () => {
    const result = fixGiftList(["car"], ["car", "puzzle", "ball"]);
    expect(result).toStrictEqual({
      missing: {
        puzzle: 1,
        ball: 1,
      },
      extra: {},
    });
  });
  it("should pass test 9", () => {
    const result = fixGiftList(
      ["bear", "bear", "car"],
      ["bear", "bear", "car"],
    );
    expect(result).toStrictEqual({
      missing: {},
      extra: {},
    });
  });
});
