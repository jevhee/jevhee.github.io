const Colophon = (data) => `
<section class="flex flex-col scroll-mt-20" id="colophon">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col">
    <p class="text-base text-macchiato-subtext0 leading-relaxed [&>a]:font-medium [&>a]:text-macchiato-blue dark:[&>a]:text-macchiato-yellow [&>a]:underline [&>a]:decoration-2 [&>a]:underline-offset-4 [&>a]:decoration-transparent hover:[&>a]:decoration-macchiato-blue dark:hover:[&>a]:decoration-macchiato-yellow [&>a]:transition-colors [&>a]:duration-200">
      ${data.text}
    </p>
  </div>
</section>
`;

export default Colophon;
