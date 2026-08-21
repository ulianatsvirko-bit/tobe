import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const app = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');

test('all Motion components run in stable reduced-motion mode', () => {
  assert.match(app, /MotionConfig/);
  assert.match(app, /reducedMotion="always"/);
  assert.match(app, /transition=\{\{ duration: 0 \}\}/);
});

test('global CSS prevents delayed, looping and flickering transitions', () => {
  assert.match(css, /animation-duration: 0\.01ms !important/);
  assert.match(css, /animation-iteration-count: 1 !important/);
  assert.match(css, /transition-duration: 0\.01ms !important/);
  assert.match(css, /transition-delay: 0ms !important/);
});

test('scrolling stays smooth without hiding or fading content', () => {
  assert.match(css, /scroll-behavior: smooth/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});
