const Header = () => `
<header class="w-full flex items-center justify-end px-4 md:px-10 py-3 md:py-4 bg-transparent transition-colors duration-300">
  
  <div class="flex items-center gap-4 sm:gap-8">

    <div class="flex items-center flex-shrink-0">
      <button aria-label="Toggle Theme" class="theme-toggle-btn group relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-90 active:scale-95 flex items-center justify-center transition-all duration-300 outline-none overflow-hidden">
        <span class="material-symbols-outlined absolute transition-all duration-500 transform translate-y-0 opacity-100 dark:-translate-y-8 dark:opacity-0 group-hover:scale-110 text-[20px]">dark_mode</span>
        <span class="material-symbols-outlined absolute transition-all duration-500 transform translate-y-8 opacity-0 dark:translate-y-0 dark:opacity-100 group-hover:scale-110 text-[20px]">light_mode</span>
      </button>
    </div>
  </div>

</header>
`;

export default Header;