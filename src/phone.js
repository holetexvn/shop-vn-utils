// Kiem tra so dien thoai di dong Viet Nam.
export function isValidVNPhone(input) {
  if (typeof input !== 'string') return false;

  const normalizedPhone = input.replace(/\s/g, '').replace(/^\+?84/, '0');
  return /^0[35789]\d{8}$/.test(normalizedPhone);
}
