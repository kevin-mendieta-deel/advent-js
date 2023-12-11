import { describe, expect, it } from "bun:test";

import { adjustLights } from "./switchTheLights";

describe("switch the lights problem tests", () => {
  it("should return a number", () => {
    const result = adjustLights(["🟢", "🔴"]);
    expect(result).toBeNumber();
  });
  it("should pass test 1", () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
    expect(result).toBe(1);
  });
  it("should pass test 2", () => {
    const result = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
    expect(result).toBe(2);
  });
  it("should pass test 3", () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
    expect(result).toBe(0);
  });
  it("should pass test 4", () => {
    const result = adjustLights(["🔴", "🔴", "🔴"]);
    expect(result).toBe(1);
  });
});
