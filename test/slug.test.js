import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slug.js';

test('#2 slugify bo dau tieng Viet', () => {
  assert.equal(slugify('Cà phê Đắk Lắk'), 'ca-phe-dak-lak');
  assert.equal(slugify('  Áo thun   NỮ  '), 'ao-thun-nu');
  assert.equal(slugify('Bánh mì 100% nhân thịt!'), 'banh-mi-100-nhan-thit');
});

test('#2 slugify ca bien cung loai', () => {
  // Dau gach va ky tu dac biet lien tiep gop lai, cat o hai dau
  assert.equal(slugify('--Trà   sữa -- trân châu--'), 'tra-sua-tran-chau');
  assert.equal(slugify('Đồ ăn_vặt / Đà Nẵng'), 'do-an-vat-da-nang');
  // Chuoi da o dang NFD (go tu macOS) cho cung ket qua voi NFC
  assert.equal(slugify('Cà phê Đắk Lắk'.normalize('NFD')), 'ca-phe-dak-lak');
  // Du cac dau thanh va nguyen am mu
  assert.equal(slugify('Ỷ Ở Ữ Ợ Ậ Ẵ Ệ Ỗ Ự'), 'y-o-u-o-a-a-e-o-u');
  // Chi ky tu dac biet -> rong
  assert.equal(slugify('!!!'), '');
});
