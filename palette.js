export function paletteFromHue(h) {
  if (h < 120) return 0;
  if (h < 200) return 1;
  if (h < 280) return 2;
  return 3;
}
