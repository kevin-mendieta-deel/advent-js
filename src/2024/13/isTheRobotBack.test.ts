import { describe, expect, it } from "bun:test";

import { isRobotBack } from "./isTheRobotBack";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    let result = isRobotBack("R");
    expect(result).toBeArray();
    result = isRobotBack("RL");
    expect(result).toBeBoolean();
  });
  it("should pass test 2", () => {
    const result = isRobotBack("R");
    expect(result).toStrictEqual([1, 0]);
  });
  it("should pass test 3", () => {
    const result = isRobotBack("RL");
    expect(result).toStrictEqual(true);
  });
  it("should pass test 4", () => {
    const result = isRobotBack("RLUD");
    expect(result).toStrictEqual(true);
  });
  it("should pass test 5", () => {
    const result = isRobotBack("*RU");
    expect(result).toStrictEqual([2, 1]);
  });
  it("should pass test 6", () => {
    const result = isRobotBack("R*U");
    expect(result).toStrictEqual([1, 2]);
  });
  it("should pass test 7", () => {
    const result = isRobotBack("LLL!R");
    expect(result).toStrictEqual([-4, 0]);
  });
  it("should pass test 8", () => {
    const result = isRobotBack("R?R");
    expect(result).toStrictEqual([1, 0]);
  });
  it("should pass test 9", () => {
    const result = isRobotBack("U?D");
    expect(result).toStrictEqual(true);
  });
  it("should pass test 10", () => {
    const result = isRobotBack("R!L");
    expect(result).toStrictEqual([2, 0]);
  });
  it("should pass test 11", () => {
    const result = isRobotBack("U!D");
    expect(result).toStrictEqual([0, 2]);
  });
  it("should pass test 12", () => {
    const result = isRobotBack("R?L");
    expect(result).toStrictEqual(true);
  });
  it("should pass test 13", () => {
    const result = isRobotBack("U?U");
    expect(result).toStrictEqual([0, 1]);
  });
});
