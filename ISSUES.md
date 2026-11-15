# 4 issue cho video Orca (tao tren GitHub truoc ngay quay)

## #1 formatVND hien sai: "1234567 VND"
Gia tren trang san pham hien "1234567 VND". Can hien "1.234.567 ₫" (dau cham phan cach hang nghin, ky hieu ₫ sau so, co dau cach). Test: test/money.test.js.

## #2 Slug san pham con dau tieng Viet
"Cà phê Đắk Lắk" dang ra slug "cà-phê-đắk-lắk". Can "ca-phe-dak-lak": bo dau, doi đ thanh d, bo ky tu dac biet, gop dau gach. Test: test/slug.test.js.

## #3 Form dat hang tu choi so +84
Khach nhap "+84912345678" hoac "0912 345 678" bi bao sai. Can nhan 0 / 84 / +84, bo khoang trang, chi nhan dau so di dong 03, 05, 07, 08, 09 va du 10 so (tinh ca so 0). Test: test/phone.test.js.

## #4 Don dung 500.000d van bi tinh ship
Mien phi ship tu 500.000d nhung don dung 500.000d van bi cong 30.000d. Test: test/cart.test.js.
