
const Builds = (data) => `
<section class="flex flex-col scroll-mt-20" id="builds">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col">
    <ul class="list-none pl-0 m-0">
      ${data.projects.map(project => `
        <li class="relative mb-8 last:mb-0 text-base text-macchiato-text flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between border-b border-dashed border-macchiato-surface2 pb-6 last:border-0 last:pb-0">
          
          <div class="flex-1 flex flex-col">
            <strong class="text-lg mb-0.5">${project.title}</strong>
            <p class="leading-relaxed text-md text-macchiato-subtext1 mb-2">${project.description}</p>
            
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-[13.5px] text-macchiato-subtext0 font-medium">
              ${project.stack.map((tech, index) => `<span>${tech}</span>${index < project.stack.length - 1 ? '<span class="opacity-30 font-bold text-[12px]">/</span>' : ''}`).join('')}
            </div>
          </div>

          <div class="flex gap-4 shrink-0 mt-2 sm:mt-0 items-center">
            ${project.links?.code ? `<a href="${project.links.code}" target="_blank" class=" transition-colors flex items-center justify-center p-2 rounded-full bg-macchiato-surface0 text-macchiato-text hover:bg-macchiato-blue dark:hover:bg-macchiato-yellow hover:text-macchiato-base dark:hover:text-macchiato-base" title="Source Code">
              <span class="material-symbols-outlined text-[24px]">code</span>
            </a>` : ''}
            ${project.links?.appStore ? `<a href="${project.links.appStore}" target="_blank" class=" transition-colors flex items-center justify-center p-2 rounded-full bg-macchiato-surface0 text-macchiato-text hover:bg-macchiato-blue dark:hover:bg-macchiato-yellow hover:text-macchiato-base dark:hover:text-macchiato-base" title="App Store">
              <span class="material-symbols-outlined text-[24px]">phone_iphone</span>
            </a>` : ''}
            ${project.links?.playStore ? `<a href="${project.links.playStore}" target="_blank" class=" transition-colors flex items-center justify-center p-2 rounded-full bg-macchiato-surface0 text-macchiato-text hover:bg-macchiato-blue dark:hover:bg-macchiato-yellow hover:text-macchiato-base dark:hover:text-macchiato-base" title="Play Store">
              <span class="material-symbols-outlined text-[24px]">android</span>
            </a>` : ''}
          </div>

        </li>
      `).join('')}
    </ul>
  </div>
</section>
`;

export default Builds;
