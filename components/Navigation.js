const Navigation = () => `
  <div class="fixed inset-x-0 bottom-0 z-50 flex justify-end pointer-events-none mx-auto w-full max-w-4xl p-6 md:p-10 transition-all duration-500 translate-y-24 opacity-0" id="floating-nav">
    <button id="back-to-top" aria-label="Back to top" class="magnetic-btn pointer-events-auto group relative flex items-center justify-center rounded-full bg-macchiato-blue dark:bg-macchiato-yellow text-macchiato-base hover:shadow-lg active:scale-95 transition-all duration-300 w-11 h-11 shrink-0">
      <span class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1">arrow_upward</span>
      </span>
    </button>
  </div>
`;

export default Navigation;
