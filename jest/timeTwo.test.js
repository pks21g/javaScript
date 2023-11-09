// const { default: TestRunner } = require("jest-runner");

const timesTwo = require(`./timesTwo.js`);

// Write the first test
test('returns ...', () => {
    expect(timesTwo(10)).toBe(20)
});