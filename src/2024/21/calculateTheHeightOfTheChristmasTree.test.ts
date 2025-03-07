import { describe, expect, it } from "bun:test";

import { treeHeight } from "./calculateTheHeightOfTheChristmasTree";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = treeHeight({
      value: "🎁",
      left: null,
      right: null,
    });
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = treeHeight({
      value: "🎁",
      left: null,
      right: null,
    });
    expect(result).toStrictEqual(1);
  });
  it("should pass test 3", () => {
    const result = treeHeight({
      value: "🎁",
      left: {
        value: "🎄",
        left: null,
        right: null,
      },
      right: {
        value: "❄️",
        left: null,
        right: null,
      },
    });
    expect(result).toStrictEqual(2);
  });
  it("should pass test 4", () => {
    const result = treeHeight({
      value: "🎁",
      left: {
        value: "🎄",
        left: {
          value: "⭐",
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: "❄️",
        left: null,
        right: null,
      },
    });
    expect(result).toStrictEqual(3);
  });
  it("should pass test 5", () => {
    const result = treeHeight(null);
    expect(result).toStrictEqual(0);
  });
  it("should pass test 6", () => {
    const result = treeHeight({
      value: "🎁",
      left: {
        value: "🎄",
        left: {
          value: "⭐",
          left: {
            value: "🎅",
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: null,
    });
    expect(result).toStrictEqual(4);
  });
});
