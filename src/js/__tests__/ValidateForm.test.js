/**
 * @jest-environment jsdom
 */

import CheckCardFormWidget from '../CheckCardFormWidget';

test.each([
  ['666', false],
  ['1234567890', false],
  ['01020304050607080900', false],
  ['3530111333300000', true],
  ['2200000000000053', true],
  ['4111111111111111', true],
  ['5555555555555599', true],
])('validate input each', (obj, expected) => {
  document.body.innerHTML = '<div class="validate-form"></div>';
  const div = document.querySelector('.validate-form');

  const widget = new CheckCardFormWidget(div);
  widget.bindToDOM();

  const input = div.querySelector(CheckCardFormWidget.inputSelector);

  input.value = obj;

  const submit = div.querySelector(CheckCardFormWidget.submitSelector);
  submit.click();

  const succes = div.querySelector('.luhn-succes');

  expect(succes.classList.contains('display')).toBe(expected);
});
