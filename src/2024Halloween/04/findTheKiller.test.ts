import { describe, expect, it } from "bun:test";

import { findTheKiller } from "./findTheKiller";

describe("Find The Killer problem tests", () => {
  it("should pass test 1", () => {
    const result = findTheKiller("d~~~~~a", [
      "Dracula",
      "Freddy Krueger",
      "Jason Voorhees",
      "Michael Myers",
    ]);
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = findTheKiller("d~~~~~a", [
      "Dracula",
      "Freddy Krueger",
      "Jason Voorhees",
      "Michael Myers",
    ]);
    expect(result).toStrictEqual("Dracula");
  });
  it("should pass test 3", () => {
    const result = findTheKiller("~r~dd~", ["Freddy", "Freddier", "Fredderic"]);
    expect(result).toStrictEqual("Freddy,Freddier,Fredderic");
  });
  it("should pass test 4", () => {
    const result = findTheKiller("~r~dd$", ["Freddy", "Freddier", "Fredderic"]);
    expect(result).toStrictEqual("");
  });
  it("should pass test 5", () => {
    const result = findTheKiller("mi~~def", ["Midudev", "Midu", "Madeval"]);
    expect(result).toStrictEqual("");
  });
  it("should pass test 6", () => {
    const result = findTheKiller("~~~~~~", [
      "Pennywise",
      "Leatherface",
      "Agatha",
    ]);
    expect(result).toStrictEqual("Pennywise,Leatherface,Agatha");
  });
  it("should pass test 7", () => {
    const result = findTheKiller("~~~~~~$", [
      "Pennywise",
      "Leatherface",
      "Agatha",
    ]);
    expect(result).toStrictEqual("Agatha");
  });
  it("should pass test 8", () => {
    const result = findTheKiller("s~v~r~", [
      "Severus Snape",
      "Sirius Black",
      "Salazar Slytherin",
    ]);
    expect(result).toStrictEqual("Severus Snape");
  });
  it("should pass test 9", () => {
    const result = findTheKiller("~~~~~y$", [
      "Chucky",
      "Tiffany",
      "Freddy",
      "Mickey",
    ]);
    expect(result).toStrictEqual("Chucky,Freddy,Mickey");
  });
});
