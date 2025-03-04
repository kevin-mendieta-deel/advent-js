import { describe, expect, it } from "bun:test";

import { compile } from "./theElfishAssembler";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = compile(["MOV 0 A", "INC A"]);
    expect(result).toBeNumber();
  });
  it("should pass test 2", () => {
    const result = compile(["MOV 0 A", "INC A"]);
    expect(result).toStrictEqual(1);
  });
  it("should pass test 3", () => {
    const result = compile(["INC A", "INC A", "DEC A", "MOV A B"]);
    expect(result).toStrictEqual(1);
  });
  it("should pass test 4", () => {
    const result = compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"]);
    expect(result).toStrictEqual(5);
  });
  it("should pass test 5", () => {
    const result = compile(["INC C", "DEC B", "MOV C Y", "INC Y"]);
    expect(result).toBeUndefined();
  });
  it("should pass test 6", () => {
    const result = compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"]);
    expect(result).toStrictEqual(-2);
  });
  it("should pass test 7", () => {
    const result = compile([
      "MOV 3 C",
      "DEC C",
      "DEC C",
      "DEC C",
      "JMP C 3",
      "MOV C A",
    ]);
    expect(result).toStrictEqual(-1);
  });
});
