const Log = (data) => `
<section class="flex flex-col scroll-mt-20" id="log">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col">
    <ul class="list-none pl-0 m-0">
      ${data.articles
        .map(
          (article, index) => `
        <li class="relative mb-8 last:mb-0 text-base text-macchiato-text flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-dashed border-macchiato-surface2 pb-6 last:border-0 last:pb-0">
          <div class="flex-1 flex flex-col">
            <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-lg mb-0.5 hover:underline decoration-2 underline-offset-4 hover:text-macchiato-blue dark:hover:text-macchiato-yellow transition-colors">
              ${article.title}
            </a>
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-[13.5px] text-macchiato-subtext0 font-medium">
              ${article.category ? `<span>${article.category}</span><span class="opacity-30 font-bold text-[12px]">/</span>` : ''}
              <span>${article.readTime}</span>
            </div>
          </div>
          <div class="shrink-0 mt-3 sm:mt-0 text-[14px] font-medium text-macchiato-subtext0 flex items-center gap-2">
            ${article.date}
          </div>
        </li>
      `,
        )
        .join('')}
    </ul>
  </div>
</section>
`;

export default Log;
