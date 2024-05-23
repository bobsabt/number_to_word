import { expect, test } from 'vitest'
import { numberTostring } from './numberTostring'

test("seven", () => {
    const resultNumberToString = numberTostring("7");
    expect(resultNumberToString).toBe("seven");
});

test("forty-two", () => {
    const resultNumberToString = numberTostring("42");
    expect(resultNumberToString).toBe("forty-two");
});

test("one thousand nine hundred and ninety-nine", () => {
    const resultNumberToString = numberTostring("1999");
    expect(resultNumberToString).toBe("one thousand nine hundred and ninety-nine");
});

test("two thousand and one", () => {
    const resultNumberToString = numberTostring("2001");
    expect(resultNumberToString).toBe("two thousand and one");
});

test("seventeen thousand nine hundred and ninety-nine", () => {
    const resultNumberToString = numberTostring("17999");
    expect(resultNumberToString).toBe("seventeen thousand nine hundred and ninety-nine");
});

test("three hundred and forty-two thousand two hundred and fifty-one", () => {
    const resultNumberToString = numberTostring("342251");
    expect(resultNumberToString).toBe("three hundred and forty-two thousand two hundred and fifty-one");
});

test("one million three hundred thousand four hundred and twenty", () => {
    const resultNumberToString = numberTostring("1300420");
    expect(resultNumberToString).toBe("one million three hundred thousand four hundred and twenty");
});

test("zero", () => {
    const resultNumberToString = numberTostring("0");
    expect(resultNumberToString).toBe("zero");
});

test("Too long number", () => {
    const resultNumberToString = numberTostring("13004202222222222");
    expect(resultNumberToString).toBe("Too long number");
});

test("one thousand", () => {
    const resultNumberToString = numberTostring("1000");
    expect(resultNumberToString).toBe("one thousand");
});

test("three million", () => {
    const resultNumberToString = numberTostring("3000000");
    expect(resultNumberToString).toBe("three million");
});

test("sixteen", () => {
    const resultNumberToString = numberTostring("16");
    expect(resultNumberToString).toBe("sixteen");
});

test("eighty", () => {
    const resultNumberToString = numberTostring("80");
    expect(resultNumberToString).toBe("eighty");
});

test("one billion", () => {
    const resultNumberToString = numberTostring("1000000000");
    expect(resultNumberToString).toBe("one billion");
});

test("twelve billion three hundred and forty-five million six hundred and seventy-eight thousand nine hundred and two", () => {
    const resultNumberToString = numberTostring("12345678902");
    expect(resultNumberToString).toBe("twelve billion three hundred and forty-five million six hundred and seventy-eight thousand nine hundred and two");
});