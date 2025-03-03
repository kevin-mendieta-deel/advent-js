import { describe, expect, it } from "bun:test";

import { inBox } from "./isTheGiftInsideTheBox";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = inBox(["###", "#*#", "###"]);
    expect(result).toBeBoolean();
  });
  it("should pass test 2", () => {
    const result = inBox(["###", "#*#", "###"]);
    expect(result).toStrictEqual(true);
  });
  it("should pass test 3", () => {
    const result = inBox(["#*#", "###", "###"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 4", () => {
    const result = inBox(["###", "# #", "###"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 5", () => {
    const result = inBox(["####", "#* #", "#  #", "####"]);
    expect(result).toStrictEqual(true);
  });
  it("should pass test 6", () => {
    const result = inBox(["#####", "#   #", "#  #*", "####"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 7", () => {
    const result = inBox(["#####", "#   #", "#   #", "#   #", "#####"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 8", () => {
    const result = inBox(["#####", "#   #", "#   #", "*#  #", "#####"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 9", () => {
    const result = inBox(["##*##", "#   #", "#   #", "#   #", "#####"]);
    expect(result).toStrictEqual(false);
  });
  it("should pass test 10", () => {
    const result = inBox(["####", "#  #", "##*#"]);
    expect(result).toStrictEqual(false);
  });
});
