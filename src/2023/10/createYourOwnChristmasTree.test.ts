import { describe, expect, it } from "bun:test";

import { createChristmasTree } from "./createYourOwnChristmasTree";

describe("create your own christmas tree problem tests", () => {
  it("should return a string", () => {
    const result = createChristmasTree("x", 1);
    expect(result).toBeString();
  });
  it("should pass test 1", () => {
    const result = createChristmasTree("x", 3);
    expect(result).toStrictEqual("  x\n x x\nx x x\n  |\n");
  });
  it("should pass test 2", () => {
    const result = createChristmasTree("xo", 4);
    expect(result).toStrictEqual("   x\n  o x\n o x o\nx o x o\n   |\n");
  });
  it("should pass test 3", () => {
    const result = createChristmasTree("123", 5);
    expect(result).toStrictEqual(
      "    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n",
    );
  });
  it("should pass test 4", () => {
    const result = createChristmasTree("*@o", 3);
    expect(result).toStrictEqual("  *\n @ o\n* @ o\n  |\n");
  });
});
