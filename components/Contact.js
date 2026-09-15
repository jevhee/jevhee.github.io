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
            <a href="mailto:${data.email}" aria-label="Send email" class="magnetic-btn group relative flex items-center justify-center rounded-full bg-macchiato-blue text-macchiato-base transition-all duration-300 hover:shadow-lg active:scale-95 dark:bg-macchiato-yellow h-11 w-11">
              <span class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                </svg>
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
