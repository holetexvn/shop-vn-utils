import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidVNPhone } from '../src/phone.js';

test('#3 nhan dang +84, 84 va 0', () => {
  assert.equal(isValidVNPhone('0912345678'), true);
  assert.equal(isValidVNPhone('+84912345678'), true);
  assert.equal(isValidVNPhone('84912345678'), true);
  assert.equal(isValidVNPhone('0912 345 678'), true);
});

test('#3 tu choi so sai dau so hoac sai do dai', () => {
  assert.equal(isValidVNPhone('091234567'), false);
  assert.equal(isValidVNPhone('0112345678'), false);
});
