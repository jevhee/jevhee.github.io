const Log = (data) => `
<section class="flex flex-col scroll-mt-20" id="log">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col">
    <ul class="list-none pl-0 m-0 space-y-1 -my-3">
      ${data.articles
        .map(
          (article, index) => `
        <li class="relative text-base text-macchiato-text border-b border-dashed border-macchiato-surface2 sm:border-none last:border-none">
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="group flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between py-3 -mx-3 px-3 rounded-lg hover:bg-macchiato-surface1/40 dark:hover:bg-macchiato-surface0/40 transition-colors">
            <div class="flex-1 flex flex-col">
              <div class="font-bold text-base sm:text-lg mb-0.5 group-hover:text-macchiato-blue dark:group-hover:text-macchiato-yellow transition-colors flex items-center gap-1.5">
                ${article.title}
              </div>
              <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-[13.5px] text-macchiato-subtext0 font-medium">
                ${article.category ? `<span>${article.category}</span><span class="opacity-30 font-bold text-[12px]">/</span>` : ''}
                <span>${article.readTime}</span>
              </div>
            </div>
            <div class="shrink-0 mt-1 sm:mt-0 text-[13.5px] font-medium text-macchiato-subtext0 flex items-center gap-2">
              <span>${article.date}</span>
              <span class="sm:hidden flex items-center gap-1 font-bold ml-2 text-macchiato-blue dark:text-macchiato-yellow">
                Visit 
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </div>
          </a>
        </li>
      `,
        )
        .join('')}
    </ul>
  </div>
</section>
`;

export default Log;
