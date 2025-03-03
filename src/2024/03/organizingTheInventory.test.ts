import { describe, expect, it } from "bun:test";

import { organizeInventory } from "./organizingTheInventory";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = organizeInventory([]);
    expect(result).toBeObject();
  });
  it("should pass test 2", () => {
    const result = organizeInventory([]);
    expect(result).toStrictEqual({});
  });
  it("should pass test 3", () => {
    const result = organizeInventory([
      { name: "doll", quantity: 5, category: "toys" },
    ]);
    expect(result).toStrictEqual({
      toys: {
        doll: 5,
      },
    });
  });
  it("should pass test 4", () => {
    const result = organizeInventory([
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ]);
    expect(result).toStrictEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
  it("should pass test 5", () => {
    const result = organizeInventory([
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ]);
    expect(result).toStrictEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });
});
