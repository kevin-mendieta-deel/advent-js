import { describe, expect, it } from "bun:test";

import { checkIsValidCopy } from "./isItAValidCopy";

describe("is it a valid copy problem tests", () => {
  it("should return a boolean", () => {
    const result = checkIsValidCopy("a", "#");
    expect(result).toBeBoolean();
  });
  it("should pass test 1", () => {
    const result = checkIsValidCopy(
      "Santa Claus is coming",
      "sa#ta cl#us is comin#",
    );
    expect(result).toBeTrue();
  });
  it("should pass test 2", () => {
    const result = checkIsValidCopy(
      "Santa Claus is coming",
      "p#nt: cla#s #s c+min#",
    );
    expect(result).toBeFalse();
  });
  it("should pass test 3", () => {
    const result = checkIsValidCopy("Santa Claus", " Santa Claus ");
    expect(result).toBeFalse();
  });
  it("should pass test 4", () => {
    const result = checkIsValidCopy("Santa Claus", "###:. c:+##");
    expect(result).toBeTrue();
  });
  it("should pass test 5", () => {
    const result = checkIsValidCopy("Santa Claus", "sant##claus+");
    expect(result).toBeFalse();
  });
  it("should pass test 6", () => {
    const result = checkIsValidCopy("Santa Claus", "s#+:. c:. s");
    expect(result).toBeTrue();
  });
  it("should pass test 7", () => {
    const result = checkIsValidCopy("Santa Claus", "s#+:.#c:. s");
    expect(result).toBeFalse();
  });
  it("should pass test 8", () => {
    const result = checkIsValidCopy("Santa Claus", "SantA ClauS");
    expect(result).toBeFalse();
  });
  it("should pass test 9", () => {
    const result = checkIsValidCopy("3 #egalos", "3 .+:# #:");
    expect(result).toBeTrue();
  });
  it("should pass test 10", () => {
    const result = checkIsValidCopy("3 regalos", "3        ");
    expect(result).toBeTrue();
  });
  it("should pass test 11", () => {
    const result = checkIsValidCopy("3 regalos 3", "3 .+:# #: 3");
    expect(result).toBeTrue();
  });
  it("should pass test 12", () => {
    const result = checkIsValidCopy(
      "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños",
      "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño",
    );
    expect(result).toBeFalse();
  });
});
