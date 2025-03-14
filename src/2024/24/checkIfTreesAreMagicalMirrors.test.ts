import { describe, expect, it } from "bun:test";

import { isTreesSynchronized } from "./checkIfTreesAreMagicalMirrors";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = isTreesSynchronized({ value: "🎄" }, { value: "🎄" });
    expect(result).toBeArray();
  });
  it("should pass test 2", () => {
    const result = isTreesSynchronized({ value: "🎄" }, { value: "🎄" });
    expect(result).toStrictEqual([true, "🎄"]);
  });
  it("should pass test 3", () => {
    const result = isTreesSynchronized(
      { value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } },
      { value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } },
    );
    expect(result).toStrictEqual([true, "🎄"]);
  });
  it("should pass test 4", () => {
    const result = isTreesSynchronized(
      { value: "✨", left: { value: "⭐" }, right: { value: "🎅" } },
      { value: "✨", left: { value: "🎅" }, right: { value: "🎁" } },
    );
    expect(result).toStrictEqual([false, "✨"]);
  });
  it("should pass test 5", () => {
    const result = isTreesSynchronized({ value: "🎁" }, { value: "🎁" });
    expect(result).toStrictEqual([true, "🎁"]);
  });
  it("should pass test 6", () => {
    const result = isTreesSynchronized({ value: "🎄" }, { value: "🎁" });
    expect(result).toStrictEqual([false, "🎄"]);
  });
  it("should pass test 7", () => {
    const result = isTreesSynchronized(
      { value: "🎄", left: { value: "⭐" } },
      { value: "🎄", right: { value: "⭐" } },
    );
    expect(result).toStrictEqual([true, "🎄"]);
  });
});
