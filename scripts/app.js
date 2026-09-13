import SITE_CONTENT from '../data/content.js';
import Header from '../components/Header.js';
import Prologue from '../components/Prologue.js';
import Timeline from '../components/Timeline.js';
import Builds from '../components/Builds.js';
import Log from '../components/Log.js';
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
      Timeline(SITE_CONTENT.timeline),
      Builds(SITE_CONTENT.builds),
      Log(SITE_CONTENT.log),
      Footer(SITE_CONTENT.socials || []),
    ].join(separator);

    // Fade-in animation
    contentEl.classList.add('transition-all', 'duration-500', 'ease-out');
    requestAnimationFrame(() => {
      contentEl.classList.remove('opacity-0', 'translate-y-4');
      contentEl.classList.add('opacity-100', 'translate-y-0');
    });
  }

  initTheme();
});
