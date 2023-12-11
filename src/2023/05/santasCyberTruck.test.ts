import { describe, expect, it } from "bun:test";

import { cyberReindeer } from "./santasCyberTruck";

describe("santas cyber truck problem tests", () => {
	it("should return a number", () => {
		const result = cyberReindeer("S..|...|..", 10);
		expect(result).toBeArray();
	});
	it("should pass test 1", () => {
		const result = cyberReindeer("S..|...|..", 10);
		expect(result).toStrictEqual([
			"S..|...|..",
			".S.|...|..",
			"..S|...|..",
			"..S|...|..",
			"..S|...|..",
			"...S...*..",
			"...*S..*..",
			"...*.S.*..",
			"...*..S*..",
			"...*...S..",
		]);
	});
	it("should pass test 2", () => {
		const result = cyberReindeer("S.|.", 4);
		expect(result).toStrictEqual(["S.|.", ".S|.", ".S|.", ".S|."]);
	});
	it("should pass test 3", () => {
		const result = cyberReindeer("S.|.|.", 7);
		expect(result).toStrictEqual([
			"S.|.|.",
			".S|.|.",
			".S|.|.",
			".S|.|.",
			".S|.|.",
			"..S.*.",
			"..*S*.",
		]);
	});
	it("should pass test 4", () => {
		const result = cyberReindeer("S.|..", 6);
		expect(result).toStrictEqual([
			"S.|..",
			".S|..",
			".S|..",
			".S|..",
			".S|..",
			"..S..",
		]);
	});
	it("should pass test 5", () => {
		const result = cyberReindeer("S.|.|.|......|.||.........", 8);
		expect(result).toStrictEqual([
			"S.|.|.|......|.||.........",
			".S|.|.|......|.||.........",
			".S|.|.|......|.||.........",
			".S|.|.|......|.||.........",
			".S|.|.|......|.||.........",
			"..S.*.*......*.**.........",
			"..*S*.*......*.**.........",
			"..*.S.*......*.**.........",
		]);
	});
});
