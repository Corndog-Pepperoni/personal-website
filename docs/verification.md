# Verification — October 18, 2026

## Blue/pink and portrait update

- Replaced the green/copper theme throughout the site with neutral charcoal, blue, and pink, including the logo, favicon, diagrams, focus states, buttons, hover colors, and print accents. No former palette values remain in the active CSS, SVG, or template source.
- Rebuilt the homepage opener as a full-width typographic name spread. The newly supplied headshot is on the right of the introduction below it; the small snapshot portrait is removed. The short bio uses the exact requested software-engineering wording, and About uses the same career direction.
- Optimized the attached 2758×2758 headshot to a 960×960 WebP (147 KB) without retouching. The original file is untouched.
- Added 23 SVG graphics covering all 22 toolkit entries. HTML/CSS has both marks. Each graphic has a readable text label; generic concepts use illustrative symbols, and brand sources/licenses are retained locally. All SVG files parse as valid XML.
- `npm run build` and all seven `npm test` checks pass. The new checks cover complete icon mapping, accessible decorative graphics, and prevention of silently unmapped toolkit additions.
- All seven pages tested at 320, 768, 1024, and 1440 pixels: 28 checks, zero horizontal overflow or broken images. Browser console: no errors or warnings observed.
- axe-core: all seven pages pass at 320 and 1440 pixels, for 14 audits with zero reported WCAG A/AA or best-practice violations.
- Verified the mobile menu opens, Escape closes it and restores focus, Meet Conor navigates to the introduction, Get to know the work opens Experience, and the keyboard-operated skills disclosure reveals all 39 skills.
- `npm run check:http`: all 18 pages/assets return HTTP 200; the custom missing page returns HTTP 404. Combined payload across all checked resources is approximately 681 KB, including all pages, both portraits, fonts, and the phone-free resume. Logos are inline and make no extra runtime requests.
- Desktop homepage and toolkit, plus the mobile homepage, visually reviewed. `git diff --check` passes.

## Original launch verification

## Content

- Resume and authenticated LinkedIn profile read and reconciled.
- Four experience/leadership records, two projects, five education records, eight LinkedIn courses plus two additional resume courses, four honors, one certification, 39 LinkedIn skills, and the resume technical toolkit are present.
- PC-building dates follow the user's explicit choice: September 2020–August 2026.
- Phone number excluded from content and metadata. The original PDF was never added to Git. The published PDF was permanently redacted, saved with garbage collection, reopened, visually inspected, downloaded through the real browser link, and checked again with a second PDF reader. One page; no phone number in extracted text.

## Automated checks

- `npm run build`: all seven HTML documents generated successfully.
- `npm test`: five checks passed, covering record completeness, one H1/landmarks/skip links/unique titles, all local resources and fragments, repository base-path compatibility, and contact privacy.
- `npm run check:http`: all 15 pages and assets served with HTTP 200; custom missing page served with HTTP 404. Combined transferred document/asset payload approximately 512 KB, including all pages, fonts, portrait, and PDF.
- axe-core 4.14: no WCAG A/AA or best-practice violations on all seven pages at both 1440 and 320 pixels (14 page audits). Entrance animation is awaited before contrast measurement.
- `git diff --check`: passed.

## Real browser walkthrough

- Six content pages checked at 320, 768, 1024, and 1440 CSS pixels. No horizontal overflow or broken images after fixing the narrow About portrait layout.
- Reviewed desktop overview, projects, education, and recognition; reviewed mobile overview and detailed reading order. Fixed alignment of the first education record and removed nonessential artwork from narrow screens.
- Overview → Explore my work → project details works. Project jump links and the continuation links expose their intended pages/sections.
- Mobile menu opens, follows page links, closes with Escape, and restores focus to the menu button. Desktop navigation shows the current page.
- Keyboard-operated skills disclosure exposes all 39 entries, then collapses again.
- Skip to content moves focus to the main landmark. Focus styling is visible.
- Resume button produces an actual PDF download; email and external-link destinations inspected without sending any messages.
- Console checked for warnings/errors on content pages: none observed.
- Motion: only a short decorative entrance and hover transitions; no looping animation or scroll interception. The `prefers-reduced-motion` stylesheet removes transitions/animation and smooth scrolling. Print stylesheet reviewed in source; native print-preview emulation is not available through this browser connection.

## Code review

Reviewed correctness, maintainability, boundaries, privacy, and loading cost. Content is escaped during generation; no user data is sent to a backend; no trackers or third-party runtime requests are included. Fonts are self-hosted. All primary content and navigation exist in HTML; JavaScript only enhances the mobile menu. No invented public demos or source-repository links are offered for the resume projects.

## External evidence

News links and the featured-build URL are preserved from LinkedIn. Credential and scholarship links are explicitly labeled as LinkedIn records and may require a LinkedIn session. Their third-party availability is outside this repository's control.
