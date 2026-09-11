const Prologue = (data) => `
<section class="flex flex-col w-full max-w-3xl" id="about">
  
  <div class="flex flex-col gap-1 mb-6">
    <div class="flex flex-col items-start mb-4">
      <!-- Photo -->
      <div class="w-28 h-28 sm:w-32 sm:h-32 overflow-hidden bg-macchiato-surface0 shrink-0 rounded-2xl shadow-sm mb-3">
        <img src="${data.image}" alt="Profile" class="w-full h-full object-cover grayscale-[30%] contrast-110">
      </div>

    </div>
    
    <h1 class="font-handwriting text-4xl sm:text-5xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h1>
    ${data.subtitle ? `
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden mt-2">
      <p>${data.subtitle}</p>
    </div>
    ` : ''}
  </div>

  <div class="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-2">
    <!-- Left Column: Bio & Button -->
    <div class="flex-1 flex flex-col items-start">
      <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
        ${data.bioHtml}
      </div>
      
      <a href="mailto:jevisa40@gmail.com" class="group mt-8 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 font-bold">
      Say Hello
      <span class="material-symbols-outlined text-[18px] group-hover:animate-bounce origin-bottom">waving_hand</span>
    </a>
    </div>
  </div>

</section>
`;

export default Prologue;