import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { toolkitItem } from "../scripts/toolkit.mjs";

const profile = JSON.parse(readFileSync("content/profile.json", "utf8"));

test("every toolkit item has a local, decorative graphic and readable label", () => {
  for (const group of profile.toolkit) {
    for (const name of group.items) {
      const html = toolkitItem(name);
      assert.ok(html.includes(`<span class="tech-name">${name}</span>`));
      assert.match(html, /<svg[^>]+aria-hidden="true"/);
      assert.doesNotMatch(html, /<script|<image|<foreignObject|href="https?:/);
      assert.match(html, /currentColor/);
    }
  }
  assert.equal((toolkitItem("HTML/CSS").match(/<svg/g) || []).length, 2);
});

test("a newly added skill cannot silently ship without an icon mapping", () => {
  assert.throws(() => toolkitItem("Unmapped tool"), /Missing toolkit graphic/);
});
