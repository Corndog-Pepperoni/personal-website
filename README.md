# Conor Pedroche — personal portfolio

A dark, editorial portfolio with separate pages for projects, experience, education, recognition, and personal interests. Published through the repository's existing GitHub Pages configuration.

## Develop

Requires Node.js 22 or newer. The published site has no runtime dependencies.

```sh
npm install
npm run build
npm test
npm run dev
```

Open `http://localhost:4173`. Edit `content/profile.json` for professional details and hobbies, `scripts/pages/` for page layouts, `scripts/layout.mjs` for shared navigation and metadata, and `styles.css` for the visual system. Original chapter and hobby illustrations are in `scripts/illustrations.mjs`. Run `npm run build` after content or template changes; the generated root HTML files are committed because Pages serves them directly.

## Verification

`npm test` checks record completeness, personal-interest content, navigation, plain headings, logo consistency, internal links and fragments, project-base-path compatibility, and phone-number exclusion. With the dev server running, `npm run check:http` verifies every public page and asset and the custom 404. Open `http://localhost:4173/tests/browser-audit.html?width=1440` for axe-core accessibility and layout checks on every page; repeat at 320, 768, and 1024. For visual and interaction checks in a fixed-width iframe, use `http://localhost:4173/tests/preview.html?page=about&width=320`; add `&nojs=1` to test without site JavaScript. Run the browser walkthrough in `docs/verification.md` for interaction and visual checks.

## Publishing

Push generated pages and assets to `main`. GitHub Pages is configured to publish the root of `main` at [the portfolio URL](https://corndog-pepperoni.github.io/personal-website/). All assets and internal links use relative URLs, so the site works under `/personal-website/` and on a future custom domain.

## Privacy and sources

The supplied resume and LinkedIn profile were audited on October 18, 2026. The published resume in `assets/` has the phone number permanently redacted; the original is never copied into the repository. Avoid replacing that asset with an unredacted copy. Design decisions and source reconciliation are recorded in `docs/design.md`.

Space Grotesk and Bricolage Grotesque are self-hosted with their SIL Open Font Licenses in `assets/`. Page titles use a small, static Bricolage subset: white for the overview name and muted ice blue for interior pages. Body text and navigation use Space Grotesk. The shared navigation logo and favicon use SVG paths derived from Space Grotesk; no font download is needed to display the icon. The homepage headshot was supplied directly by Conor. Technology marks are local SVGs from Simple Icons and Devicon, with licenses and attribution in `assets/toolkit/`; chapter and hobby illustrations are original SVGs. The balisong drawing follows the user's photo reference. The charcoal, blue, and pink theme uses no third-party runtime assets. Motion is brief and honors reduced-motion preferences.
