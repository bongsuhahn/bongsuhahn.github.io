// Progressive enhancement: every section and navigation link works without JavaScript.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const navigationLinks = [...navigation.querySelectorAll(':scope > a')];

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigationLinks.forEach(link => link.addEventListener('click', () => {
  const mobileMenuWasOpen = navigation.classList.contains('is-open');
  closeMenu();
  // Preserve keyboard focus when the mobile navigation is hidden.
  if (mobileMenuWasOpen) {
    const destination = document.querySelector(link.getAttribute('href'));
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
  }
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);

// The section crossing this reading line is reflected in the navigation.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}

document.querySelector('#copyright-year').textContent = new Date().getFullYear();

// Featured cards use the same metadata records as the archive and detail pages.
// Matching static values remain available without JavaScript.
document.querySelectorAll('#projects dl[data-project]').forEach(metadata => {
  const project = ROCOS_PROJECTS.find(item => item.slug === metadata.dataset.project);
  if (!project) return;
  const values = [project.period, window.ROCOS_LOCALE?.role || project.role, project.supportedBy];
  metadata.querySelectorAll('dd').forEach((value, index) => {
    value.textContent = values[index];
  });
});

// Native details/summary supplies keyboard behavior; expose its state explicitly.
const earlierPublications = document.querySelector('.earlier-publications');
if (earlierPublications) {
  const publicationToggle = earlierPublications.querySelector('summary');
  const syncPublicationToggle = () => {
    publicationToggle.setAttribute('aria-expanded', String(earlierPublications.open));
  };
  syncPublicationToggle();
  earlierPublications.addEventListener('toggle', syncPublicationToggle);
}
