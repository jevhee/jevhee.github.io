const Navigation = () => `
  <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-macchiato-surface0/80 backdrop-blur-md border border-macchiato-surface2/50 shadow-xl transition-all duration-500 translate-y-24 opacity-0" id="floating-nav">
    
    <a href="#about" class="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface1/60 rounded-full transition-colors">About</a>
    <a href="#now" class="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface1/60 rounded-full transition-colors hidden sm:block">Now</a>
    <a href="#timeline" class="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface1/60 rounded-full transition-colors">Timeline</a>
    <a href="#builds" class="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface1/60 rounded-full transition-colors hidden sm:block">Builds</a>
    <a href="#contact" class="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-medium text-macchiato-subtext0 hover:text-macchiato-text hover:bg-macchiato-surface1/60 rounded-full transition-colors">Contact</a>

    <div class="w-px h-5 sm:h-6 bg-macchiato-surface2/60 mx-1"></div>

    <button id="back-to-top" aria-label="Back to top" class="magnetic-btn group relative flex items-center justify-center rounded-full bg-macchiato-surface1 hover:bg-macchiato-blue hover:text-macchiato-base transition-colors duration-300 w-8 h-8 sm:w-9 sm:h-9 text-macchiato-text shrink-0">
      <span class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out">
        <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1">arrow_upward</span>
      </span>
    </button>
  </nav>
`;

export default Navigation;
