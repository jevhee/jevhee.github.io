
const Showcase = (data) => `
<section class="flex flex-col scroll-mt-20" id="portfolio">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-2xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="flex items-center gap-2 text-macchiato-overlay0 font-medium mt-1">
      <span class="material-symbols-outlined text-[16px] text-macchiato-blue">devices</span>
      <span class="text-[13px] italic">${data.subtitle}</span>
    </div>
  </div>
  
  <div class="flex flex-col ruled-paper pb-7">
    <ul class="list-none pl-0 m-0">
      ${data.projects.map(project => `
        <li class="relative pl-6 mb-14 leading-[28px] text-[16px] text-macchiato-text flex flex-col sm:flex-row gap-7 sm:gap-8 items-start">
          <span class="absolute left-0 top-0 text-macchiato-blue font-bold">»</span>
          
          <div class="flex-1">
            <strong>${project.title}</strong> — ${project.description}
            
            <div class="flex flex-wrap gap-3">
              ${project.stack.map(tech => `<span class="font-serif text-[13px] text-macchiato-sky select-none">#${tech.toLowerCase().replace(/\s+/g, '')}</span>`).join('')}
            </div>
            
            <div class="flex flex-wrap gap-4">
              ${project.links?.code ? `<a href="${project.links.code}" target="_blank" class="text-macchiato-peach font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">Source</a>` : ''}
              ${project.links?.appStore ? `<a href="${project.links.appStore}" target="_blank" class="text-macchiato-blue font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">App Store</a>` : ''}
              ${project.links?.playStore ? `<a href="${project.links.playStore}" target="_blank" class="text-macchiato-green font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">Play Store</a>` : ''}
            </div>
          </div>

          ${project.image ? `
          <div class="shrink-0 w-[210px] h-[112px] p-[6px] bg-macchiato-surface0 drop-shadow-sm rotate-2 transition-all duration-300 origin-center"
               style="background-image: radial-gradient(circle, rgb(var(--color-crust)) 4px, transparent 4.5px); background-size: 14px 14px; background-position: -7px -7px;">
            <div class="bg-macchiato-surface0 p-1 border border-macchiato-surface1 h-full w-full">
              <div class="w-full h-full bg-macchiato-surface1 animate-pulse transition-all duration-300">
                <img alt="${project.title} preview" class="w-full h-full block object-cover opacity-0 transition-opacity duration-500" src="${project.image}" loading="lazy" decoding="async" onload="this.classList.remove('opacity-0'); this.parentElement.classList.remove('animate-pulse')">
              </div>
            </div>
          </div>
          ` : ''}
        </li>
      `).join('')}
    </ul>
  </div>
</section>
`;

export default Showcase;
