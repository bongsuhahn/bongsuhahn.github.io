// Explicit language links keep the equivalent page and current section.
// No browser-language detection, redirects, or saved language preference.
// Set to true to reopen the Korean selector on every English page.
// English HTML defaults to disabled, including when JavaScript is unavailable.
const koreanLanguageEnabled = false;
if (document.documentElement.lang === 'en') {
  document.querySelectorAll('.language-switch a[lang="ko"]').forEach(link => {
    if (koreanLanguageEnabled) {
      link.setAttribute('href', link.dataset.languageHref);
      link.classList.remove('is-disabled');
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
    }
  });
}
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
