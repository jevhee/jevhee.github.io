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
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between py-3 transition-colors">
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-base sm:text-lg mb-0.5 text-macchiato-text">
              ${data.actionTitle}
            </div>
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-[13.5px] text-macchiato-subtext0 font-medium">
              <span>${data.actionSubtitle}</span>
            </div>
          </div>

          <div class="shrink-0 mt-1 sm:mt-0">
            <a href="mailto:${data.email}" class="text-macchiato-blue hover:text-macchiato-sapphire dark:text-macchiato-yellow dark:hover:text-macchiato-sapphire transition-colors duration-200 underline decoration-2 underline-offset-4 decoration-macchiato-surface2 hover:decoration-macchiato-blue dark:hover:decoration-macchiato-yellow font-bold text-[15px] sm:text-base">
              ${data.email}
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
