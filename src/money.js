// Dinh dang so tien VND de hien thi tren giao dien.
// Vi du: 1234567 -> "1.234.567 ₫" (dau cham phan cach hang nghin, ky hieu ₫ sau so).
export function formatVND(amount) {
  const rounded = Math.round(amount);
  const sign = rounded < 0 ? '-' : '';
  const digits = String(Math.abs(rounded)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${sign}${digits} ₫`;
}
