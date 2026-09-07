const Journey = (data) => `
<section class="flex flex-col scroll-mt-20" id="journeys">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-2xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="flex items-center gap-2 text-macchiato-overlay0 font-medium mt-1">
      <span class="material-symbols-outlined text-[16px] text-macchiato-mauve">timeline</span>
      <span class="text-[13px] italic">${data.subtitle}</span>
    </div>
  </div>
  
  <div class="flex flex-col ruled-paper pb-7">
    <ul class="list-none pl-0 m-0">
      ${data.items.map((item, index) => `
        <li class="relative pl-6 mb-7 leading-[28px] text-[16px] text-macchiato-text">
          <span class="absolute left-0 top-0 text-${item.color || 'macchiato-mauve'} font-bold">
            ${item.isPulse ? '○' : '—'}
          </span>
          <strong>${item.role}</strong> <span class="text-macchiato-overlay0">at</span> <span class="font-semibold text-macchiato-blue">${item.company}</span><span class="text-macchiato-overlay0"> · ${item.date}</span>
          ${item.description ? `<br>${item.description}` : ''}
        </li>
      `).join('')}
    </ul>
  </div>
</section>
`;

export default Journey;
