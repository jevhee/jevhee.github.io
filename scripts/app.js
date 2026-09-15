import SITE_CONTENT from '../data/content.js';
import Header from '../components/Header.js';
import Prologue from '../components/Prologue.js';
import Now from '../components/Now.js';
import Timeline from '../components/Timeline.js';
import Builds from '../components/Builds.js';
import Log from '../components/Log.js';
import Colophon from '../components/Colophon.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import initTheme from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) headerContainer.innerHTML = Header();

  const contentEl = document.getElementById('page-content');
  if (contentEl) {
    const separator = '<div class="w-full h-12 sm:h-16"></div>';

    contentEl.innerHTML = [
      Prologue(SITE_CONTENT.prologue),
      Now(SITE_CONTENT.now),
      Timeline(SITE_CONTENT.timeline),
      Builds(SITE_CONTENT.builds),
      Log(SITE_CONTENT.log),
      Contact(SITE_CONTENT.contact),
      Colophon(SITE_CONTENT.colophon),
      Footer({ socials: SITE_CONTENT.socials || [], siteInfo: SITE_CONTENT.siteInfo }),
    ].join(separator);

    // Fade-in animation for the main container
    contentEl.classList.add('transition-all', 'duration-500', 'ease-out');
    requestAnimationFrame(() => {
      contentEl.classList.remove('opacity-0', 'translate-y-4');
      contentEl.classList.add('opacity-100', 'translate-y-0');
    });
  }

  initTheme();
  initMagneticButtons();
  initReadingProgress();
  initDynamicTitle();
});

function initMagneticButtons() {
  const magnets = document.querySelectorAll('.magnetic-btn');

  magnets.forEach((btn) => {
    const inner = btn.querySelector('.magnetic-inner');

    btn.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Increase strength for smaller buttons (like circular icon buttons)
      const isSmall = rect.width < 80;
      const strength = isSmall ? 0.6 : 0.2;
      const innerStrength = isSmall ? 0.3 : 0.1;

      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      if (inner) {
        inner.style.transform = `translate(${x * innerStrength}px, ${y * innerStrength}px)`;
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
      if (inner) {
        inner.style.transform = 'translate(0px, 0px)';
      }
    });
  });
}

function initReadingProgress() {
  const progress = document.getElementById('reading-progress');
  if (!progress) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Avoid division by zero if page is too short
      if (docHeight <= 0) return;

      const scrollPercent = scrollTop / docHeight;
      requestAnimationFrame(() => {
        progress.style.width = `${scrollPercent * 100}%`;
      });
    },
    { passive: true },
  );
}

function initDynamicTitle() {
  const originalTitle = document.title;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = 'Miss you! come back 🥺';
    } else {
      document.title = originalTitle;
    }
  });
}
