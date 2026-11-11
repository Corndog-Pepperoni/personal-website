import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { home } from "../scripts/pages/home.mjs";
import { projects } from "../scripts/pages/record.mjs";
import { escape } from "../scripts/layout.mjs";

const pages = [
  "index.html",
  "projects.html",
  "experience.html",
  "education.html",
  "recognition.html",
  "about.html",
  "404.html",
];
const profile = JSON.parse(readFileSync("content/profile.json", "utf8"));

test("the complete professional record is retained", () => {
  assert.equal(profile.experience.length, 4);
  assert.equal(profile.education.length, 5);
  assert.equal(profile.courses.length, 8);
  assert.equal(profile.certifications.length, 1);
  assert.equal(profile.honors.length, 4);
  assert.equal(profile.linkedinSkills.length, 39);
  assert.equal(
    profile.experience.find((item) => item.id === "pc-building").date,
    "Sep 2020 — Aug 2026",
  );
});

test("every page has a unique title, one h1, landmarks, and a skip link", () => {
  const titles = new Set();
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
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

test("internal links, resources, and fragments resolve under a repository base path", () => {
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    for (const [, attribute, value] of html.matchAll(
      /\b(href|src)="([^"]+)"/g,
    )) {
      if (/^(https?:|mailto:|data:)/.test(value)) continue;
      assert.ok(
        !value.startsWith("/"),
        `${page}: root-relative ${value} breaks GitHub project Pages`,
      );
      const [file, fragment] = value.split("#");
      const target = resolve(dirname(page), file || page);
      assert.ok(existsSync(target), `${page}: missing ${attribute} ${value}`);
      if (fragment)
        assert.match(
          readFileSync(target, "utf8"),
          new RegExp(`id="${fragment}"`),
          `${page}: missing anchor ${value}`,
        );
    }
  }
});

test("all detailed record entries are present in their destination pages", () => {
  for (const [collection, page, key] of [
    ["experience", "experience.html", "role"],
    ["education", "education.html", "name"],
    ["courses", "education.html", "name"],
    ["honors", "recognition.html", "name"],
    ["certifications", "recognition.html", "name"],
    ["projects", "projects.html", "name"],
  ]) {
    const html = readFileSync(page, "utf8")
      .replaceAll("&amp;", "&")
      .replaceAll("&#39;", "'");
    for (const entry of profile[collection])
      assert.ok(html.includes(entry[key]), `${page}: missing ${entry[key]}`);
  }
  const experience = readFileSync("experience.html", "utf8");
  for (const skill of profile.linkedinSkills)
    assert.ok(experience.includes(skill), `Missing skill: ${skill}`);
});

test("contact privacy is preserved throughout all public pages and data", () => {
  assert.equal(profile.email, "business.pedroche@gmail.com");
  assert.equal(profile.linkedin, "https://www.linkedin.com/in/conor-pedroche/");
  assert.equal(profile.github, "https://github.com/Corndog-Pepperoni");
  for (const file of [...pages, "content/profile.json"]) {
    const text = readFileSync(file, "utf8");
    assert.doesNotMatch(
      text,
      /tel:|\b\d{3}[-. ]\d{3}[-. ]\d{4}\b|conor-pedroche-a16b843a9/i,
      file,
    );
    for (const [, address] of text.matchAll(/href="mailto:([^"?]+)/g)) {
      assert.equal(address, profile.email, `${file}: changed email destination`);
    }
    if (pages.includes(file)) {
      assert.ok(text.includes(`href="${profile.linkedin}"`), file);
      assert.ok(text.includes(`href="${profile.github}"`), file);
    }
  }
  const html = readFileSync("index.html", "utf8");
  assert.match(html, /mailto:business\.pedroche@gmail\.com/);
  assert.match(html, /assets\/Conor-Pedroche-Resume\.pdf/);
});

test("graduation follows the profile and the current resume across pages", () => {
  assert.equal(profile.graduation, "May 2028");
  for (const page of ["index.html", "education.html"]) {
    const text = readFileSync(page, "utf8");
    assert.match(text, /Expected May 2028/);
    assert.doesNotMatch(text, /2030/);
  }
  assert.match(home({ ...profile, graduation: "May 2029" }), /Expected May 2029/);
});

test("project descriptions and diagrams stay with their project when reordered", () => {
  const reordered = { ...profile, projects: [...profile.projects].reverse() };
  const html = projects(reordered);
  for (const project of reordered.projects) {
    const article = html.match(new RegExp(`<article[^>]+id="${project.id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(article, project.id);
    assert.ok(article.includes(escape(project.description)), project.id);
    assert.ok(article.includes(`aria-label="${escape(project.architecture.label)}"`), project.id);
    for (const step of project.architecture.steps) assert.ok(article.includes(escape(step)), project.id);
    for (const point of project.points) assert.ok(article.includes(escape(point.text)), project.id);
  }
  assert.ok(readFileSync("index.html", "utf8").includes('href="projects.html#doodle2design"'));
});

test("personal interests and the past speedcubing best are accurately represented", () => {
  const about = readFileSync("about.html", "utf8");
  assert.deepEqual(profile.hobbies.map((hobby) => hobby.name), [
    "Balisong flipping", "Speedcubing", "Basketball",
  ]);
  assert.equal(profile.hobbies.find((hobby) => hobby.id === "speedcubing").personalBest, 13);
  for (const hobby of profile.hobbies) {
    assert.ok(about.includes(hobby.name));
    for (const paragraph of hobby.paragraphs) assert.ok(about.includes(paragraph));
  }
  assert.match(about, /Past personal best/);
  assert.match(about, /recently gotten back into it/);
});

test("the personal page is reachable from every navigation and the overview introduction", () => {
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    const nav = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
    assert.match(nav, /href="about.html"/);
    const current = [...nav.matchAll(/<a href="([^"]+)" aria-current="page"/g)];
    assert.equal(current.length, page === "404.html" ? 0 : 1, page);
    if (current.length) assert.equal(current[0][1], page);
  }
  const home = readFileSync("index.html", "utf8");
  assert.match(home, /href="experience.html">Get to know the work/);
  assert.match(home, /href="about.html">Get to know me/);
});

test("page headings are plain and the favicon matches the navigation logo", () => {
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    for (const [, heading] of html.matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/g)) {
      assert.doesNotMatch(heading, /<em\b|class="accent|name-dot/);
    }
    const favicon = html.match(/<link rel="icon" href="([^"]+)"/)?.[1];
    const brandIcon = html.match(/class="monogram" src="([^"]+)"/)?.[1];
    assert.equal(favicon, brandIcon, page);
    assert.ok(existsSync(favicon), page);
  }
});
