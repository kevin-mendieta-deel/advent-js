import { describe, expect, it } from "bun:test";

import { distributeWeight } from "./stackMagicalBoxes";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = distributeWeight(1);
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = distributeWeight(1);
    expect(result).toStrictEqual(" _ \n|_|");
  });
  it("should pass test 3", () => {
    const result = distributeWeight(2);
    expect(result).toStrictEqual(" ___ \n|___|");
  });
  it("should pass test 4", () => {
    const result = distributeWeight(3);
    expect(result).toStrictEqual(" _ \n|_|_\n|___|");
  });
  it("should pass test 5", () => {
    const result = distributeWeight(4);
    expect(result).toStrictEqual(" ___ \n|___|\n|___|");
  });
  it("should pass test 6", () => {
    const result = distributeWeight(5);
    expect(result).toStrictEqual(" _____ \n|     |\n|_____|");
  });
  it("should pass test 7", () => {
    const result = distributeWeight(6);
    expect(result).toStrictEqual(" _ \n|_|___\n|     |\n|_____|");
  });
  it("should pass test 8", () => {
    const result = distributeWeight(7);
    expect(result).toStrictEqual(" ___ \n|___|_\n|     |\n|_____|");
  });
  it("should pass test 9", () => {
    const result = distributeWeight(18);
    expect(result).toStrictEqual(
      " _ \n|_|_\n|___|_\n|     |\n|_____|___\n|         |\n|_________|",
    );
  });
  it("should pass test 10", () => {
    const result = distributeWeight(121);
    expect(result).toStrictEqual(
      " _ \n|_|_______\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|",
    );
  });
});
