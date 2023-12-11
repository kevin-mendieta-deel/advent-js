import { describe, expect, it } from "bun:test";

import { manufacture } from "./weStartTheFactory";

describe("we start the factory problem tests", () => {
  it("should return a number", () => {
    const result = manufacture(["tren", "oso", "pelota"], "tronesa");
    expect(result).toBeArray();
  });
  it("should pass test 1", () => {
    const result = manufacture(["tren", "oso", "pelota"], "tronesa");
    expect(result).toStrictEqual(["tren", "oso"]);
  });
  it("should pass test 2", () => {
    const result = manufacture(["coche", "muñeca", "balon"], "ocmuñalb");
    expect(result).toStrictEqual([]);
  });
  it("should pass test 3", () => {
    const result = manufacture(["patineta", "robot", "libro"], "nopor");
    expect(result).toStrictEqual([]);
  });
  it("should pass test 4", () => {
    const result = manufacture([], "letras");
    expect(result).toStrictEqual([]);
  });
});
