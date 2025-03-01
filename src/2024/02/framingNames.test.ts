import { describe, expect, it } from "bun:test";

import { createFrame } from "./framingNames";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = createFrame(["midu"]);
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = createFrame(["midu"]);
    expect(result).toStrictEqual("********\n* midu *\n********");
  });
  it("should pass test 3", () => {
    const result = createFrame(["midu", "madeval", "educalvolpz"]);
    expect(result).toStrictEqual(
      "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************",
    );
  });
  it("should pass test 4", () => {
    const result = createFrame(["a", "bb", "ccc"]);
    expect(result).toStrictEqual("*******\n* a   *\n* bb  *\n* ccc *\n*******");
  });
  it("should pass test 5", () => {
    const result = createFrame(["a", "bb", "ccc", "dddd"]);
    expect(result).toStrictEqual(
      "********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********",
    );
  });
  it("should pass test 6", () => {
    const result = createFrame(["midu", "madeval", "educalvolpz", "midu"]);
    expect(result).toStrictEqual(
      "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************",
    );
  });
});
