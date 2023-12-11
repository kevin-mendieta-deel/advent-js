import { describe, expect, it } from "bun:test";

import { getIndexsForPalindrome } from "./theStudiousElves";

describe("the studious elves problem tests", () => {
  it("should return a number", () => {
    const result = getIndexsForPalindrome("anna");
    expect(result).toBeArray();

    const result2 = getIndexsForPalindrome("123");
    expect(result2).toBeNull();
  });
  it("should pass test 1", () => {
    const result = getIndexsForPalindrome("anna");
    expect(result).toStrictEqual([]);
  });
  it("should pass test 2", () => {
    const result = getIndexsForPalindrome("abab");
    expect(result).toStrictEqual([0, 1]);
  });
  it("should pass test 3", () => {
    const result = getIndexsForPalindrome("abac");
    expect(result).toStrictEqual(null);
  });
  it("should pass test 4", () => {
    const result = getIndexsForPalindrome("aaaaaaaa");
    expect(result).toStrictEqual([]);
  });
  it("should pass test 5", () => {
    const result = getIndexsForPalindrome("aaababa");
    expect(result).toStrictEqual([1, 3]);
  });
  it("should pass test 6", () => {
    const result = getIndexsForPalindrome("caababa");
    expect(result).toStrictEqual(null);
  });
  it("should pass test 7", () => {
    const result = getIndexsForPalindrome("rotavator");
    expect(result).toStrictEqual([]);
  });
  it("should pass test 8", () => {
    const result = getIndexsForPalindrome("rotaratov");
    expect(result).toStrictEqual([4, 8]);
  });
  it("should pass test 9", () => {
    const result = getIndexsForPalindrome("saippuakivikauppias");
    expect(result).toStrictEqual([]);
  });
});
