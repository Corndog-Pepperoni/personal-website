import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const pages = ['index.html', 'projects.html', 'experience.html', 'education.html', 'recognition.html', 'about.html', '404.html'];
const profile = JSON.parse(readFileSync('content/profile.json', 'utf8'));

test('the complete professional record is retained', () => {
  assert.equal(profile.experience.length, 4);
  assert.equal(profile.education.length, 5);
  assert.equal(profile.courses.length, 8);
  assert.equal(profile.certifications.length, 1);
  assert.equal(profile.honors.length, 4);
  assert.equal(profile.linkedinSkills.length, 39);
  assert.equal(profile.experience.find(item => item.id === 'pc-building').date, 'Sep 2020 — Aug 2026');
});

test('every page has a unique title, one h1, landmarks, and a skip link', () => {
  const titles = new Set();
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, `${page}: missing title`);
    assert.ok(!titles.has(title), `${page}: duplicated title`);
    titles.add(title);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, page);
    assert.match(html, /<main id="main"/);
    assert.match(html, /href="#main"/);
    assert.match(html, /<nav[^>]+aria-label="Main navigation"/);
  }
});

test('internal links, resources, and fragments resolve under a repository base path', () => {
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(value)) continue;
      assert.ok(!value.startsWith('/'), `${page}: root-relative ${value} breaks GitHub project Pages`);
      const [file, fragment] = value.split('#');
      const target = resolve(dirname(page), file || page);
      assert.ok(existsSync(target), `${page}: missing ${attribute} ${value}`);
      if (fragment) assert.match(readFileSync(target, 'utf8'), new RegExp(`id="${fragment}"`), `${page}: missing anchor ${value}`);
    }
  }
});

test('all detailed record entries are present in their destination pages', () => {
  for (const [collection, page, key] of [
    ['experience', 'experience.html', 'role'],
    ['education', 'education.html', 'name'],
    ['courses', 'education.html', 'name'],
    ['honors', 'recognition.html', 'name'],
    ['certifications', 'recognition.html', 'name'],
    ['projects', 'projects.html', 'name'],
  ]) {
    const html = readFileSync(page, 'utf8').replaceAll('&amp;', '&').replaceAll('&#39;', "'");
    for (const entry of profile[collection]) assert.ok(html.includes(entry[key]), `${page}: missing ${entry[key]}`);
  }
  const experience = readFileSync('experience.html', 'utf8');
  for (const skill of profile.linkedinSkills) assert.ok(experience.includes(skill), `Missing skill: ${skill}`);
});

test('contact privacy is preserved throughout all public pages and data', () => {
  for (const file of [...pages, 'content/profile.json']) {
    const text = readFileSync(file, 'utf8');
    assert.doesNotMatch(text, /tel:|\b\d{3}[-. ]\d{3}[-. ]\d{4}\b|conor-pedroche-a16b843a9/i, file);
  }
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /mailto:business\.pedroche@gmail\.com/);
  assert.match(html, /assets\/Conor-Pedroche-Resume\.pdf/);
});
