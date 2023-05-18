import checkLuhn from '../checkLuhn';

test.each([
  ['666', false],
  ['1234567890', false],
  ['01020304050607080900', false],
  ['3530111333300000', true],
  ['2200000000000053', true],
  ['4111111111111111', true],
  ['5555555555555599', true],
])('Luhn algorithm', (obj, expected) => {
  const result = checkLuhn(obj);
  expect(result).toBe(expected);
});
