// Explicit links preserve the equivalent page and current section.
// No automatic redirects or saved language preference.
const languageLinks = document.querySelectorAll('.language-switch a[href]');
function syncLanguageSection() {
  languageLinks.forEach(link => {
    const target = new URL(link.getAttribute('href'), document.baseURI);
    target.hash = location.hash;
    link.href = target.href;
  });
}
syncLanguageSection();
window.addEventListener('hashchange', syncLanguageSection);

// Move the existing selector rather than cloning it: language state, links,
// and keyboard focus remain attached to a single control at every width.
(() => {
  const selector = document.querySelector('#site-nav .language-switch');
  const menu = document.querySelector('.site-header .menu-toggle');
  if (!selector || !menu) return;
  const desktopPosition = document.createComment('Language selector desktop position');
  selector.before(desktopPosition);
  const mobileHeader = window.matchMedia('(max-width: 850px)');
  function placeLanguageSelector() {
    if (mobileHeader.matches) menu.before(selector);
    else desktopPosition.after(selector);
  }
  placeLanguageSelector();
  mobileHeader.addEventListener('change', placeLanguageSelector);
})();
