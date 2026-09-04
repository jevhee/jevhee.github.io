const Journeys = (data) => `
<section class="flex flex-col gap-space-lg scroll-mt-20" id="journeys">
  <div class="flex items-baseline justify-between">
    <div class="flex items-center gap-space-xs">
      <span class="material-symbols-outlined text-macchiato-mauve text-[20px]">timeline</span>
      <h2 class="font-headline-md text-headline-md text-macchiato-text tracking-tight">${data.title}</h2>
    </div>
    <span class="font-code-inline text-label-sm text-macchiato-overlay0">${data.dateRange}</span>
  </div>
  
  <!-- Timeline Wrapper -->
  <div class="relative pl-10 flex flex-col gap-space-lg">
    
    ${data.items.map((item, index) => `
      <div class="relative flex flex-col gap-1 group">
        ${index !== data.items.length - 1 ? `<div class="absolute -left-[30px] top-6 -bottom-[28px] w-[2px] dashed-timeline"></div>` : ''}
        ${index === 0 ? `<div class="absolute -left-3 -right-3 -top-2 -bottom-3 bg-macchiato-mantle rounded-xl pointer-events-none"></div>` : ''}
        <div class="absolute -left-10 top-1 w-5 h-5 rounded-full bg-macchiato-base flex items-center justify-center">
          <div class="w-${item.isEducation ? '2' : '2.5'} h-${item.isEducation ? '2' : '2.5'} rounded-full bg-${item.color}"></div>
        </div>
        <div class="flex items-baseline justify-between relative z-10">
          <span class="font-headline-sm text-headline-sm text-macchiato-text">
            ${item.role}
          </span>
          <span class="font-code-inline text-label-sm text-${item.isPulse ? item.color : 'macchiato-overlay0'} ${item.isPulse ? 'font-medium' : ''}">${item.date}</span>
        </div>
        <span class="font-body-sm text-body-sm text-macchiato-subtext1 font-medium relative z-10">${item.company}</span>
        <p class="font-body-md text-body-md text-macchiato-subtext0 mt-1 relative z-10">
          ${item.description}
        </p>
      </div>
    `).join('')}
  </div>
</section>
`;
