import { readFileSync } from "node:fs";
import { escape } from "./layout.mjs";

const icons = {
  Python: ["python"],
  C: ["c"],
  TypeScript: ["typescript"],
  SQL: ["sql"],
  "HTML/CSS": ["html5", "css"],
  Java: ["java"],
  React: ["react"],
  FastAPI: ["fastapi"],
  Flask: ["flask"],
  Tauri: ["tauri"],
  SQLite: ["sqlite"],
  "REST APIs": ["rest"],
  WebSockets: ["websockets"],
  MCP: ["modelcontextprotocol"],
  Git: ["git"],
  GitHub: ["github"],
  Docker: ["docker"],
  "VS Code": ["vscode"],
  pytest: ["pytest"],
  Vitest: ["vitest"],
  Selenium: ["selenium"],
  VADER: ["vader"],
};

export function toolkitItem(name) {
  if (!icons[name]) throw new Error(`Missing toolkit graphic: ${name}`);
  const graphics = icons[name]
    .map((icon) => {
      const svg = readFileSync(
        new URL(`../assets/toolkit/${icon}.svg`, import.meta.url),
        "utf8",
      );
      return svg
        .replace(/ role="img"/, "")
        .replace("<svg ", '<svg aria-hidden="true" focusable="false" ');
    })
    .join("");
  return `<li class="tech-item"><span class="tech-mark" aria-hidden="true">${graphics}</span><span class="tech-name">${escape(name)}</span></li>`;
}
