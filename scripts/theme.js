const initTheme = () => {
  const htmlEl = document.documentElement;

  function setTheme(theme) {
    const taglineEl = document.getElementById('footer-tagline');
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (taglineEl) taglineEl.textContent = 'Macchiato';
    } else {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (taglineEl) taglineEl.textContent = 'Latte';
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light');
  }

  // Handle toggle button clicks
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  });

  // Smooth scroll behavior for internal hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
