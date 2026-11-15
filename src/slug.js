// Tao slug URL tu ten san pham tieng Viet.
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}
