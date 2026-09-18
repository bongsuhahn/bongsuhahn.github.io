// Reuse the main Publications markup as the canonical record, including author
// emphasis, corresponding-author markers, citations, and DOI attributes.
(() => {
  const area = ROCOS_RESEARCH_RELATIONS[document.body.dataset.researchArea];
  if (!area) return;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  function disclosure(kind, rows) {
    const button = document.querySelector(`[data-related-toggle="${kind}"]`);
    const extra = rows.filter(row => row.dataset.additional === 'true');
    if (!extra.length) return; // No empty control when every related item is visible.
    extra.forEach(row => { row.hidden = true; });
    button.hidden = false;
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = `${expanded ? 'HIDE' : 'VIEW ALL'} RELATED ${kind.toUpperCase()} ${expanded ? '↑' : '→'}`;
      extra.forEach(row => { row.hidden = !expanded; });
    });
  }

  // Sort by the start date, not the archive's end-date ordering. Resolve and
  // sort a fresh array so neither shared project records nor relations mutate.
  const startDate = period => {
    const [, year, month, day = '01'] = period.match(/^(\d{4})\.(\d{2})(?:\.(\d{2}))?/);
    return Number(year) * 10000 + Number(month) * 100 + Number(day);
  };
  const relatedProjects = area.projects.map(relation => {
    const project = ROCOS_PROJECTS.find(record => record.slug === relation.slug);
    if (!project) throw new Error(`Missing related project: ${relation.slug}`);
    return { relation, project };
  }).sort((a, b) => startDate(b.project.period) - startDate(a.project.period));
  const projects = relatedProjects.map(({ relation, project }, index) => {
    const link = element('a');
    link.href = `../projects/${project.slug}.html`;
    link.dataset.additional = String(index >= area.projectLimit);
    const copy = element('div', 'related-project-copy');
    copy.append(element('h3', '', project.title), element('p', 'related-context', relation.context));
    link.append(element('span', 'related-period', project.period), copy, element('span', 'related-cue', 'View project →'));
    return link;
  });
  document.querySelector('[data-related-projects]').replaceChildren(...projects);
  disclosure('projects', projects);

  // Titles only: ongoing work is deliberately separate from published records.
  document.querySelector('[data-current-directions]').replaceChildren(
    ...area.directions.map(title => element('li', '', title))
  );

  async function publications() {
    const response = await fetch('../index.html');
    if (!response.ok) throw new Error('Unable to load publication records.');
    const source = new DOMParser().parseFromString(await response.text(), 'text/html');
    const featured = new Set(area.publications.featured);
    const requested = new Set([...featured, ...area.publications.additional]);
    const records = [...source.querySelectorAll('.publication-year-group .publication')]
      .map(article => ({
        article,
        title: article.querySelector('h5').textContent.trim(),
        year: Number(article.closest('.publication-year-group').querySelector('.publication-year').textContent)
      }))
      .filter(record => requested.has(record.title))
      .sort((a, b) => b.year - a.year);
    if (records.length !== requested.size) throw new Error('A related publication title no longer matches the main Publications list.');
    const rows = records.map(({ article, title, year }) => {
      const row = article.cloneNode(true);
      const originalTitle = row.querySelector('h5');
      originalTitle.replaceWith(element('h3', '', title));
      row.dataset.additional = String(!featured.has(title));
      row.dataset.year = String(year);
      return row;
    });
    document.querySelector('[data-related-publications]').replaceChildren(...rows);
    disclosure('publications', rows);
  }
  // Keep the source link visible when opened without HTTP or when loading fails.
  publications().catch(error => console.warn('ROCOS related publications:', error.message));
})();
