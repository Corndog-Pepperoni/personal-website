import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const origin = process.env.SITE_URL || 'http://localhost:4173/';
const pages = ['index.html', 'projects.html', 'experience.html', 'education.html', 'recognition.html', 'about.html', '404.html'];
const paths = new Set(pages);
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, value] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (!/^(https?:|mailto:)/.test(value)) paths.add(value.split('#')[0]);
  }
}
for (const [, value] of readFileSync('styles.css', 'utf8').matchAll(/url\(["']?([^"')]+)["']?\)/g)) paths.add(value);
const results = await Promise.all([...paths].map(async path => {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  const bytes = (await response.arrayBuffer()).byteLength;
  assert.ok(bytes > 0, `${path}: empty response`);
  if (path.endsWith('.pdf')) assert.match(response.headers.get('content-type'), /application\/pdf/);
  return bytes;
}));
const missing = await fetch(new URL('page-that-does-not-exist.html', origin));
assert.equal(missing.status, 404);
assert.match(await missing.text(), /This page took/);
console.log(`${paths.size} pages and assets returned HTTP 200 (${Math.ceil(results.reduce((a, b) => a + b, 0) / 1024)} KB total). Missing page returned the custom HTTP 404.`);
