import { describe, expect, it } from "bun:test";

import { findFirstRepeated } from "./firstGiftRepeated";

describe("first repeated gift problem tests", () => {
	it("should return a number", () => {
		const result = findFirstRepeated([2, 1, 3, 5, 3, 2]);
		expect(result).toBeNumber();
	});
	it("should pass test 1", () => {
		const result = findFirstRepeated([2, 1, 3, 5, 3, 2]);
		expect(result).toBe(3);
	});
	it("should pass test 2", () => {
		const result = findFirstRepeated([2, 2]);
		expect(result).toBe(2);
	});
	it("should pass test 3", () => {
		const result = findFirstRepeated([2, 4, 3, 5, 1]);
		expect(result).toBe(-1);
	});
	it("should pass test 4", () => {
		const result = findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]);
		expect(result).toBe(1);
	});
	it("should pass test 5", () => {
		const result = findFirstRepeated([]);
		expect(result).toBe(-1);
	});
	it("should pass test 6", () => {
		const result = findFirstRepeated([10, 20, 30]);
		expect(result).toBe(-1);
	});
	it("should pass test 7", () => {
		const result = findFirstRepeated([5, 1, 2, 3, 2, 5, 1]);
		expect(result).toBe(2);
	});
	it("should pass test 8", () => {
		const result = findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]);
		expect(result).toBe(10);
	});
});
