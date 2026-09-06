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
      <article class="p-space-md rounded-xl bg-macchiato-mantle flex flex-col gap-space-sm shadow-xs">
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
          <div class="flex items-center gap-2">
            ${project.links?.code ? `
              <a aria-label="Source Code" class="w-8 h-8 rounded-lg bg-macchiato-surface0/50 text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0 transition-all flex items-center justify-center" href="${project.links.code}" rel="noopener noreferrer" target="_blank" title="Source Code">
                <span class="material-symbols-outlined text-[18px]">code</span>
              </a>
            ` : ''}
            ${project.links?.appStore ? `
              <a aria-label="App Store" class="w-8 h-8 rounded-lg bg-macchiato-surface0/50 text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0 transition-all flex items-center justify-center" href="${project.links.appStore}" rel="noopener noreferrer" target="_blank" title="App Store">
                <svg class="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>
              </a>
            ` : ''}
            ${project.links?.playStore ? `
              <a aria-label="Google Play" class="w-8 h-8 rounded-lg bg-macchiato-surface0/50 text-macchiato-subtext0 hover:text-macchiato-green hover:bg-macchiato-surface0 transition-all flex items-center justify-center" href="${project.links.playStore}" rel="noopener noreferrer" target="_blank" title="Google Play">
                <svg class="w-[16px] h-[16px] fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
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
