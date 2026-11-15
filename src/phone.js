// Kiem tra so dien thoai di dong Viet Nam.
export function isValidVNPhone(input) {
  return /^0\d{9}$/.test(input);
}
