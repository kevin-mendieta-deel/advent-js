import { describe, expect, it } from "bun:test";

import { battleHorde } from "./zombieHorde";

describe("zombie horde problem tests", () => {
  it("should pass test 1", () => {
    const result = battleHorde("242", "334");
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = battleHorde("242", "334");
    expect(result).toStrictEqual("2h");
  });
  it("should pass test 3", () => {
    const result = battleHorde("444", "282");
    expect(result).toStrictEqual("x");
  });
  it("should pass test 4", () => {
    const result = battleHorde("555", "666");
    expect(result).toStrictEqual("3h");
  });
  it("should pass test 5", () => {
    const result = battleHorde("321", "123");
    expect(result).toStrictEqual("x");
  });
  it("should pass test 6", () => {
    const result = battleHorde("4598", "7682");
    expect(result).toStrictEqual("3z");
  });
  it("should pass test 7", () => {
    const result = battleHorde("8989898999", "7779998811");
    expect(result).toStrictEqual("20z");
  });
  it("should pass test 8", () => {
    const result = battleHorde("57685849323", "98765438965");
    expect(result).toStrictEqual("10h");
  });
});
