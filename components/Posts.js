const Posts = (data) => `
<section class="flex flex-col gap-space-lg scroll-mt-20" id="posts">
  <div class="flex items-baseline justify-between">
    <div class="flex items-center gap-space-xs">
      <span class="material-symbols-outlined text-macchiato-peach text-[20px]">edit_note</span>
      <h2 class="font-headline-md text-headline-md text-macchiato-text tracking-tight">${data.title}</h2>
    </div>
    <span class="font-code-inline text-label-sm text-macchiato-overlay0">${data.subtitle}</span>
  </div>
  
  <div class="flex flex-col gap-space-xs">
    ${data.articles.map(article => `
      <a class="p-space-sm -mx-space-sm rounded-xl hover:bg-macchiato-mantle/80 flex flex-col gap-1 transition-all group" href="${article.url}">
        <div class="flex items-baseline justify-between gap-space-sm">
          <span class="font-headline-sm text-headline-sm text-macchiato-text group-hover:text-macchiato-blue transition-colors">
            ${article.title}
          </span>
          <span class="shrink-0 font-code-inline text-label-sm text-macchiato-overlay0">${article.date}</span>
        </div>
        <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-macchiato-overlay0">
          <span>${article.readTime}</span>
          <span>·</span>
          <span class="text-${article.color} font-medium">${article.category}</span>
        </div>
      </a>
    `).join('')}
  </div>
</section>
`;
