import SITE_CONTENT from '../data/content.js';
import Header from '../components/Header.js';
import Prologue from '../components/Prologue.js';
import Timeline from '../components/Timeline.js';
import Builds from '../components/Builds.js';
import Log from '../components/Log.js';
import initTheme from './theme.js';

const Connect = (socials) => `
  <section class="flex flex-col items-center pb-20">
    <h2 class="text-3xl sm:text-3xl font-bold text-macchiato-text tracking-tight leading-tight mb-6">Connect</h2>
    <div class="flex gap-6">
      ${socials.map(social => `
        <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-blue dark:hover:text-macchiato-yellow transition-colors [&>svg]:w-10 [&>svg]:h-10" title="${social.label}">
          ${social.iconSvg}
        </a>
      `).join('')}
    </div>
    <div class="mt-20 text-[13.5px] text-macchiato-subtext0/80 font-medium">
      &copy; ${new Date().getFullYear()} Jevi Saputra
    </div>
  </section>
`;

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) headerContainer.innerHTML = Header();

  const contentEl = document.getElementById('page-content');
  if (contentEl) {
    const separator = '<div class="w-full h-12 sm:h-16"></div>';

    contentEl.innerHTML = [
      Prologue({ ...SITE_CONTENT.prologue, socials: SITE_CONTENT.socials }),
      Timeline(SITE_CONTENT.timeline),
      Builds(SITE_CONTENT.builds),
      Log(SITE_CONTENT.log),
      Connect(SITE_CONTENT.socials || [])
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

