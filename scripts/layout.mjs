export const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const arrow = '<span aria-hidden="true">↗</span>';
export const tags = values => `<ul class="tags" aria-label="Technologies and skills">${values.map(value => `<li>${escape(value)}</li>`).join('')}</ul>`;
export const external = (url, label) => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ${arrow}<span class="sr-only"> (opens in a new tab)</span></a>`;
export const intro = (number, label, title, description) => `<section class="page-intro shell"><p class="eyebrow"><span>${number} /</span> ${label}</p><h1>${title}</h1><p class="intro-copy">${description}</p></section>`;
export const next = (number, label, href, title) => `<a class="next-page shell" href="${href}"><span class="eyebrow">${number} / Continue exploring</span><span class="next-title">${title} <span aria-hidden="true">↗</span></span><span class="next-label">${label}</span></a>`;

export function layout({ current, title, content, profile }) {
  const nav = [['index.html', 'Overview'], ['projects.html', 'Projects'], ['experience.html', 'Experience'], ['education.html', 'Education'], ['recognition.html', 'Recognition']];
  const description = `Conor Pedroche — UC Berkeley computer science student and Regents’ and Chancellor’s Scholar. Explore software projects, research, experience, education, and recognition.`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#101613">
  <meta name="color-scheme" content="dark">
  <meta name="description" content="${escape(description)}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:type" content="website">
  <title>${escape(title)}</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css">
  <script src="site.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="index.html" aria-label="Conor Pedroche home"><span class="monogram" aria-hidden="true">cp<span>·</span></span><span class="brand-name">Conor<br>Pedroche<span class="brand-period">.</span></span></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" hidden>Menu <span aria-hidden="true">+</span></button>
      <nav id="main-nav" class="main-nav" aria-label="Main navigation">${nav.map(([href, name], index) => `<a href="${href}"${current === name ? ' aria-current="page"' : ''}><span class="nav-number">0${index}</span>${name}</a>`).join('')}</nav>
      <a class="resume-link" href="assets/Conor-Pedroche-Resume.pdf" download>Resume <span aria-hidden="true">↓</span><span class="sr-only"> (PDF download)</span></a>
    </div>
  </header>
  <main id="main" tabindex="-1">${content}</main>
  <footer id="contact" class="site-footer shell">
    <div class="footer-top"><div><p class="eyebrow">A conversation starts here</p><h2>Have a good problem<br>in mind<span class="accent">?</span></h2></div><div class="contact-links"><a class="email-link" href="mailto:${escape(profile.email)}">${escape(profile.email)} ${arrow}</a><div>${external(profile.linkedin, 'LinkedIn')} ${external(profile.github, 'GitHub')}<a href="about.html">About & contact ${arrow}</a></div></div></div>
    <div class="footer-bottom"><p>© 2026 Conor Pedroche</p><p>${escape(profile.location)} <span aria-hidden="true">↗</span></p><a href="#main">Back to top ↑</a></div>
  </footer>
</body>
</html>
`;
}
