// Tinh tong don hang: tam tinh, giam gia theo %, phi ship.
export const FREE_SHIP_FROM = 500000;
export const SHIP_FEE = 30000;

export function cartTotal(items, couponPercent = 0) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const discount = Math.round((subtotal * couponPercent) / 100);
  const afterDiscount = subtotal - discount;
  const ship = afterDiscount >= FREE_SHIP_FROM ? 0 : SHIP_FEE;
  return { subtotal, discount, ship, total: afterDiscount + ship };
}
