import { describe, expect, it } from "bun:test";

import { moveTrain } from "./theMagicTrain";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = moveTrain(
      ["·····", "··*··", "··@··", "··o··", "··o··"],
      "U",
    );
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = moveTrain(
      ["·····", "··*··", "··@··", "··o··", "··o··"],
      "U",
    );
    expect(result).toStrictEqual("eat");
  });
  it("should pass test 3", () => {
    const result = moveTrain(
      ["·····", "··*··", "··.··", "··o··", "··@··"],
      "D",
    );
    expect(result).toStrictEqual("crash");
  });
  it("should pass test 4", () => {
    const result = moveTrain(
      ["·····", "··*··", "··@··", "··o··", "··o··"],
      "D",
    );
    expect(result).toStrictEqual("crash");
  });
  it("should pass test 5", () => {
    const result = moveTrain(
      ["·····", "··*··", "··@··", "··o··", "··o··"],
      "R",
    );
    expect(result).toStrictEqual("none");
  });
  it("should pass test 6", () => {
    const result = moveTrain(
      ["··@··", "··o··", "·*o··", "··o··", "··o··"],
      "U",
    );
    expect(result).toStrictEqual("crash");
  });
  it("should pass test 7", () => {
    const result = moveTrain(
      ["··@··", "··o··", "·*o··", "··o··", "··o··"],
      "L",
    );
    expect(result).toStrictEqual("none");
  });
  it("should pass test 8", () => {
    const result = moveTrain(
      ["·····", "··@··", "··*··", "·····", "·····"],
      "D",
    );
    expect(result).toStrictEqual("eat");
  });
});
