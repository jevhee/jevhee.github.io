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

  <div class="group relative flex flex-col items-start justify-center gap-6 overflow-hidden rounded-2xl border border-macchiato-surface2 bg-macchiato-surface0/50 p-6 sm:p-8 transition-colors duration-500 hover:border-macchiato-blue/30 dark:hover:border-macchiato-yellow/30 hover:bg-macchiato-surface1/30">
    <!-- Status Pill -->
    <div class="inline-flex items-center gap-2.5 rounded-full border border-macchiato-surface2 bg-macchiato-base px-3.5 py-1.5 text-sm font-medium text-macchiato-subtext1">
      <div class="relative flex h-2 w-2 shrink-0">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-macchiato-blue/60 dark:bg-macchiato-yellow/60"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow"></span>
      </div>
      Available for work
    </div>

    <!-- Text -->
    <p class="text-[15px] max-w-xl leading-relaxed text-macchiato-subtext0 sm:text-base">
      ${data.text}
    </p>
    
    <!-- Big Text Link instead of button -->
    <a href="mailto:${data.email}" class="text-xl sm:text-3xl font-bold tracking-tight text-macchiato-text transition-colors duration-300 underline decoration-2 underline-offset-8 decoration-macchiato-surface2 hover:text-macchiato-blue hover:decoration-macchiato-blue dark:hover:text-macchiato-yellow dark:hover:decoration-macchiato-yellow">
      ${data.email}
    </a>

    <!-- Decorative Handwriting Accent -->
    <div class="absolute -bottom-8 -right-6 -rotate-12 opacity-10 transition-all duration-500 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:opacity-40 sm:-right-4 sm:opacity-20 sm:group-hover:opacity-60">
      <span class="font-handwriting text-7xl text-macchiato-blue dark:text-macchiato-yellow">
        say hi!
      </span>
    </div>
  </div>
</section>
`;
};

export default Contact;
