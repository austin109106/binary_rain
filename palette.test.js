import test from 'node:test';
import assert from 'node:assert';
import { paletteFromHue } from './palette.js';

test('paletteFromHue returns correct index around thresholds', () => {
  assert.strictEqual(paletteFromHue(119), 0);
  assert.strictEqual(paletteFromHue(120), 1);
  assert.strictEqual(paletteFromHue(199), 1);
  assert.strictEqual(paletteFromHue(200), 2);
  assert.strictEqual(paletteFromHue(279), 2);
  assert.strictEqual(paletteFromHue(280), 3);
});
