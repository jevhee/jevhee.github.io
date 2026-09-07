
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
        <li class="relative pl-6 mb-7 leading-[28px] text-[16px] text-macchiato-text">
          <span class="absolute left-0 top-0 text-macchiato-blue font-bold">»</span>
          <strong>${project.title}</strong> — ${project.description}<br>
          <div class="flex flex-wrap gap-3">
            ${project.stack.map(tech => `<span class="font-body-md text-[13px] text-macchiato-sky select-none">#${tech.toLowerCase().replace(/\s+/g, '')}</span>`).join('')}
          </div>
          
          <div class="flex flex-wrap gap-3">
            ${project.links?.code ? `<a href="${project.links.code}" target="_blank" class="text-macchiato-peach font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">Source</a>` : ''}
            ${project.links?.appStore ? `<a href="${project.links.appStore}" target="_blank" class="text-macchiato-blue font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">App Store</a>` : ''}
            ${project.links?.playStore ? `<a href="${project.links.playStore}" target="_blank" class="text-macchiato-green font-bold hover:underline decoration-2 underline-offset-4 text-[15px]">Play Store</a>` : ''}
          </div>

          ${project.image ? `
          <div class="w-[200px] mt-7 mb-7 rounded-xl overflow-hidden border-[6px] border-macchiato-crust shadow-sm rotate-2 bg-macchiato-surface0/50">
            <img alt="${project.title} preview" class="w-full h-auto object-cover" src="${project.image}" loading="lazy" decoding="async">
          </div>
          ` : ''}
        </li>
      `).join('')}
    </ul>
  </div>
</section>
`;

export default Showcase;
