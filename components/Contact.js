const Contact = (data) => {
  if (!data) return '';

  return `
<section class="flex scroll-mt-20 flex-col" id="contact">
  <div class="mb-6 flex flex-col gap-1">
    <h2 class="text-3xl font-bold leading-tight tracking-tight text-macchiato-text sm:text-3xl">
      ${data.title}
    </h2>
    <div class="prose prose-xl relative max-w-none overflow-hidden text-macchiato-text">
      <p>${data.subtitle}</p>
    </div>
  </div>

  <div class="flex flex-col">
    <p class="text-[15px] sm:text-base text-macchiato-subtext0 leading-relaxed mb-6">
      ${data.text}
    </p>

    <ul class="list-none pl-0 m-0 space-y-1 -my-3 border-t border-dashed border-macchiato-surface2 pt-3">
      <li class="relative text-base text-macchiato-text">
        <a href="mailto:${data.email}" class="group flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between py-3 -mx-3 px-3 rounded-lg hover:bg-macchiato-surface1/40 dark:hover:bg-macchiato-surface0/40 transition-colors">
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-base sm:text-lg mb-0.5 group-hover:text-macchiato-blue dark:group-hover:text-macchiato-yellow transition-colors flex items-center gap-1.5 text-macchiato-text">
              ${data.actionTitle}
            </div>
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-[13.5px] text-macchiato-subtext0 font-medium">
              <span>${data.actionSubtitle}</span>
            </div>
          </div>

          <div class="shrink-0 mt-1 sm:mt-0 text-[13.5px] font-medium text-macchiato-subtext0 flex items-center gap-2">
            <span class="font-bold group-hover:text-macchiato-blue dark:group-hover:text-macchiato-yellow transition-colors">${data.email}</span>
            <span class="sm:hidden flex items-center gap-1 font-bold ml-2 text-macchiato-blue dark:text-macchiato-yellow">
              Email 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
`;
};

export default Contact;
