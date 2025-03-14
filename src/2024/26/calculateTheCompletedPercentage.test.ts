import { describe, expect, it } from "bun:test";

import { getCompleted } from "./calculateTheCompletedPercentage";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = getCompleted("01:00:00", "03:00:00");
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = getCompleted("01:00:00", "03:00:00");
    expect(result).toStrictEqual("33%");
  });
  it("should pass test 3", () => {
    const result = getCompleted("02:00:00", "04:00:00");
    expect(result).toStrictEqual("50%");
  });
  it("should pass test 4", () => {
    const result = getCompleted("01:00:00", "01:00:00");
    expect(result).toStrictEqual("100%");
  });
  it("should pass test 5", () => {
    const result = getCompleted("00:10:00", "01:00:00");
    expect(result).toStrictEqual("17%");
  });
  it("should pass test 6", () => {
    const result = getCompleted("01:10:10", "03:30:30");
    expect(result).toStrictEqual("33%");
  });
  it("should pass test 7", () => {
    const result = getCompleted("03:30:30", "05:50:50");
    expect(result).toStrictEqual("60%");
  });
  it("should pass test 8", () => {
    const result = getCompleted("00:00:00", "01:00:00");
    expect(result).toStrictEqual("0%");
  });
  it("should pass test 9", () => {
    const result = getCompleted("00:00:01", "00:00:02");
    expect(result).toStrictEqual("50%");
  });
  it("should pass test 10", () => {
    const result = getCompleted("23:59:59", "24:00:00");
    expect(result).toStrictEqual("100%");
  });
});
