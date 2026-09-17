// Explicit language links keep the equivalent page and current section.
// No browser-language detection, redirects, or saved language preference.
const languageLinks = document.querySelectorAll('.language-switch a');
function syncLanguageSection() {
  languageLinks.forEach(link => {
    const target = new URL(link.getAttribute('href'), document.baseURI);
    target.hash = location.hash;
    link.href = target.href;
  });
}
syncLanguageSection();
window.addEventListener('hashchange', syncLanguageSection);
