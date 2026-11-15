import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slug.js';

test('#2 slugify bo dau tieng Viet', () => {
  assert.equal(slugify('Cà phê Đắk Lắk'), 'ca-phe-dak-lak');
  assert.equal(slugify('  Áo thun   NỮ  '), 'ao-thun-nu');
  assert.equal(slugify('Bánh mì 100% nhân thịt!'), 'banh-mi-100-nhan-thit');
});
