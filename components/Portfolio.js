const Portfolio = (data) => `
<!-- Section Divider -->
<div class="w-full h-px bg-macchiato-surface0/60 my-space-2xl"></div>

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
      <article class="p-space-md rounded-xl bg-macchiato-mantle hover:bg-macchiato-surface0/50 transition-all duration-200 flex flex-col gap-space-sm group shadow-xs border border-macchiato-surface0/80">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-space-sm">
            <div class="w-10 h-10 rounded-xl bg-${project.color}/15 flex items-center justify-center text-${project.color} shrink-0 border border-${project.color}/25">
              <span class="material-symbols-outlined text-[22px]">${project.icon}</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-headline-sm text-macchiato-text group-hover:text-${project.color} transition-colors">
                ${project.title}
              </h3>
              <span class="font-code-inline text-label-sm text-macchiato-overlay0">${project.stack}</span>
            </div>
          </div>
          <div class="flex items-center gap-space-2xs">
            ${project.links.code ? `
              <a aria-label="Source Code" class="p-1 rounded text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0/80 transition-colors" href="${project.links.code}" rel="noopener noreferrer" target="_blank" title="Source Code">
                <span class="material-symbols-outlined text-[18px]">code</span>
              </a>
            ` : ''}
            ${project.links.preview ? `
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
          <img alt="${project.title} preview" class="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" src="${project.image}">
          <div class="absolute inset-0 bg-gradient-to-t from-macchiato-mantle/90 via-transparent to-transparent pointer-events-none"></div>
          ${project.badge ? `
            <span class="absolute bottom-2 right-3 font-code-inline text-label-sm text-macchiato-text px-2 py-0.5 rounded bg-macchiato-surface0/90 backdrop-blur-sm border border-macchiato-surface1/60 shadow-xs">
              ${project.badge}
            </span>
          ` : ''}
        </div>
      </article>
    `).join('')}
  </div>
</section>
`;
