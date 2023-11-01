const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("Prime 29 should be Ture", () => {
    expect(lib.prime(29)).toBe(true);
});

test("Prime 17 should be Ture", () => {
    expect(lib.prime(29)).toBe(true);
});

test("Prime 15 should be False", () => {
    expect(lib.prime(15)).toBe(false);
});

test("Factorial 6 should be 720", () => {
    expect(lib.fact(6)).toBe(720);
});

test("Factorial 10 should be 3628800", () => {
    expect(lib.fact(10)).toBe(3628800);
});