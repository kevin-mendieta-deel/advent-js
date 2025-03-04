import { describe, expect, it } from "bun:test";

import { decodeFilename } from "./filenamesEncoded";

describe("framing names problem tests", () => {
  it("should pass test 1", () => {
    const result = decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
    expect(result).toBeString();
  });
  it("should pass test 2", () => {
    const result = decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
    expect(result).toStrictEqual("sleighDesign.png");
  });
  it("should pass test 3", () => {
    const result = decodeFilename("42_chimney_dimensions.pdf.hack2023");
    expect(result).toStrictEqual("chimney_dimensions.pdf");
  });
  it("should pass test 4", () => {
    const result = decodeFilename("987654321_elf-roster.csv.tempfile");
    expect(result).toStrictEqual("elf-roster.csv");
  });
  it("should pass test 5", () => {
    const result = decodeFilename(
      "2024120912345678_magic_wand-blueprint.jpg.grinchbackup",
    );
    expect(result).toStrictEqual("magic_wand-blueprint.jpg");
  });
  it("should pass test 6", () => {
    const result = decodeFilename("51231_trainSchedule.txt.extra");
    expect(result).toStrictEqual("trainSchedule.txt");
  });
});
