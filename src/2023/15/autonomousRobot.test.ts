import { describe, expect, it } from "bun:test";

import { autonomousDrive } from "./autonomousRobot";

describe("autonomous robot problem tests", () => {
  it("should return a number", () => {
    const result = autonomousDrive([".!."], ["R"]);
    expect(result).toBeArray();
  });
  it("should pass test 1", () => {
    const result = autonomousDrive(["..!...."], ["R", "L"]);
    expect(result).toStrictEqual(["..!...."]);
  });
  it("should pass test 2", () => {
    const result = autonomousDrive(["!..", "***"], ["R", "L"]);
    expect(result).toStrictEqual(["!..", "***"]);
  });
  it("should pass test 3", () => {
    const result = autonomousDrive(["..!....", "......*"], ["R", "D", "L"]);
    expect(result).toStrictEqual([".......", "..!...*"]);
  });
  it("should pass test 4", () => {
    const result = autonomousDrive(
      ["*..!..*", "*.....*"],
      ["R", "R", "D", "D"],
    );
    expect(result).toStrictEqual(["*.....*", "*....!*"]);
  });
  it("should pass test 5", () => {
    const result = autonomousDrive(
      ["***", ".!.", "***"],
      ["D", "U", "R", "R", "R"],
    );
    expect(result).toStrictEqual(["***", "..!", "***"]);
  });
  it("should pass test 6", () => {
    const result = autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"]);
    expect(result).toStrictEqual(["***", "*!*", "***"]);
  });
  it("should pass test 7", () => {
    const result = autonomousDrive(
      [".**.*.*.", ".***....", "..!....."],
      ["D", "U", "R", "R", "R"],
    );
    expect(result).toStrictEqual([".**.*.*.", ".***....", ".....!.."]);
  });
});
