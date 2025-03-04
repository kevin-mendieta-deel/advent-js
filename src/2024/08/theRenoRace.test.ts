import { describe, expect, it } from "bun:test";

import { drawRace } from "./theRenoRace";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = drawRace([0, 5, -3], 10);
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = drawRace([0, 5, -3], 10);
    expect(result).toStrictEqual(
      "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3",
    );
  });
  it("should pass test 3", () => {
    const result = drawRace([2, -1, 0, 5], 8);
    expect(result).toStrictEqual(
      "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4",
    );
  });
  it("should pass test 4", () => {
    const result = drawRace([3, 7, -2], 12);
    expect(result).toStrictEqual(
      "  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3",
    );
  });
  it("should pass test 5", () => {
    const result = drawRace([0, 0, 0], 6);
    expect(result).toStrictEqual("  ~~~~~~ /1\n ~~~~~~ /2\n~~~~~~ /3");
  });
  it("should pass test 6", () => {
    const result = drawRace([5, 3, -4], 9);
    expect(result).toStrictEqual("  ~~~~~r~~~ /1\n ~~~r~~~~~ /2\n~~~~~r~~~ /3");
  });
});
