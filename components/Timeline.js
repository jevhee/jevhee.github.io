const Timeline = (data) => `
<section class="flex flex-col scroll-mt-20" id="timeline">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col gap-4 w-full">
    ${data.items
      .map(
        (item) => `
      <div class="flex items-center gap-4 text-macchiato-text w-full">
        <span class="font-bold text-lg shrink-0 ${item.highlight ? 'text-macchiato-blue dark:text-macchiato-yellow' : ''}">${item.company}</span>
        <span class="flex-1 border-b border-dashed mt-2 ${item.highlight ? 'border-macchiato-blue/50 dark:border-macchiato-yellow/50' : 'border-macchiato-surface2'}"></span>
        <span class="font-medium text-base shrink-0 whitespace-nowrap ${item.highlight ? 'text-macchiato-blue/80 dark:text-macchiato-yellow/80' : 'text-macchiato-subtext0'}">${item.date}</span>
      </div>
    `,
      )
      .join('')}
  </div>
</section>
`;

export default Timeline;
