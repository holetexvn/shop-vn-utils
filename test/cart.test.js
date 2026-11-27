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

test('#4 cac ca bien phi ship quanh moc 500.000d', () => {
  const below = cartTotal([{ price: 499999, qty: 1 }]);
  assert.equal(below.ship, 30000);
  assert.equal(below.total, 529999);

  const exactAfterCoupon = cartTotal([{ price: 625000, qty: 1 }], 20);
  assert.equal(exactAfterCoupon.ship, 0);
  assert.equal(exactAfterCoupon.total, 500000);

  const above = cartTotal([{ price: 500001, qty: 1 }]);
  assert.equal(above.ship, 0);
  assert.equal(above.total, 500001);
});
