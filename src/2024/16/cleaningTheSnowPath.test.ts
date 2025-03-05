import { describe, expect, it } from "bun:test";

import { removeSnow } from "./cleaningTheSnowPath";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = removeSnow("abbaca");
    expect(result).toString();
  });
  it("should pass test 2", () => {
    const result = removeSnow("abbaca");
    expect(result).toStrictEqual("ca");
  });
  it("should pass test 3", () => {
    const result = removeSnow("azxxzy");
    expect(result).toStrictEqual("ay");
  });
  it("should pass test 4", () => {
    const result = removeSnow("aabccba");
    expect(result).toStrictEqual("a");
  });
  it("should pass test 5", () => {
    const result = removeSnow("aaabbaacc");
    expect(result).toStrictEqual("a");
  });
  it("should pass test 6", () => {
    const result = removeSnow("xyzzy");
    expect(result).toStrictEqual("x");
  });
  it("should pass test 7", () => {
    const result = removeSnow("abbacddce");
    expect(result).toStrictEqual("e");
  });
  it("should pass test 8", () => {
    const result = removeSnow("");
    expect(result).toStrictEqual("");
  });
  it("should pass test 9", () => {
    const result = removeSnow("a");
    expect(result).toStrictEqual("a");
  });
  it("should pass test 10", () => {
    const result = removeSnow("aa");
    expect(result).toStrictEqual("");
  });
  it("should pass test 11", () => {
    const result = removeSnow("ab");
    expect(result).toStrictEqual("ab");
  });
  it("should pass test 12", () => {
    const result = removeSnow("abc");
    expect(result).toStrictEqual("abc");
  });
});
