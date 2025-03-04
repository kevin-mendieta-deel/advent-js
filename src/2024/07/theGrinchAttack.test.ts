import { describe, expect, it } from "bun:test";

import { fixPackages } from "./theGrinchAttack";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = fixPackages("a(bc)de");
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = fixPackages("a(bc)de");
    expect(result).toStrictEqual("acbde");
  });
  it("should pass test 3", () => {
    const result = fixPackages("a(bc(def)g)h");
    expect(result).toStrictEqual("agdefcbh");
  });
  it("should pass test 4", () => {
    const result = fixPackages("abc(def(gh)i)jk");
    expect(result).toStrictEqual("abcighfedjk");
  });
  it("should pass test 5", () => {
    const result = fixPackages("a(b(c))e");
    expect(result).toStrictEqual("acbe");
  });
  it("should pass test 6", () => {
    const result = fixPackages("a(b(cd(efg)))h");
    expect(result).toStrictEqual("acdgfebh");
  });
  it("should pass test 7", () => {
    const result = fixPackages("(abc(def(ghi)))");
    expect(result).toStrictEqual("defihgcba");
  });
});
