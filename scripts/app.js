document.addEventListener('DOMContentLoaded', () => {
  // Inject components into DOM
  document.getElementById('header-container').innerHTML = Header(SITE_CONTENT.header);
  document.getElementById('about-container').innerHTML = About(SITE_CONTENT.about);
  document.getElementById('journeys-container').innerHTML = Journeys(SITE_CONTENT.journeys);
  document.getElementById('portfolio-container').innerHTML = Portfolio(SITE_CONTENT.portfolio);
  document.getElementById('posts-container').innerHTML = Posts(SITE_CONTENT.posts);
  document.getElementById('footer-container').innerHTML = Footer(SITE_CONTENT.footer);

  // Initialize interactions
  initTheme();
});
