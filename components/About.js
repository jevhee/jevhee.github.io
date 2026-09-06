import Chip from './ui/Chip.js';

const About = (data) => `
<section class="flex flex-col gap-space-lg scroll-mt-20" id="about">
  <!-- Terminal Banner -->
  <div class="relative w-full rounded-xl overflow-hidden bg-macchiato-mantle shadow-sm flex flex-col font-code-inline text-[13px] leading-relaxed group">
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none" style="background-image: radial-gradient(var(--color-text) 1px, transparent 1px); background-size: 14px 14px;"></div>

    <!-- Terminal Header -->
    <div class="relative z-10 h-8 bg-macchiato-mantle/50 backdrop-blur-md border-b border-macchiato-surface0/50 flex items-center px-3 gap-1.5 select-none">
      <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
      <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
      <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span class="text-[11px] font-medium text-macchiato-overlay0 flex items-center gap-1">
          <span class="material-symbols-outlined text-[13px]">terminal</span>
          ~ zsh
        </span>
      </div>
    </div>
    
    <!-- Terminal Body -->
    <div class="relative z-10 p-space-md flex flex-col gap-space-lg overflow-x-auto">
      <div class="flex items-start flex-col gap-1">
        <div class="flex items-center gap-2 text-macchiato-text font-headline-sm text-headline-sm tracking-tight">
          <span class="material-symbols-outlined text-macchiato-blue text-[20px]">terminal</span>
          <span>${data.banner.title}</span>
        </div>
        <span class="font-code-inline text-[11px] text-macchiato-subtext0">${data.banner.subtitle}</span>
      </div>
      
      <div class="flex items-start flex-col gap-1.5">
        <div class="text-macchiato-text whitespace-nowrap">
          <span class="text-macchiato-green font-medium">jevhee</span><span class="text-macchiato-text">:</span><span class="text-macchiato-blue font-medium">~</span><span class="text-macchiato-text">$</span> ./status --watch
        </div>
        <div class="pl-3 border-l-2 border-macchiato-surface1 flex items-center h-[24px]">
          <div class="flex items-center">
            <span class="font-code-inline text-[13px] text-macchiato-text font-semibold" id="typing-status"></span>
            <span id="typing-cursor" class="animate-pulse font-bold text-macchiato-teal ml-[1px]">|</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-space-xs mt-space-sm">
    <div class="flex items-center gap-space-md mt-space-2xs">
      <div class="relative shrink-0 w-16 h-16 rounded-full overflow-hidden bg-macchiato-mantle shadow-xs ring-1 ring-macchiato-surface1">
        <div class="w-full h-full rounded-full overflow-hidden bg-macchiato-surface0 relative">
          <img alt="${data.profile.name} - Profile Picture" class="w-full h-full object-cover object-top" src="${data.profile.image}" decoding="async" fetchpriority="high">
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="font-headline-lg text-headline-lg text-macchiato-text tracking-tight">${data.profile.name}</h1>
        <p class="font-body-md text-body-md text-macchiato-mauve font-medium">${data.profile.role}</p>
      </div>
    </div>
  </div>

  <!-- Bio Description -->
  <p class="font-body-lg text-body-lg text-macchiato-subtext0 leading-relaxed">
    ${data.profile.bioHtml}
  </p>

  <!-- Core Stack Badges -->
  <div class="flex flex-col gap-space-xs">
    <span class="font-label-sm text-label-sm text-macchiato-overlay0 uppercase tracking-wider font-code-inline font-medium">Core Tech Stack</span>
    <div class="flex flex-wrap gap-space-2xs">
      ${data.coreStack.map(stack => Chip({ label: stack.label })).join('')}
    </div>
  </div>

  <!-- Direct Social & Outreach Links -->
  <div class="flex flex-col gap-space-xs pt-space-2xs">
    <div class="flex items-center gap-1.5">
      <span class="material-symbols-outlined text-[14px] text-macchiato-blue">hub</span>
      <span class="font-code-inline text-label-sm uppercase tracking-wider text-macchiato-blue font-semibold">Find me on</span>
    </div>
    <div class="flex flex-wrap items-center gap-1">
      ${data.socialLinks.map(link => `
        <a class="flex items-center justify-center w-8 h-8 transition-colors duration-200 text-macchiato-subtext0 hover:text-${link.color} group" href="${link.url}" rel="noopener noreferrer" target="_blank" aria-label="${link.label}" title="${link.label}">
          <span class="flex items-center justify-center w-[24px] h-[24px]">${link.iconSvg}</span>
        </a>
      `).join('')}
    </div>
  </div>
</section>
`;

export default About;
