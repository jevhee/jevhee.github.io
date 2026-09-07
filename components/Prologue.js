const Prologue = (data) => `
<section class="flex flex-col w-full max-w-3xl" id="about">
  
  <div class="flex flex-col gap-1 mb-6">
    <h1 class="text-2xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h1>
    <div class="flex items-center gap-2 text-macchiato-overlay0 font-medium mt-1">
      <span class="material-symbols-outlined text-[16px] animate-pulse text-macchiato-mauve">edit</span>
      <div id="status-container" class="transition-opacity duration-500 text-[13px] italic"></div>
    </div>
  </div>

  <div class="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-2">
    <!-- Bio Text -->
    <div class="prose prose-sm md:prose-base max-w-none text-macchiato-text flex-1 ruled-paper pb-14">
      ${data.bioHtml}
    </div>
    
    <!-- Photo Attachment -->
    <div class="relative w-32 h-32 md:w-36 md:h-36 shrink-0 mt-4 sm:mt-2 rotate-3 hover:-rotate-1 transition-transform duration-300">
      
      <!-- Red Thumbtack Pin -->
      <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-macchiato-red shadow-md z-10 border border-macchiato-maroon flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-white/40 absolute top-0.5 left-0.5"></div>
      </div>
      
      <!-- Polaroid Image -->
      <div class="w-full h-full rounded-xl overflow-hidden border-[6px] border-macchiato-crust shadow-sm bg-macchiato-surface0/50">
        <img src="${data.image}" alt="Profile" class="w-full h-full object-cover">
      </div>
    </div>
  </div>

</section>
`;

export default Prologue;