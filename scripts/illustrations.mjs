// Original decorative line drawings, shared by chapter openings and hobby rows.
const drawings = {
  projects: `<rect x="12" y="18" width="72" height="58" rx="4"/><path d="M12 31h72"/><circle cx="20" cy="25" r="1"/><circle cx="26" cy="25" r="1"/><path class="drawing-accent" d="m35 43-9 9 9 9m26-18 9 9-9 9M53 40l-9 24"/>`,
  experience: `<rect x="17" y="28" width="62" height="49" rx="4"/><path d="M35 28v-9h26v9M17 47c19 9 43 9 62 0"/><rect class="drawing-accent" x="41" y="45" width="14" height="13" rx="2"/><path d="M28 67h12m7 0h8"/>`,
  education: `<path d="M48 27c-11-8-24-9-36-5v51c12-4 25-3 36 5 11-8 24-9 36-5V22c-12-4-25-3-36 5ZM48 27v51"/><path class="drawing-accent" d="M22 34c6-1 12 0 17 3m-17 9c6-1 12 0 17 3m-17 9c6-1 12 0 17 3m18-24c5-3 11-4 17-3m-17 15c5-3 11-4 17-3m-17 15c5-3 11-4 17-3"/>`,
  recognition: `<circle cx="48" cy="36" r="22"/><circle cx="48" cy="36" r="15"/><path class="drawing-accent" d="m48 26 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/><path d="m31 51-8 29 15-6 9 10 5-26m13-7 8 29-15-6-5 6"/>`,
  balisong: `<g transform="rotate(-45 48 48)"><path d="M48 43h28c11 0 20-1 26-4-1 7-5 10-11 12-5 2-10 2-16 2H48ZM50 50h26c10 0 19-3 25-10M47 42c-3-2-4-5-2-5s3 2 4 4M48 54c3 2 4 5 2 5s-3-2-4-4"/><rect x="0" y="41.5" width="49" height="5.5" rx="2.75"/><circle cx="12" cy="44.25" r="0.8"/><circle cx="25" cy="44.25" r="0.8"/><circle cx="38" cy="44.25" r="0.8"/><g class="drawing-accent"><rect x="0" y="49.5" width="49" height="5.5" rx="2.75"/><circle cx="12" cy="52.25" r="0.8"/><circle cx="25" cy="52.25" r="0.8"/><circle cx="38" cy="52.25" r="0.8"/></g></g>`,
  cube: `<path d="m48 10 33 19v38L48 86 15 67V29ZM15 29l33 19 33-19M48 48v38"/><path class="drawing-accent" d="m26 23 33 19v38M37 16l33 19v38M15 42l33 19 33-19M15 55l33 19 33-19M26 73V35l33-19M37 80V42l33-19"/>`,
  basketball: `<circle cx="48" cy="48" r="34"/><path d="M14 48h68M48 14v68"/><path class="drawing-accent" d="M24 24c25 9 25 39 0 48m48-48c-25 9-25 39 0 48"/>`,
};

export function illustration(name) {
  if (!drawings[name]) throw new Error(`Unknown illustration: ${name}`);
  return `<svg class="line-drawing" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${drawings[name]}</svg>`;
}

const chapters = {
  "01": "projects",
  "02": "experience",
  "03": "education",
  "04": "recognition",
  "05": "cube",
};

export function chapterIllustration(number) {
  const drawing = chapters[number];
  if (!drawing) return "";
  return `<div class="chapter-visual" aria-hidden="true"><div class="chapter-drawing">${illustration(drawing)}</div></div>`;
}
