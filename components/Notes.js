const Notes = (data) => `
<section class="flex flex-col scroll-mt-20" id="posts">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-2xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="flex items-center gap-2 text-macchiato-overlay0 font-medium mt-1">
      <span class="material-symbols-outlined text-[16px] text-macchiato-peach">edit_note</span>
      <span class="text-[13px] italic">${data.subtitle}</span>
    </div>
  </div>
  
  <div class="flex flex-col ruled-paper pb-7">
    <ul class="list-none pl-0 m-0">
      ${data.articles.map((article, index) => `
        <li class="relative pl-6 mb-7 leading-[28px] text-[16px] text-macchiato-text">
          <span class="absolute left-0 top-0 text-${article.color || 'macchiato-peach'} font-bold">#</span>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-macchiato-blue hover:underline transition-colors">
            ${article.title}
          </a><br>
          <span class="font-body-md text-[13px] text-macchiato-peach select-none">#${article.category}</span>
          <span class="text-macchiato-overlay0 text-[13px]"> · ${article.date} · ${article.readTime}</span>
        </li>
      `).join('')}
    </ul>
  </div>
</section>
`;

export default Notes;
