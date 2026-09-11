import SITE_CONTENT from '../data/content.js';
import Header from '../components/Header.js';
import Prologue from '../components/Prologue.js';
import Timeline from '../components/Timeline.js';
import Builds from '../components/Builds.js';
import Log from '../components/Log.js';
import initTheme from './theme.js';

function renderPage() {
  const contentEl = document.getElementById('page-content');

  // Set initial state for fade-in animation
  contentEl.classList.add('opacity-0', 'translate-y-4');
  contentEl.classList.remove('transition-all', 'duration-500', 'ease-out', 'opacity-100', 'translate-y-0');

  const separator = '<div class="w-full h-12 sm:h-16"></div>';

  const html = `
    ${Prologue({ ...SITE_CONTENT.prologue, socials: SITE_CONTENT.socials })}
    ${separator}
    ${Timeline(SITE_CONTENT.timeline)}
    ${separator}
    ${Builds(SITE_CONTENT.builds)}
    ${separator}
    ${Log(SITE_CONTENT.log)}
    ${separator}
    <section class="flex flex-col items-center pb-20">
      <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight mb-8">Connect</h2>
      <div class="flex gap-6">
        ${SITE_CONTENT.socials ? SITE_CONTENT.socials.map(social => `
          <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-blue dark:hover:text-macchiato-yellow transition-colors [&>svg]:w-10 [&>svg]:h-10" title="${social.label}">
            ${social.iconSvg}
          </a>
        `).join('') : ''}
      </div>
    </section>
  `;

  contentEl.innerHTML = html;

  // Force reflow
  void contentEl.offsetWidth;

  // Add transition classes for fade in
  contentEl.classList.remove('opacity-0', 'translate-y-4');
  contentEl.classList.add('transition-all', 'duration-500', 'ease-out', 'opacity-100', 'translate-y-0');

}

document.addEventListener('DOMContentLoaded', () => {
  // Inject static components
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) headerContainer.innerHTML = Header();

  // Initialize interactions
  initTheme();

  // Initial render
  renderPage();
});

