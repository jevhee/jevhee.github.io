const Navigation = () => `
  <div class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 translate-y-24 opacity-0 flex" id="floating-nav">
    <button id="back-to-top" aria-label="Back to top" class="magnetic-btn group relative flex items-center justify-center rounded-full bg-macchiato-surface0/80 backdrop-blur-md border border-macchiato-surface2/50 shadow-xl hover:bg-macchiato-blue hover:text-macchiato-base transition-colors duration-300 w-11 h-11 text-macchiato-text">
      <span class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1">arrow_upward</span>
      </span>
    </button>
  </div>
`;

export default Navigation;
