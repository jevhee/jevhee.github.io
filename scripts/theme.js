const initTheme = () => {
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle-btn');

  function updateIcon(isDark) {
    if (!themeBtn) return;
    const iconSpan = themeBtn.querySelector('.material-symbols-outlined');
    if (iconSpan) {
      iconSpan.textContent = isDark ? 'dark_mode' : 'light_mode';
    }
  }

  function setTheme(theme) {
    const taglineEl = document.getElementById('footer-tagline');
    const faviconEl = document.getElementById('favicon');
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateIcon(true);
      if (taglineEl) taglineEl.textContent = 'Macchiato';
      if (faviconEl) faviconEl.href = 'assets/favicon-macchiato.svg';
    } else {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateIcon(false);
      if (taglineEl) taglineEl.textContent = 'Latte';
      if (faviconEl) faviconEl.href = 'assets/favicon-latte.svg';
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (systemPrefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // Handle toggle button click
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

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
