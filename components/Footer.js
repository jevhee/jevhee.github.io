const Footer = (data) => `
<footer class="w-full bg-macchiato-mantle/50 py-space-2xl">
  <div class="max-w-[700px] mx-auto px-gutter-mobile md:px-gutter-desktop flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-macchiato-overlay0">
    <div class="flex items-center gap-space-xs">
      <span class="w-2 h-2 rounded-full bg-macchiato-teal animate-pulse"></span>
      <span id="footer-tagline">${data.tagline}</span>
    </div>
    <span>${data.copyright}</span>
  </div>
</footer>
`;

export default Footer;
