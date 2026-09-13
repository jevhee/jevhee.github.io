const Footer = ({ socials, siteInfo }) => `
  <section class="flex flex-col items-center pb-8 mt-4">
    <div class="flex gap-6 mb-6">
      ${socials
        .map(
          (social) => `
        <a href="${social.url}" target="_blank" class="text-macchiato-overlay0 hover:text-macchiato-blue dark:hover:text-macchiato-yellow transition-colors [&>svg]:w-7 [&>svg]:h-7" title="${social.label}">
          ${social.iconSvg}
        </a>
      `,
        )
        .join('')}
    </div>
    <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[13px] text-macchiato-subtext0/80 font-medium">
      <div class="flex items-center gap-1.5 hover:text-macchiato-text transition-colors cursor-default">
        <span>Crafted with</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span>in ${siteInfo.location}</span>
      </div>
      <span class="hidden sm:inline opacity-40">&bull;</span>
      <div class="opacity-75">
        &copy; ${new Date().getFullYear()} ${siteInfo.name}
      </div>
    </div>
  </section>
`;

export default Footer;
