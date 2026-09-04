const Header = (data) => `
<header class="fixed top-0 left-0 right-0 z-50 bg-macchiato-mantle/50 backdrop-blur-3xl">
  <div class="h-16 max-w-[700px] mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between">
    <a class="flex items-center" href="#about" aria-label="Home">
      <div class="relative w-8 h-8 flex items-center justify-center overflow-hidden">
        <img src="assets/favicon-macchiato.svg" alt="${data.name}" class="absolute w-full h-full transition-all duration-300 transform scale-100 opacity-100 dark:scale-0 dark:opacity-0">
        <img src="assets/favicon-latte.svg" alt="${data.name}" class="absolute w-full h-full transition-all duration-300 transform scale-0 opacity-0 dark:scale-100 dark:opacity-100">
      </div>
    </a>
    <div class="flex items-center gap-space-sm">
      <nav class="hidden sm:flex items-center gap-1 font-body-sm text-[13px]">
        ${data.navLinks.map(link => `
          <a class="px-2.5 py-1 rounded-lg text-macchiato-subtext0 hover:text-${link.color} hover:bg-macchiato-mantle transition-colors" href="${link.href}">
            ${link.label}
          </a>
        `).join('')}
      </nav>
      <!-- Mobile Dropdown Button -->
      <div class="relative flex items-center sm:hidden">
        <button aria-expanded="false" aria-label="Open navigation menu" class="relative w-8 h-8 flex items-center justify-center rounded-xl text-macchiato-subtext0 hover:text-macchiato-text bg-transparent border-none outline-none shadow-none transition-all" id="mobile-menu-btn" onclick="
          const isOpen = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !isOpen);
          const menu = document.getElementById('mobile-dropdown');
          const iconMenu = document.getElementById('icon-menu');
          const iconClose = document.getElementById('icon-close');
          
          if (!isOpen) {
            menu.classList.remove('opacity-0', 'invisible', '-translate-y-2', 'scale-95');
            menu.classList.add('opacity-100', 'visible', 'translate-y-0', 'scale-100');
            iconMenu.classList.replace('rotate-0', 'rotate-90');
            iconMenu.classList.replace('scale-100', 'scale-0');
            iconMenu.classList.replace('opacity-100', 'opacity-0');
            iconClose.classList.replace('-rotate-90', 'rotate-0');
            iconClose.classList.replace('scale-0', 'scale-100');
            iconClose.classList.replace('opacity-0', 'opacity-100');
          } else {
            menu.classList.add('opacity-0', 'invisible', '-translate-y-2', 'scale-95');
            menu.classList.remove('opacity-100', 'visible', 'translate-y-0', 'scale-100');
            iconMenu.classList.replace('rotate-90', 'rotate-0');
            iconMenu.classList.replace('scale-0', 'scale-100');
            iconMenu.classList.replace('opacity-0', 'opacity-100');
            iconClose.classList.replace('rotate-0', '-rotate-90');
            iconClose.classList.replace('scale-100', 'scale-0');
            iconClose.classList.replace('opacity-100', 'opacity-0');
          }
        " type="button">
          <span id="icon-menu" class="material-symbols-outlined text-[20px] absolute transition-all duration-300 transform scale-100 opacity-100 rotate-0">menu</span>
          <span id="icon-close" class="material-symbols-outlined text-[20px] absolute transition-all duration-300 transform scale-0 opacity-0 -rotate-90">close</span>
        </button>
        <div class="absolute right-0 top-12 w-48 py-2 rounded-xl bg-macchiato-mantle border border-macchiato-surface0/80 shadow-lg backdrop-blur-xl flex flex-col z-50 transition-all duration-300 origin-top-right opacity-0 invisible -translate-y-2 scale-95" id="mobile-dropdown">
          ${data.navLinks.map(link => `
            <a class="flex items-center gap-2 px-3 py-2 font-body-sm text-macchiato-text hover:text-${link.color} hover:bg-macchiato-surface0 transition-colors" href="${link.href}" onclick="document.getElementById('mobile-menu-btn').click();">
              <span class="material-symbols-outlined text-[16px] text-${link.color}">${link.label === 'About' ? 'person' :
    link.label === 'Journeys' ? 'timeline' :
      link.label === 'Portfolio' ? 'devices' : 'edit_note'
  }</span>
              <span>${link.label}</span>
            </a>
          `).join('')}
        </div>
      </div>
      <!-- Color Scheme Toggle Button -->
      <div class="flex items-center gap-space-2xs">
        <button aria-label="Toggle color scheme" class="relative overflow-hidden w-8 h-8 flex items-center justify-center rounded-xl bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-90 active:scale-95 focus:outline-none transition-all border-none" type="button" id="theme-toggle-btn">
          <span class="material-symbols-outlined text-[18px] absolute transition-all duration-300 transform translate-y-0 opacity-100 dark:translate-y-8 dark:opacity-0">dark_mode</span>
          <span class="material-symbols-outlined text-[18px] absolute transition-all duration-300 transform -translate-y-8 opacity-0 dark:translate-y-0 dark:opacity-100">light_mode</span>
        </button>
      </div>
    </div>
  </div>
</header>
`;
