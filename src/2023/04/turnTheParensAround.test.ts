import { describe, expect, it } from "bun:test";

import { decode } from "./turnTheParensAround";

describe("turn the parens around problem tests", () => {
  it("should return a number", () => {
    const result = decode("hola (odnum)");
    expect(result).toBeString();
  });
  it("should pass test 1", () => {
    const result = decode("hola (odnum)");
    expect(result).toStrictEqual("hola mundo");
  });
  it("should pass test 2", () => {
    const result = decode("(olleh) (dlrow)!");
    expect(result).toStrictEqual("hello world!");
  });
  it("should pass test 3", () => {
    const result = decode("sa(u(cla)atn)s");
    expect(result).toStrictEqual("santaclaus");
  });
  it("should pass test 4", () => {
    const result = decode("((nta)(sa))");
    expect(result).toStrictEqual("santa");
  });
});
