import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatVND } from '../src/money.js';

test('#1 formatVND co dau cham va ky hieu ₫', () => {
  assert.equal(formatVND(1234567), '1.234.567 ₫');
  assert.equal(formatVND(0), '0 ₫');
  assert.equal(formatVND(999), '999 ₫');
});
