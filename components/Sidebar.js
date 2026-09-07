const Sidebar = (data) => `
<div class="flex flex-col h-full w-full justify-between p-6 md:p-8 bg-macchiato-mantle md:bg-transparent overflow-hidden border-r-2 border-dashed border-macchiato-surface1/30">
  
  <!-- Top / Nav -->
  <div class="flex flex-col w-full h-full md:h-auto">
    
    <!-- Navigation -->
    <nav class="flex-1 min-w-0 flex flex-row md:flex-col justify-between md:justify-start gap-1 md:gap-4 w-full overflow-x-auto no-scrollbar items-center md:items-start font-body-md pl-4 pr-16 md:px-0">
      ${data.nav.map((item) => `
        <a href="${item.href}" id="nav-${item.href.substring(1)}" class="sidebar-link flex flex-shrink-0 items-center gap-1 md:gap-2 text-[16px] sm:text-[17px] md:text-[17px] text-macchiato-subtext0 hover:text-macchiato-text hover:underline decoration-2 decoration-macchiato-blue underline-offset-4 transition-all whitespace-nowrap py-4 md:py-0">
          <span class="font-medium">${item.label}</span>
        </a>
      `).join('')}
    </nav>
    
    <!-- Theme Toggle (Bookmark Ribbon) -->
    <div class="fixed top-0 right-6 md:absolute md:top-0 md:right-10 z-50 drop-shadow-md">
      <button aria-label="Toggle Theme" class="theme-toggle-btn w-10 h-16 md:w-12 md:h-20 bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-crust flex flex-col items-center pt-4 md:pt-5 hover:translate-y-3 hover:-rotate-2 transition-transform duration-300 outline-none cursor-pointer origin-top" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);">
        <div class="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px] flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-[20px] md:text-[24px] absolute transition-all duration-500 transform rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-50 dark:opacity-0">dark_mode</span>
          <span class="material-symbols-outlined text-[20px] md:text-[24px] absolute transition-all duration-500 transform -rotate-90 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100">light_mode</span>
        </div>
      </button>
    </div>
    
  </div>

  <!-- Bottom / Footer -->
  <div class="hidden md:flex flex-col gap-6 mt-auto">
    <div class="flex flex-col gap-2">
      <div class="flex gap-4">
        ${data.socials.map(social => `
          <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-text transition-colors" title="${social.label}">
            ${social.iconSvg}
          </a>
        `).join('')}
      </div>
      <p class="font-code-inline text-[11px] text-macchiato-surface2">
        &copy; ${new Date().getFullYear()} Jevi
      </p>
    </div>
  </div>
</div>
`;

export default Sidebar;
