import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatVND } from '../src/money.js';

test('#1 formatVND co dau cham va ky hieu ₫', () => {
  assert.equal(formatVND(1234567), '1.234.567 ₫');
  assert.equal(formatVND(0), '0 ₫');
  assert.equal(formatVND(999), '999 ₫');
});

test('#1 formatVND ca bien: moc nghin, lam tron, so am, so lon', () => {
  assert.equal(formatVND(1000), '1.000 ₫');
  assert.equal(formatVND(100000), '100.000 ₫');
  assert.equal(formatVND(1000000), '1.000.000 ₫');
  assert.equal(formatVND(1234.6), '1.235 ₫');
  assert.equal(formatVND(999.5), '1.000 ₫');
  assert.equal(formatVND(-50000), '-50.000 ₫');
  assert.equal(formatVND(-0.2), '0 ₫');
  assert.equal(formatVND(1234567890123), '1.234.567.890.123 ₫');
});
