import { describe, expect, it } from "bun:test";

import { createXmasTree } from "./decoratingTheChristmasThree";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = createXmasTree(3, "*");
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = createXmasTree(3, "*");
    expect(result).toStrictEqual("__*__\n_***_\n*****\n__#__\n__#__");
  });
  it("should pass test 3", () => {
    const result = createXmasTree(5, "+");
    expect(result).toStrictEqual(
      "____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____",
    );
  });
  it("should pass test 4", () => {
    const result = createXmasTree(6, "@");
    expect(result).toStrictEqual(
      "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____",
    );
  });
  it("should pass test 5", () => {
    const result = createXmasTree(1, "*");
    expect(result).toStrictEqual("*\n#\n#");
  });
  it("should pass test 6", () => {
    const result = createXmasTree(4, "#");
    expect(result).toStrictEqual(
      "___#___\n__###__\n_#####_\n#######\n___#___\n___#___",
    );
  });
});
