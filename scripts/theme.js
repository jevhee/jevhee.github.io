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
    btn.addEventListener('click', () => {
      setTheme(htmlEl.classList.contains('dark') ? 'light' : 'dark');
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
