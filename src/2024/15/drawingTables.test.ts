import { describe, expect, it } from "bun:test";

import { drawTable } from "./drawingTables";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = drawTable([{ name: "Alice", city: "London" }]);
    expect(result).toString();
  });
  it("should pass test 2", () => {
    const result = drawTable([{ name: "Alice", city: "London" }]);
    expect(result).toStrictEqual(
      "+-------+--------+\n| Name  | City   |\n+-------+--------+\n| Alice | London |\n+-------+--------+",
    );
  });
  it("should pass test 3", () => {
    const result = drawTable([
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
    ]);
    expect(result).toStrictEqual(
      "+-------+--------+\n| Name  | City   |\n+-------+--------+\n| Alice | London |\n| Bob   | Paris  |\n+-------+--------+",
    );
  });
  it("should pass test 4", () => {
    const result = drawTable([
      { gift: "Doll", quantity: 10 },
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
    ]);
    expect(result).toStrictEqual(
      "+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+",
    );
  });
  it("should pass test 5", () => {
    const result = drawTable([
      { id: 1, score: 95 },
      { id: 2, score: 85 },
    ]);
    expect(result).toStrictEqual(
      "+----+-------+\n| Id | Score |\n+----+-------+\n| 1  | 95    |\n| 2  | 85    |\n+----+-------+",
    );
  });
  it("should pass test 6", () => {
    const result = drawTable([
      { id: "midugato", isCat: true },
      { id: "miduperro", isCat: false },
    ]);
    expect(result).toStrictEqual(
      "+-----------+-------+\n| Id        | IsCat |\n+-----------+-------+\n| midugato  | true  |\n| miduperro | false |\n+-----------+-------+",
    );
  });
  it("should pass test 7", () => {
    const result = drawTable([
      { game: "indianajones", subtitle: "the game" },
      { game: "pokemonblue", subtitle: "" },
    ]);
    expect(result).toStrictEqual(
      "+--------------+----------+\n| Game         | Subtitle |\n+--------------+----------+\n| indianajones | the game |\n| pokemonblue  |          |\n+--------------+----------+",
    );
  });
});
