// Detail-page navigation uses ordinary links back to the main website.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

// Keep detail metadata synchronized with the archive's shared project records.
// Static HTML retains the same information when JavaScript is unavailable.
document.querySelectorAll('.project-meta[data-project]').forEach(metadata => {
  const project = ROCOS_PROJECTS.find(item => item.slug === metadata.dataset.project);
  if (!project) return;
  const fields = [['PERIOD', project.period], ['ROLE', project.role], ['SUPPORTED BY', project.supportedBy]];
  metadata.replaceChildren(...fields.map(([label, value]) => {
    const field = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    field.append(term, description);
    return field;
  }));
});
