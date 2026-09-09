import SITE_CONTENT from '../data/content.js';
import Sidebar from '../components/Sidebar.js';
import Prologue from '../components/Prologue.js';
import Journey from '../components/Journey.js';
import Showcase from '../components/Showcase.js';
import Notes from '../components/Notes.js';
import initTheme from './theme.js';

const routes = {
  'prologue': { component: Prologue, dataKey: 'prologue' },
  'showcase': { component: Showcase, dataKey: 'showcase' },
  'journey': { component: Journey, dataKey: 'journey' },
  'notes': { component: Notes, dataKey: 'notes' }
};

function renderPage() {
  const hash = window.location.hash.substring(1) || 'prologue';
  const route = routes[hash] || routes['prologue'];

  const contentEl = document.getElementById('page-content');

  // Prepare animation state (like a page being dropped/flipped)
  // 1. Remove all transition classes so it snaps to the start state immediately
  contentEl.classList.remove('transition-all', 'duration-500', 'ease-out', 'opacity-100', 'scale-100', 'translate-x-0', 'rotate-0');
  // 2. Set start state
  contentEl.classList.add('opacity-0', 'scale-95', 'translate-x-2', 'rotate-1');

  // Inject component HTML
  contentEl.innerHTML = route.component(SITE_CONTENT[route.dataKey]);

  // Force reflow so the browser registers the start state
  void contentEl.offsetWidth;

  // 3. Add transition classes and set end state
  contentEl.classList.remove('opacity-0', 'scale-95', 'translate-x-2', 'rotate-1');
  contentEl.classList.add('transition-all', 'duration-500', 'ease-out', 'opacity-100', 'scale-100', 'translate-x-0', 'rotate-0');

  // Re-initialize specific scripts per page
  if (route.dataKey === 'prologue') {
    initStatusFade();
  }

  const activeHash = routes[hash] ? hash : 'prologue';
  updateActiveNav(activeHash);
}

function updateActiveNav(activeHash) {
  const navLinks = document.querySelectorAll('.sidebar-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${activeHash}`) {
      link.classList.add('text-macchiato-text', 'underline');
      link.classList.remove('text-macchiato-subtext0');
    } else {
      link.classList.add('text-macchiato-subtext0');
      link.classList.remove('text-macchiato-text', 'underline');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject static components
  const sidebarData = {
    nav: SITE_CONTENT.nav,
    socials: SITE_CONTENT.socials
  };

  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) sidebarContainer.innerHTML = Sidebar(sidebarData);

  // Inject mobile footer
  const mobileFooter = document.getElementById('mobile-footer');
  if (mobileFooter) {
    mobileFooter.innerHTML = `
      <div class="flex gap-6 mb-2">
        ${SITE_CONTENT.socials.map(social => `
          <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-text transition-colors [&>svg]:w-6 [&>svg]:h-6" title="${social.label}">
            ${social.iconSvg}
          </a>
        `).join('')}
      </div>
      <p class="font-mono text-[11px] text-macchiato-surface2">
        &copy; ${new Date().getFullYear()} Jevi Saputra
      </p>
    `;
  }

  // Initialize interactions
  initTheme();

  // Initial render
  renderPage();
});

// Listen for hash changes to route pages
window.addEventListener('hashchange', () => {
  renderPage();
  window.scrollTo(0, 0); // Reset scroll position on navigation
});

let slidingInterval = null;

function initStatusFade() {
  const texts = SITE_CONTENT.prologue.statusTexts;
  const statusEl = document.getElementById('status-container');
  if (!statusEl || !texts || texts.length === 0) return;

  if (slidingInterval) clearInterval(slidingInterval);

  let textIndex = 0;
  statusEl.textContent = texts[textIndex];

  // Apply simple fade transition
  statusEl.style.transition = 'opacity 0.5s ease-in-out';
  statusEl.style.opacity = '1';

  slidingInterval = setInterval(() => {
    // Fade out
    statusEl.style.opacity = '0';

    setTimeout(() => {
      textIndex = (textIndex + 1) % texts.length;
      statusEl.textContent = texts[textIndex];

      // Fade in
      requestAnimationFrame(() => {
        statusEl.style.opacity = '1';
      });
    }, 500); // Wait for the fade out transition to complete
  }, 4000);
}
