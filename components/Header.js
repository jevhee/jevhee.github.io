const Header = (data) => `
<header class="fixed top-0 left-0 right-0 z-50 bg-macchiato-base/50 backdrop-blur-3xl border-b border-macchiato-surface0/60">
  <div class="h-16 max-w-[700px] mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between">
    <a class="flex items-center gap-space-xs" href="#about">
      <span class="font-code-inline font-bold text-headline-sm text-macchiato-text tracking-tight hover:text-macchiato-blue transition-colors">
        ${data.name}
      </span>
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
        <button aria-expanded="false" aria-label="Open navigation menu" class="w-8 h-8 flex items-center justify-center rounded-xl bg-macchiato-mantle text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0 transition-all border border-macchiato-surface0/60" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-dropdown'); const isHidden = menu.classList.contains('hidden'); menu.classList.toggle('hidden'); this.setAttribute('aria-expanded', isHidden); this.querySelector('.material-symbols-outlined').textContent = isHidden ? 'close' : 'menu';" type="button">
          <span class="material-symbols-outlined text-[20px]">menu</span>
        </button>
        <div class="hidden absolute right-0 top-12 w-48 py-2 rounded-xl bg-macchiato-mantle border border-macchiato-surface0/80 shadow-lg backdrop-blur-xl flex flex-col z-50" id="mobile-dropdown">
          ${data.navLinks.map(link => `
            <a class="flex items-center gap-2 px-3 py-2 font-body-sm text-macchiato-text hover:text-${link.color} hover:bg-macchiato-surface0 transition-colors" href="${link.href}" onclick="document.getElementById('mobile-dropdown').classList.add('hidden'); document.getElementById('mobile-menu-btn').querySelector('.material-symbols-outlined').textContent = 'menu';">
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
      <div class="flex items-center gap-space-2xs pl-space-2xs border-l border-macchiato-surface0/60">
        <button aria-label="Toggle color scheme" class="w-8 h-8 flex items-center justify-center rounded-xl bg-macchiato-mantle text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface0 transition-all border border-macchiato-surface0/60" type="button" id="theme-toggle-btn">
          <span class="material-symbols-outlined text-[18px]">light_mode</span>
        </button>
      </div>
    </div>
  </div>
</header>
`;
