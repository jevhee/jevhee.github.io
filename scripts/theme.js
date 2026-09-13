const initTheme = () => {
  const htmlEl = document.documentElement;

  const setTheme = (theme) => {
    htmlEl.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  // Initialize theme
  setTheme(localStorage.getItem('theme') || 'light');

  // Handle toggle button clicks
  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const isDark = htmlEl.classList.contains('dark');
      const nextTheme = isDark ? 'light' : 'dark';

      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      htmlEl.style.setProperty('--click-x', `${x}px`);
      htmlEl.style.setProperty('--click-y', `${y}px`);

      htmlEl.classList.add('transition-circle');

      if (!document.startViewTransition) {
        setTheme(nextTheme);
        return;
      }

      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    });
  });

  // Smooth scroll behavior for internal hash links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

export default initTheme;
