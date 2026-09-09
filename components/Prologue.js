const Prologue = (data) => `
<section class="flex flex-col w-full max-w-3xl" id="about">
  
  <div class="flex flex-col gap-1 mb-6">
    <h1 class="text-2xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h1>
    ${data.subtitle ? `
    <div class="flex items-center gap-2 text-macchiato-overlay0 font-medium mt-1">
      <span class="material-symbols-outlined text-[16px] text-macchiato-mauve">person</span>
      <span class="text-[13px] italic">${data.subtitle}</span>
    </div>
    ` : ''}
  </div>

  <div class="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-2 ruled-paper pb-14">
    <!-- Bio Text -->
    <div class="relative prose prose-sm md:prose-base max-w-none text-macchiato-text flex-1 overflow-hidden">
      ${data.bioHtml}
          
    </div>
    
    <!-- Profile Right Column -->
    <div class="flex flex-col items-center gap-4 shrink-0 mt-4 sm:mt-2">
      <!-- Photo Attachment (Postage Stamp Style) -->
      <div class="relative w-32 h-32 md:w-36 md:h-36 transition-transform duration-300 bg-macchiato-surface0 drop-shadow-sm"
           style="background-image: radial-gradient(circle, rgb(var(--color-crust)) 4px, transparent 4.5px); background-size: 14px 14px; background-position: -7px -7px;">
        <div class="absolute inset-[6px] bg-macchiato-surface0 p-1 border border-macchiato-surface1 flex items-center justify-center">
          <div class="w-full h-full overflow-hidden">
            <img src="${data.image}" alt="Profile" class="w-full h-full object-cover grayscale-[30%] contrast-110">
          </div>
        </div>
      </div>
      
      <!-- Sticky Note Status -->
      <div class="inline-flex items-center text-center relative z-10">
        <div class="px-3 py-1 w-[220px] md:w-[240px] flex justify-center bg-[#ecddaa] border border-[#d8c991] rounded-sm -rotate-2 relative shadow-md">
          <!-- Red Thumbtack Pin -->
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-macchiato-red shadow-md z-10 border border-macchiato-maroon flex items-center justify-center">
            <div class="w-1 h-1 rounded-full bg-white/50 absolute top-[2px] left-[2px]"></div>
          </div>
          <div id="status-container" class="transition-opacity duration-500 font-handwriting text-[18px] md:text-[20px] text-[#24273a] font-bold px-1 whitespace-nowrap"></div>
        </div>
      </div>
      
      <!-- Vintage Rubber Ink Stamp (Location) -->
      ${data.location ? `
        <div class="mt-4 relative z-10 select-none">
          <div class="inline-block rotate-[-4deg] hover:rotate-[-1deg] transition-transform duration-300 opacity-80 hover:opacity-100">
            <div class="border-[3px] border-double border-macchiato-red/60 rounded-md px-3 py-1 flex flex-col items-center shadow-sm">
              <span class="text-[8px] font-mono font-bold tracking-[0.2em] text-macchiato-red/80 uppercase mb-0.5">BASED IN</span>
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] text-macchiato-red/80">location_on</span>
                <span class="text-[12px] font-mono font-black tracking-wider text-macchiato-red/90 uppercase">${data.location}</span>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
      
    </div>
  </div>

</section>
`;

export default Prologue;