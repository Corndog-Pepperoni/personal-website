import { readFileSync, writeFileSync } from "node:fs";
import { home } from "./pages/home.mjs";
import {
  projects,
  experience,
  education,
  recognition,
  about,
  notFound,
} from "./pages/record.mjs";
import { layout } from "./layout.mjs";

const profile = JSON.parse(
  readFileSync(new URL("../content/profile.json", import.meta.url), "utf8"),
);
const pages = [
  [
    "index.html",
    "Overview",
    "Conor Pedroche — Computer Science & Systems",
    home,
  ],
  ["projects.html", "Projects", "Projects — Conor Pedroche", projects],
  [
    "experience.html",
    "Experience",
    "Experience & Skills — Conor Pedroche",
    experience,
  ],
  [
    "education.html",
    "Education",
    "Education & Courses — Conor Pedroche",
    education,
  ],
  [
    "recognition.html",
    "Recognition",
    "Honors & Certifications — Conor Pedroche",
    recognition,
  ],
  ["about.html", "About", "About & Contact — Conor Pedroche", about],
  ["404.html", "", "Page Not Found — Conor Pedroche", notFound],
];
for (const [file, current, title, render] of pages) {
  writeFileSync(
    new URL(`../${file}`, import.meta.url),
    layout({ current, title, content: render(profile), profile }),
  );
}
console.log(
  `Built ${pages.length} static pages. No client framework or runtime dependencies.`,
);
