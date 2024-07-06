// Listing 6.16 The contents of the calc.test.ts file in the src folder

import { sum } from "./calc";

test("check result value", () => {
    let result = sum(10, 20, 30);
    expect(result).toBe(60);
})

// PASS  src/calc.test.ts
// √ check result value (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total