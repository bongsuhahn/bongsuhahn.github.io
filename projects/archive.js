// A shared editorial row template; no build step or external dependencies.
const archiveList = document.querySelector('#project-archive-list');
function textElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}
function archiveItem(project) {
  const item = document.createElement('article');
  item.className = 'archive-item';
  const link = document.createElement('a');
  link.className = 'archive-project-link';
  link.href = project.slug + '.html';
  link.setAttribute('aria-labelledby', 'title-' + project.slug);
  link.append(textElement('p', 'archive-period', project.period));
  const content = document.createElement('div');
  const title = textElement('h2', 'archive-project-title', project.title);
  title.id = 'title-' + project.slug;
  const locale = window.ROCOS_LOCALE;
  content.append(title, textElement('p', 'archive-summary', locale?.summaries[project.slug] || project.summary),
    textElement('p', 'archive-role', locale?.role || project.role),
    textElement('span', 'archive-view', locale?.viewProject || 'View project →'));
  link.append(content);
  item.append(link);
  return item;
}
function dateKey(project) {
  const [start, end] = project.period.split(' – ');
  return end + start;
}
if (archiveList) {
  const projects = [...ROCOS_PROJECTS].sort((a, b) => dateKey(b).localeCompare(dateKey(a)));
  archiveList.replaceChildren(...projects.map(archiveItem));
}
