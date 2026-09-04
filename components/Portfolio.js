import Badge from './ui/Badge.js';

const Portfolio = (data) => `
<section class="flex flex-col gap-space-lg scroll-mt-20" id="portfolio">
  <div class="flex items-baseline justify-between">
    <div class="flex items-center gap-space-xs">
      <span class="material-symbols-outlined text-macchiato-blue text-[20px]">devices</span>
      <h2 class="font-headline-md text-headline-md text-macchiato-text tracking-tight">${data.title}</h2>
    </div>
    <span class="font-code-inline text-label-sm text-macchiato-overlay0">${data.subtitle}</span>
  </div>
  
  <div class="flex flex-col gap-space-md">
    ${data.projects.map(project => `
      <article class="p-space-md rounded-xl bg-macchiato-mantle hover:bg-macchiato-surface0/70 transition-all duration-200 flex flex-col gap-space-sm group shadow-xs">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-space-sm">
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-headline-sm text-macchiato-text flex items-center gap-1.5">
                ${project.title}
                <span class="material-symbols-outlined text-[18px] text-${project.color}" title="${project.type}">${project.type?.toLowerCase() === 'library' ? 'extension' : 'smartphone'}</span>
              </h3>
              <span class="font-code-inline text-label-sm text-macchiato-overlay0">${project.stack}</span>
            </div>
          </div>
          <div class="flex items-center gap-space-2xs">
            ${project.links?.code ? `
              <a aria-label="Source Code" class="p-1 rounded text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0/80 transition-colors" href="${project.links.code}" rel="noopener noreferrer" target="_blank" title="Source Code">
                <span class="material-symbols-outlined text-[18px]">code</span>
              </a>
            ` : ''}
            ${project.links?.preview ? `
              <a aria-label="Live Preview" class="p-1 rounded text-macchiato-subtext0 hover:text-${project.color} hover:bg-macchiato-surface0/80 transition-colors" href="${project.links.preview}" rel="noopener noreferrer" target="_blank" title="Live Preview">
                <span class="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            ` : ''}
          </div>
        </div>
        <p class="font-body-md text-body-md text-macchiato-subtext0">
          ${project.description}
        </p>
        <div class="relative w-full h-36 rounded-lg overflow-hidden bg-macchiato-crust flex items-center justify-center border border-macchiato-surface0/60">
          <img alt="${project.title} preview" class="w-full h-full object-cover" src="${project.image}" loading="lazy" decoding="async">
          ${project.badge ? Badge({ text: project.badge }) : ''}
        </div>
      </article>
    `).join('')}
  </div>
</section>
`;

export default Portfolio;
