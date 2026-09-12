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
      ${socials
        .map(
          (social) => `
        <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-blue dark:hover:text-macchiato-yellow transition-colors [&>svg]:w-10 [&>svg]:h-10" title="${social.label}">
          ${social.iconSvg}
        </a>
      `,
        )
        .join('')}
    </div>
    <div class="mt-20 flex flex-col items-center gap-1.5 text-[13.5px] text-macchiato-subtext0/80 font-medium">
      <div class="flex items-center gap-1.5 hover:text-macchiato-text transition-colors cursor-default">
        <span>Crafted with</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span>in Malang</span>
      </div>
      <div class="text-[12.5px] opacity-75">
        &copy; ${new Date().getFullYear()} Jevi Saputra. All Rights Reserved.
      </div>
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
      Connect(SITE_CONTENT.socials || []),
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
