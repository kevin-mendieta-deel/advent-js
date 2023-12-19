import { describe, expect, it } from "bun:test";

import { transformTree } from "./fridayDeployment";

describe("friday deployment problem tests", () => {
  it("should return a number", () => {
    const result = transformTree([1]);
    expect(result).toBeTypeOf("object");
  });
  it("should pass test 1", () => {
    const result = transformTree([]);
    expect(result).toBeNull();
  });
  it("should pass test 2", () => {
    const result = transformTree([1]);
    expect(result).toStrictEqual({
      value: 1,
      left: null,
      right: null,
    });
  });
  it("should pass test 3", () => {
    const result = transformTree([1, 2, 3]);
    expect(result).toStrictEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    });
  });
  it("should pass test 4", () => {
    const result = transformTree([1, 2, 3, 4, 5]);
    expect(result).toStrictEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    });
  });
  it("should pass test 5", () => {
    const result = transformTree([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toStrictEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    });
  });
  it("should pass test 6", () => {
    const result = transformTree([17, 0, null, null, 1]);
    expect(result).toStrictEqual({
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: null,
    });
  });
  it("should pass test 7", () => {
    const result = transformTree([3, 1, 0, 8, 12, null, 1]);
    expect(result).toStrictEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 12,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    });
  });
  it("should pass test 8", () => {
    const result = transformTree([
      2,
      7,
      5,
      null,
      6,
      null,
      9,
      null,
      null,
      1,
      11,
      null,
      null,
      null,
      10,
    ]);
    expect(result).toStrictEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    });
  });
});
