// Tao slug URL tu ten san pham tieng Viet.
// Bo dau (NFD + xoa dau ket hop), doi đ/Đ thanh d, bo ky tu dac biet,
// gop khoang trang/dau gach lien tiep thanh mot dau gach, cat gach o hai dau.
export function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
