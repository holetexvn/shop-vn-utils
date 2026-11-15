import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal } from '../src/cart.js';

test('tinh tam tinh va giam gia', () => {
  const r = cartTotal([{ price: 100000, qty: 2 }], 10);
  assert.equal(r.subtotal, 200000);
  assert.equal(r.discount, 20000);
  assert.equal(r.total, 210000);
});

test('#4 don dung 500.000d duoc mien phi ship', () => {
  const r = cartTotal([{ price: 250000, qty: 2 }]);
  assert.equal(r.ship, 0);
  assert.equal(r.total, 500000);
});
