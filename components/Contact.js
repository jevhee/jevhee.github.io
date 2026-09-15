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
    <p class="text-justify text-[15px] sm:text-base text-macchiato-subtext0 leading-relaxed mb-6">
      ${data.text}
    </p>

    <ul class="list-none pl-0 m-0 space-y-1 -my-3 border-t border-dashed border-macchiato-surface2 pt-3">
      <li class="relative text-base text-macchiato-text">
        <div class="flex flex-row gap-4 items-center justify-between py-3 transition-colors">
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-base sm:text-lg mb-0.5 text-macchiato-text">
              ${data.actionTitle}
            </div>
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-[13.5px] text-macchiato-subtext0 font-medium">
              <span>${data.actionSubtitle}</span>
            </div>
          </div>

          <div class="shrink-0">
            <a href="mailto:${data.email}" aria-label="Send email" class="magnetic-btn group relative flex items-center justify-center rounded-xl bg-macchiato-blue text-macchiato-base transition-all duration-300 hover:shadow-lg active:scale-95 dark:bg-macchiato-yellow h-10 w-10 sm:h-11 sm:w-11">
              <span class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out">
                <span class="material-symbols-outlined text-[20px] sm:text-[22px]" style="font-variation-settings: 'FILL' 1">send</span>
              </span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
`;
};

export default Contact;
