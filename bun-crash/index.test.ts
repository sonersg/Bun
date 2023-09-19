import { describe, expect, beforeAll, test } from "bun:test";

beforeAll(() => {
    // set up test
});

describe("math", () => {
    test("addition", () => {
        expect(2 + 2).toBe(4);
    });
});

// $ bun test
