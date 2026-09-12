const Builds = (data) => `
<section class="flex flex-col scroll-mt-20" id="builds">
  <div class="flex flex-col gap-1 mb-6">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight">${data.title}</h2>
    <div class="relative prose prose-xl max-w-none text-macchiato-text overflow-hidden">
      <p>${data.subtitle}</p>
    </div>
  </div>
  
  <div class="flex flex-col">
    <ul class="list-none pl-0 m-0 space-y-1 -my-3">
      ${data.projects
        .map(
          (project) => `
        <li class="relative text-base text-macchiato-text flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between py-3 transition-colors border-b border-dashed border-macchiato-surface2 sm:border-none last:border-none">
          
          <div class="flex-1 flex flex-col">
            <div class="font-bold text-base sm:text-lg mb-0.5 text-macchiato-text">
              ${project.title}
            </div>
            <p class="leading-relaxed text-[14px] text-macchiato-subtext1 mb-1.5">${project.description}</p>
            
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-[13.5px] text-macchiato-subtext0 font-medium">
              ${project.stack.map((tech, index) => `<span>${tech}</span>${index < project.stack.length - 1 ? '<span class="opacity-30 font-bold text-[12px]">/</span>' : ''}`).join('')}
            </div>
          </div>

          <div class="flex gap-3 shrink-0 mt-2 sm:mt-0 items-center">
            ${
              project.links?.code
                ? `<a href="${project.links.code}" target="_blank" class="transition-colors flex items-center justify-center w-9 h-9 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-80" title="Source Code">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px] shrink-0" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>`
                : ''
            }
            ${
              project.links?.appStore
                ? `<a href="${project.links.appStore}" target="_blank" class="transition-colors flex items-center justify-center w-9 h-9 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-80" title="App Store">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px] shrink-0" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            </a>`
                : ''
            }
            ${
              project.links?.playStore
                ? `<a href="${project.links.playStore}" target="_blank" class="transition-colors flex items-center justify-center w-9 h-9 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-80" title="Play Store">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px] shrink-0" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/></svg>
            </a>`
                : ''
            }
          </div>

        </li>
      `,
        )
        .join('')}
    </ul>
  </div>
</section>
`;

export default Builds;
