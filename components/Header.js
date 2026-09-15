const Header = () => `
<header class="w-full flex items-center justify-end p-6 md:p-10 bg-transparent transition-colors duration-300">

  <button style="view-transition-name: theme-toggle;" aria-label="Toggle Theme" class="magnetic-btn theme-toggle-btn group relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base dark:text-macchiato-base hover:shadow-lg active:scale-95 flex items-center justify-center transition-all duration-300 outline-none shrink-0">
    <span class="magnetic-inner flex items-center justify-center w-full h-full pointer-events-none transition-transform duration-100 ease-out">
      <span class="relative flex items-center justify-center w-full h-full transition-transform duration-700 transform dark:rotate-[360deg]">
        <span class="material-symbols-outlined absolute transition-all duration-700 opacity-100 dark:opacity-0 group-hover:scale-110 text-[20px]" style="font-variation-settings: 'FILL' 1">dark_mode</span>
        <span class="material-symbols-outlined absolute transition-all duration-700 opacity-0 dark:opacity-100 group-hover:scale-110 text-[20px]" style="font-variation-settings: 'FILL' 1">light_mode</span>
      </span>
    </span>
  </button>
  
</header>
`;

export default Header;
