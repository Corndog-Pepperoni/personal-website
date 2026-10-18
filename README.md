# Conor Pedroche — personal portfolio

A dark, editorial portfolio with separate pages for projects, experience, education, and recognition. Published through the repository's existing GitHub Pages configuration.

## Develop

Requires Node.js 22 or newer. The published site has no runtime dependencies.

```sh
npm install
npm run build
npm test
npm run dev
```

Open `http://localhost:4173`. Edit `content/profile.json` for resume and LinkedIn content, `scripts/pages/` for page layouts, `scripts/layout.mjs` for shared navigation and metadata, and `styles.css` for the visual system. Run `npm run build` after content or template changes; the generated root HTML files are committed because Pages serves them directly.

## Verification

`npm test` checks record completeness, semantic page structure, internal links and fragments, project-base-path compatibility, and phone-number exclusion. With the dev server running, open `http://localhost:4173/tests/browser-audit.html?width=1440` for axe-core accessibility checks on every page; repeat with `width=320`. Run the browser walkthrough in `docs/verification.md` for interaction and visual checks.

## Publishing

Push generated pages and assets to `main`. GitHub Pages is configured to publish the root of `main` at [the portfolio URL](https://corndog-pepperoni.github.io/personal-website/). All assets and internal links use relative URLs, so the site works under `/personal-website/` and on a future custom domain.

## Privacy and sources

The supplied resume and LinkedIn profile were audited on October 18, 2026. The published resume in `assets/` has the phone number permanently redacted; the original is never copied into the repository. Avoid replacing that asset with an unredacted copy. Design decisions and source reconciliation are recorded in `docs/design.md`.

Space Grotesk and Newsreader are self-hosted with their SIL Open Font Licenses in `assets/`. The portrait comes from the existing repository. All schematic artwork is original HTML/CSS/SVG.
