import { arrow } from "../layout.mjs";

function schematic() {
  return `<div class="system-visual" aria-hidden="true">
    <div class="visual-caption"><span>FIG. 01</span><span>CONNECTED BY CURIOSITY</span></div>
    <svg class="system-map" viewBox="0 0 500 450" fill="none">
      <defs><pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="currentColor" opacity=".2"/></pattern></defs>
      <rect width="500" height="450" fill="url(#grid)"/>
      <path d="M250 25V425M25 225H475" class="map-axis"/>
      <g class="globe" transform="translate(250 225) rotate(-24)">
        <circle r="139"/><ellipse rx="101" ry="139"/><ellipse rx="48" ry="139"/><ellipse rx="139" ry="101"/><ellipse rx="139" ry="48"/>
        <path d="M-139 0H139M0 -139V139"/>
      </g>
      <ellipse cx="250" cy="225" rx="208" ry="74" transform="rotate(-37 250 225)" class="map-orbit"/>
      <path d="M82 114H142L178 151M410 120H352L323 152M380 367H326L290 330" class="map-connect"/>
      <circle class="map-node" cx="178" cy="151" r="5"/><circle class="map-node" cx="323" cy="152" r="5"/><circle class="map-node" cx="290" cy="330" r="5"/>
      <text x="37" y="96">01 / SOFTWARE</text><text x="351" y="101">02 / SYSTEMS</text><text x="328" y="390">03 / PEOPLE</text>
      <circle cx="250" cy="225" r="8" fill="var(--accent)"/><circle cx="250" cy="225" r="15" stroke="var(--accent)" opacity=".4"/>
      <path d="M27 40V25H42M458 25H473V40M27 410V425H42M458 425H473V410" class="map-brackets"/>
    </svg>
    <div class="visual-foot"><span class="visual-dot"></span> BUILD TO UNDERSTAND. UNDERSTAND TO BUILD.</div>
  </div>`;
}

export function home() {
  return `<section class="hero shell">
    <div class="hero-copy"><p class="eyebrow"><span class="tiny-cross" aria-hidden="true">✳</span> Computer science, with a human side.</p>
      <h1>Useful ideas.<br>Thoughtfully<br><em>engineered.</em></h1>
      <p class="hero-description">I’m Conor Pedroche, a computer science student at <strong>UC Berkeley</strong>, working toward cloud engineering and building tools that help people do more.</p>
      <div class="hero-actions"><a class="button primary" href="projects.html">Explore my work ${arrow}</a><a class="text-link" href="#contact">Let’s connect <span aria-hidden="true">↘</span></a></div>
    </div>${schematic()}
  </section>
  <section class="identity-strip shell" aria-label="At a glance"><div class="identity-person"><img src="assets/portrait.webp" width="64" height="64" alt="Conor Pedroche in a suit and tie"><div><strong>Conor Pedroche</strong><span>Builder. Researcher. Mentor.</span></div></div><div class="identity-fact"><span class="eyebrow">Currently</span><strong>B.A. Computer Science</strong><span>UC Berkeley · Class of 2030</span></div><div class="identity-fact"><span class="eyebrow">Recognition</span><strong>Regents’ & Chancellor’s Scholar</strong><a href="recognition.html">A little more context ${arrow}</a></div></section>
  <section class="selected-work shell" aria-labelledby="selected-title"><div class="section-heading"><div><p class="eyebrow">01 / A closer look</p><h2 id="selected-title">Built with <em>intention.</em></h2></div><a class="text-link" href="projects.html">All projects ${arrow}</a></div>
    <div class="work-previews">
      <a class="work-preview sourcecado-preview" href="projects.html#sourcecado"><div class="preview-art" aria-hidden="true"><div class="flow-line"><span>Intent</span><i>→</i><span>Approval</span><i>→</i><span>Action</span></div><div class="flow-recovery"><span>↶</span> Recover. Resume. Continue.</div><span class="art-index">S / 01</span></div><div class="preview-copy"><span class="eyebrow">Local-first AI · Desktop</span><h3>Sourcecado ${arrow}</h3><p>AI workflows designed to recover gracefully and act with approval.</p><span class="preview-stack">Python / TypeScript / FastAPI / React</span></div></a>
      <a class="work-preview events-preview" href="projects.html#event-finder"><div class="preview-art event-art" aria-hidden="true"><div class="event-lines"><span><i></i> DISCOVER</span><span><i></i> FIND YOUR PEOPLE</span><span><i></i> SHOW UP</span></div><span class="art-index">C / 02</span></div><div class="preview-copy"><span class="eyebrow">Full-stack web · Student utility</span><h3>Campus Event Finder ${arrow}</h3><p>A simpler route from looking for campus events to taking part.</p><span class="preview-stack">Python / Flask / SQLite</span></div></a>
    </div>
  </section>
  <section class="index-section shell" aria-labelledby="index-title"><div><p class="eyebrow">Beyond the code</p><h2 id="index-title">The rest of<br> the <em>story.</em></h2><p>Good work comes from more than<br> one kind of experience.</p></div><div class="chapter-links"><a href="experience.html"><span class="chapter-number">02</span><div><h3>Experience & skills</h3><p>Research, hardware, teaching, and engineering leadership.</p></div>${arrow}</a><a href="education.html"><span class="chapter-number">03</span><div><h3>Education & courses</h3><p>Berkeley, dual enrollment, and a habit of learning.</p></div>${arrow}</a><a href="recognition.html"><span class="chapter-number">04</span><div><h3>Recognition & credentials</h3><p>Scholarships, cybersecurity gold, and the details behind them.</p></div>${arrow}</a></div></section>`;
}
