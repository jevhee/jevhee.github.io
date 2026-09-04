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
  initTypingStatus();
});

function initTypingStatus() {
  const texts = SITE_CONTENT.about.status.texts;
  const statusEl = document.getElementById('typing-status');
  if (!statusEl || !texts || texts.length === 0) return;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      statusEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      statusEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end of sentence
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Pause before starting new sentence
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  // Start the typing effect
  type();
}
