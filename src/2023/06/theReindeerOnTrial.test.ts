import { describe, expect, it } from "bun:test";

import { maxDistance } from "./theReindeerOnTrial";

describe("the reindeer on trial problem tests", () => {
	it("should return a number", () => {
		const result = maxDistance(">>*<");
		expect(result).toBeNumber();
	});
	it("should pass test 1", () => {
		const result = maxDistance(">>*<");
		expect(result).toBe(2);
	});
	it("should pass test 2", () => {
		const result = maxDistance("<<<<<");
		expect(result).toBe(5);
	});
	it("should pass test 3", () => {
		const result = maxDistance(">***>");
		expect(result).toBe(5);
	});
	it("should pass test 4", () => {
		const result = maxDistance("**********");
		expect(result).toBe(10);
	});
	it("should pass test 5", () => {
		const result = maxDistance("<<**>>");
		expect(result).toBe(2);
	});
});
