const Now = (data) => `
<section class="flex flex-col scroll-mt-20" id="now">
  <div class="flex flex-col gap-1 mb-5">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title || 'Currently'}</h2>
    ${
      data.subtitle
        ? `<div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden"><p>${data.subtitle}</p></div>`
        : ''
    }
  </div>
  
  <div class="flex flex-col">
    <ul class="list-none pl-0 m-0 space-y-3">
      ${data.items
        .map(
          (item) => `
        <li class="flex items-start gap-3 sm:gap-4 text-[15px] sm:text-base text-macchiato-subtext0 font-medium">
          <span class="shrink-0 mt-[1px] text-macchiato-blue/80 dark:text-macchiato-yellow/80">
            <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1">${item.icon}</span>
          </span>
          <span class="leading-relaxed text-macchiato-text">${item.text}</span>
        </li>
      `,
        )
        .join('')}
    </ul>
  </div>
</section>
`;

export default Now;
