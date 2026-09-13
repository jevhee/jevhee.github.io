const Prologue = (data) => `
<section class="flex flex-col w-full max-w-3xl" id="about">
  
  <div class="flex flex-col gap-1 mb-5">
    <!-- Photo -->
    <div class="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden bg-macchiato-blue dark:bg-macchiato-yellow shrink-0 rounded-2xl mb-6">
      <img src="${data.image}" alt="Profile" class="w-full h-full object-cover grayscale-[30%] contrast-110 scale-110">
    </div>
    
    <h1 class="font-handwriting text-4xl sm:text-5xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h1>
  </div>

  <div class="flex flex-col items-start w-full">
    <div class="relative prose prose-lg sm:prose-xl max-w-none text-macchiato-text overflow-hidden">
      ${data.bioHtml}
    </div>
    
    <a href="mailto:jevisa40@gmail.com" class="group mt-6 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 font-bold">
      Get in touch
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 512 512" fill="currentColor">
        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
      </svg>
    </a>
  </div>

</section>
`;

export default Prologue;
