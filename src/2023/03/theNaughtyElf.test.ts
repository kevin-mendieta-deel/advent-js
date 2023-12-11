import { describe, expect, it } from "bun:test";

import { findNaughtyStep } from "./theNaughtyElf";

describe("the naughty elf problem tests", () => {
	it("should return a number", () => {
		const result = findNaughtyStep("abcd", "abcde");
		expect(result).toBeString();
	});
	it("should pass test 1", () => {
		const result = findNaughtyStep("abcd", "abcde");
		expect(result).toStrictEqual("e");
	});
	it("should pass test 2", () => {
		const result = findNaughtyStep("abcde", "abcd");
		expect(result).toStrictEqual("e");
	});
	it("should pass test 3", () => {
		const result = findNaughtyStep("xxxx", "xxoxx");
		expect(result).toStrictEqual("o");
	});
	it("should pass test 4", () => {
		const result = findNaughtyStep("stepfor", "stepor");
		expect(result).toStrictEqual("f");
	});
	it("should pass test 5", () => {
		const result = findNaughtyStep("iiiii", "iiiii");
		expect(result).toStrictEqual("");
	});
});
