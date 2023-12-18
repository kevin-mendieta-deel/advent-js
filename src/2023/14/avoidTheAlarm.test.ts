import { describe, expect, it } from "bun:test";

import { maxGifts } from "./avoidTheAlarm";

describe("avoid the alarm problem tests", () => {
  it("should return a number", () => {
    const result = maxGifts([1]);
    expect(result).toBeNumber();
  });
  it("should pass test 1", () => {
    const result = maxGifts([1, 2, 3, 1]);
    expect(result).toBe(4);
  });
  it("should pass test 2", () => {
    const result = maxGifts([2, 7, 9, 3, 1]);
    expect(result).toBe(12);
  });
  it("should pass test 3", () => {
    const result = maxGifts([0, 0, 0, 0, 1]);
    expect(result).toBe(1);
  });
  it("should pass test 4", () => {
    const result = maxGifts([100]);
    expect(result).toBe(100);
  });
  it("should pass test 5", () => {
    const result = maxGifts([1, 1, 1, 1]);
    expect(result).toBe(2);
  });
  it("should pass test 6", () => {
    const result = maxGifts([1, 1, 1]);
    expect(result).toBe(2);
  });
  it("should pass test 7", () => {
    const result = maxGifts([3, 4, 5]);
    expect(result).toBe(8);
  });
  it("should pass test 8", () => {
    const result = maxGifts([99]);
    expect(result).toBe(99);
  });
});
