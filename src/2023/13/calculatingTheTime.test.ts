import { describe, expect, it } from "bun:test";

import { calculateTime } from "./calculatingTheTime";

describe("calculating time problem tests", () => {
  it("should return a string", () => {
    const result = calculateTime(["00:10:00"]);
    expect(result).toBeString();
  });
  it("should pass test 1", () => {
    const result = calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
    expect(result).toBe("-02:20:00");
  });
  it("should pass test 2", () => {
    const result = calculateTime(["01:00:00", "05:00:00", "00:30:00"]);
    expect(result).toBe("-00:30:00");
  });
  it("should pass test 3", () => {
    const result = calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
    expect(result).toBe("00:30:00");
  });
  it("should pass test 4", () => {
    const result = calculateTime([
      "00:45:00",
      "00:45:00",
      "00:00:30",
      "00:00:30",
    ]);
    expect(result).toBe("-05:29:00");
  });
  it("should pass test 5", () => {
    const result = calculateTime(["02:00:00", "03:00:00", "02:00:00"]);
    expect(result).toBe("00:00:00");
  });
  it("should pass test 6", () => {
    const result = calculateTime(["01:01:01", "09:59:59", "01:01:01"]);
    expect(result).toBe("05:02:01");
  });
  it("should pass test 7", () => {
    const result = calculateTime([
      "01:01:01",
      "03:59:59",
      "01:01:01",
      "00:57:58",
    ]);
    expect(result).toBe("-00:00:01");
  });
});
