# Verification — October 18, 2026

## Equal emphasis for introduction links

- Gave both introduction links the same outlined button style, padding, arrow alignment, hover/focus behavior, and equal-width grid columns. Both are 48px tall. The work link remains first, and the primary “Explore my work” call to action is unchanged.
- Build and all ten automated tests passed. Real-browser checks at 320, 768, 1024, and 1440px confirmed equal width and height for the two links at every breakpoint, with no horizontal overflow. They stack below 1000px and share a row on desktop.
- Visually reviewed the introduction and confirmed keyboard Tab moves from the work link to the personal link; Enter opens About. Both remain semantic anchors with their original destinations. `git diff --check` passed.

## Slimmer balisong reference update

- Replaced only the balisong SVG drawing with a longer, gently curved blade, slimmer parallel handles, circular handle holes, and an upward-right diagonal pose based on the latest user reference. The existing blue/pink outline style and decorative accessibility treatment are retained.
- Regenerated the static pages; all ten automated tests passed. Visually reviewed the drawing at its desktop size and checked About at 320, 768, 1024, and 1440 pixels: no horizontal overflow, and the icon remains hidden from assistive technology. No layout, content, or navigation changes were needed.

## Typography and illustration refinements

- Removed the background, border, chapter number, and caption from each opening illustration. The standalone drawings scale from 208px on desktop to 64px alongside phone titles.
- Page titles now use Bricolage Grotesque semibold in muted ice blue. All title wording is unchanged; body text, navigation, and secondary headings retain the existing typeface. The heading font is a self-hosted 27,700-byte static subset, preloaded on each page, with its SIL Open Font License retained.
- Redrew the balisong icon from the user's supplied photo reference: an open, angled blade with two parallel handles, pivots, and cutouts. It remains original blue/pink SVG line art; the photograph and its branding are not published.
- Build and all ten automated tests passed. All seven pages passed real-browser layout and axe-core checks at 320, 768, 1024, and 1440 pixels: 28 audits, zero accessibility violations, horizontal overflow, or broken images. The new heading family was confirmed in the computed styles on every page. Audit output is saved locally in ignored `tmp/header-refinement-audits.json`.
- Visually reviewed the overview at 1440px, the full personal page at 1024px, and long headings and personal content at 320px. Keyboard-operated mobile navigation to About passed. Page titles and decorative graphics retain their semantic/accessibility behavior.
- Local HTTP verification passed for all 17 pages/assets (approximately 547 KB total), including the new font and custom 404. Existing reduced-motion and print behavior is preserved; print titles use dark ink. `git diff --check` passed.

## Personal interests and simpler page openings

- Added balisong flipping, speedcubing, and basketball to About, with an explanation of balisong flipping for unfamiliar readers. The 13-second solve is explicitly a past personal best, with the recent return to practice described separately. Personal facts come only from the user's account; no additional hobbies or competitive history were invented.
- Added About to every main navigation and a “Get to know me” button beside “Get to know the work.” The recognition continuation now leads to About, and About returns to Projects. The existing overview composition and supplied portrait remain in place.
- Replaced slogan headings and cursive/color emphasis with plain, white Space Grotesk headings. Rephrased promotional introductions and self-descriptive labels while retaining the complete professional record and factual results.
- Interior openings include original, decorative line illustrations. They become compact horizontal panels on phones. Hobby descriptions span the available phone width; the personal-best aside is clearly labeled.
- The favicon and navigation use the same cp SVG, exported as paths from the bundled Space Grotesk font. The new asset URL refreshes the browser icon; the old favicon path also contains the updated artwork.
- Added one-time 420ms page fades, a 650ms illustration entrance with 6px travel, and subtle navigation hover/focus backgrounds. All recorded animations have one iteration. Reduced-motion styles disable animation, transitions, and smooth scrolling; entrance rules apply only to screen media. Reduced-motion and print rules were reviewed in source; this browser connection does not expose native preference/print emulation.
- `npm run build`: all seven pages generated. `npm test`: all ten checks passed, including new personal-content, navigation, plain-heading, and logo-consistency checks. `git diff --check`: passed.
- Real browser iframe audits of all seven pages at 320, 768, 1024, and 1440 pixels: 28 checks with zero horizontal overflow, broken images, or axe-core WCAG A/AA/best-practice violations. The iframe preview was used because the browser's viewport override did not change its native viewport. Saved audit details are in ignored `tmp/personal-page-audits.json`.
- Direct visits to all seven production pages produced no browser console errors or warnings. The accessibility harness logged two MutationObserver errors during frame inspection; direct page checks isolated these from the production pages, whose only script is the existing mobile-menu enhancement.
- Keyboard checks passed: mobile menu opens; Escape closes it and restores button focus; the personal-page button opens About; project jump links reach their destination; the skills disclosure opens and closes with all 39 entries. With site JavaScript blocked, the main navigation and all personal content remain available, and the skip link focuses the main landmark.
- Local HTTP check: all 16 public pages/assets returned HTTP 200 (approximately 520 KB combined), and a missing page returned the updated custom HTTP 404. Internal links and resources remain relative for GitHub project Pages. Email and external destinations were inspected without sending messages.

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
