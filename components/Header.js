const Header = () => `
<header class="w-full flex items-center justify-end p-6 md:p-10 bg-transparent transition-colors duration-300">

  <button aria-label="Toggle Theme" class="theme-toggle-btn group relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:opacity-90 active:scale-95 flex items-center justify-center transition-all duration-300 outline-none overflow-hidden shrink-0">
    <span class="material-symbols-outlined absolute transition-all duration-500 transform translate-y-0 opacity-100 dark:-translate-y-8 dark:opacity-0 group-hover:scale-110 text-[20px]">dark_mode</span>
    <span class="material-symbols-outlined absolute transition-all duration-500 transform translate-y-8 opacity-0 dark:translate-y-0 dark:opacity-100 group-hover:scale-110 text-[20px]">light_mode</span>
  </button>
  
</header>
`;

export default Header;
