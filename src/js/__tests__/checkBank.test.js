import checkBank from '../checkBank';

test.each([
  ['666', false],
  ['1234567890', false],
  ['01020304050607080900', false],
  ['3530111333300000', 'jcb'],
  ['2200000000000053', 'mir'],
  ['4111111111111111', 'visa'],
  ['5555555555555599', 'master'],
])('check banks', (obj, expected) => {
  const result = checkBank(obj);
  expect(result).toBe(expected);
});
