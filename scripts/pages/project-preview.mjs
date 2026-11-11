import { arrow, escape as e } from '../layout.mjs';

const artwork = {
  sourcecado: '<div class="flow-line"><span>Intent</span><i>→</i><span>Approval</span><i>→</i><span>Action</span></div><div class="flow-recovery"><span>↶</span> Recover. Resume. Continue.</div>',
  doodle2design: '<img class="project-illustration" src="assets/doodle2design.svg" width="320" height="180" alt="" decoding="async">',
};

export function projectPreview(project, index) {
  if (!artwork[project.id]) throw new Error(`Missing project illustration: ${project.id}`);
  return `<a class="work-preview ${e(project.id)}-preview" href="projects.html#${e(project.id)}"><div class="preview-art" aria-hidden="true">${artwork[project.id]}<span class="art-index">${e(project.name[0])} / ${String(index + 1).padStart(2, '0')}</span></div><div class="preview-copy"><span class="eyebrow">${e(project.category)}</span><h3>${e(project.name)} ${arrow}</h3><p>${e(project.preview)}</p><span class="preview-stack">${e(project.stack.slice(0, 4).join(' / '))}</span></div></a>`;
}
