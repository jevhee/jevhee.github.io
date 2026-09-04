const About = (data) => `
<section class="flex flex-col gap-space-lg scroll-mt-20" id="about">
  <!-- Monogram Workspace Banner -->
  <div class="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden border border-macchiato-surface0/70 bg-macchiato-mantle shadow-sm flex items-center justify-between p-space-md select-none group"
       onmousemove="
         const rect = this.getBoundingClientRect();
         const x = event.clientX - rect.left;
         const y = event.clientY - rect.top;
         this.style.setProperty('--mouse-x', x + 'px');
         this.style.setProperty('--mouse-y', y + 'px');
         const hue = Math.round((x / rect.width) * 360);
         this.style.setProperty('--glow-color', 'hsla(' + hue + ', 85%, 65%, 0.25)');
       "
       onmouseleave="this.style.setProperty('--glow-color', 'transparent');"
       style="--mouse-x: 50%; --mouse-y: 50%; --glow-color: transparent;"
  >
    <div class="absolute inset-0 bg-gradient-to-tr from-macchiato-crust/80 via-macchiato-mantle to-macchiato-surface0/30"></div>
    <div class="absolute -right-8 -bottom-10 w-44 h-44 rounded-full bg-macchiato-blue/15 blur-2xl pointer-events-none"></div>
    <div class="absolute -left-6 -top-8 w-36 h-36 rounded-full bg-macchiato-mauve/15 blur-2xl pointer-events-none"></div>
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none" style="background-image: radial-gradient(var(--color-text) 1px, transparent 1px); background-size: 14px 14px;"></div>
    
    <!-- Dynamic Mouse Glow -->
    <div class="absolute inset-0 pointer-events-none transition-colors duration-500" 
         style="background: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), var(--glow-color), transparent 100%);">
    </div>
    
    <div class="relative z-10 flex flex-col justify-between h-full">
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-macchiato-teal shadow-[0_0_6px_rgba(23,146,153,0.6)]"></span>
        <span class="font-code-inline text-label-sm text-macchiato-teal uppercase tracking-wider font-semibold">${data.banner.tag}</span>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center gap-2 text-macchiato-text font-headline-sm text-headline-sm tracking-tight">
          <span class="material-symbols-outlined text-macchiato-blue text-[20px]">terminal</span>
          <span>${data.banner.title}</span>
        </div>
        <span class="font-code-inline text-[11px] text-macchiato-subtext0">${data.banner.subtitle}</span>
      </div>
    </div>
    
    <div class="relative z-10 hidden sm:flex flex-col items-end gap-1.5">
      ${data.banner.chips.map(chip => `
        <div class="flex items-center gap-1 px-2 py-0.5 rounded bg-macchiato-surface0/80 border border-macchiato-surface1/70 font-code-inline text-[11px] text-${chip.color} shadow-xs font-medium">
          <span class="w-1.5 h-1.5 rounded-full bg-${chip.color}"></span>${chip.label}
        </div>
      `).join('')}
    </div>
  </div>

  <div class="flex flex-col gap-space-xs">
    <div class="flex items-center gap-space-xs">
      <span class="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-macchiato-mantle text-macchiato-teal font-label-sm text-label-sm border border-macchiato-teal/30 font-medium">
        <span class="w-1.5 h-1.5 rounded-full bg-macchiato-teal animate-ping"></span>${data.status.text}
      </span>
    </div>
    <div class="flex items-center gap-space-md mt-space-2xs">
      <div class="relative shrink-0 w-16 h-16 rounded-full overflow-hidden bg-macchiato-mantle shadow-xs ring-1 ring-macchiato-surface1">
        <img alt="${data.profile.name}" class="w-full h-full object-cover" src="${data.profile.image}">
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
      ${data.coreStack.map(stack => `
        <span class="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-macchiato-mantle font-code-inline text-label-sm text-macchiato-text border border-macchiato-surface0/80 shadow-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-${stack.color}"></span>${stack.label}
        </span>
      `).join('')}
    </div>
  </div>

  <!-- Direct Social & Outreach Links -->
  <div class="flex flex-col gap-space-xs pt-space-2xs">
    <div class="flex items-center gap-1.5">
      <span class="material-symbols-outlined text-[14px] text-macchiato-blue">hub</span>
      <span class="font-code-inline text-label-sm uppercase tracking-wider text-macchiato-blue font-semibold">Find me on</span>
    </div>
    <div class="flex flex-wrap items-center gap-space-sm">
      ${data.socialLinks.map(link => `
        <a class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-code-inline text-label-sm font-medium transition-all duration-200 shadow-xs border border-${link.color}/30 bg-macchiato-mantle text-macchiato-text hover:bg-${link.color}/15 hover:border-${link.color} hover:text-${link.color} group" href="${link.url}" rel="noopener noreferrer" target="_blank">
          <span class="material-symbols-outlined text-[16px] text-${link.color} group-hover:scale-105 transition-all">${link.icon}</span>
          <span class="font-medium">${link.label}</span>
        </a>
      `).join('')}
    </div>
  </div>
</section>
`;
