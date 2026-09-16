# Bongsu Hahn / ROCOS Laboratory

A responsive, English-only academic website using HTML, CSS, and minimal vanilla JavaScript. No dependencies, packages, frameworks, or build steps are required. All assets are local.

## Preview

Open `index.html` directly in a web browser. Navigation and content also work when JavaScript is disabled.

## Publish on GitHub Pages

1. Commit these files to the root of the repository and push to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main`, select `/ (root)`, and save.

The `.nojekyll` file tells GitHub Pages to serve the static files without Jekyll processing. Relative asset paths support both a user website and a project website.

## Edit content

All content is in `index.html`. Search for a section ID: `home`, `about`, `research`, `publications`, `projects`, `members`, `teaching`, or `contact`.

- **Profile:** Replace academic title, affiliation, biography note, and education placeholders with verified information.
- **Publications:** Each `<article class="publication">` is one citation. Copy an entry and replace all bracketed fields. Keep entries sorted by year, newest first. The existing years are template ordering examples, not claims of actual publications. Replace the `JOURNAL ARTICLE · PLACEHOLDER` label with `JOURNAL ARTICLE` after inserting a real citation. Add a verified DOI link inside the entry if available. Remove the publication template note after updating the list.
- **Projects:** Copy a `project-card`. Edit its title, description, research category, period, and role. Remove the template note when real projects have been entered.
- **Members:** Copy a `member-card` within its group. Replace names, positions, and research interests. Add photos to `assets/` and replace the placeholder div with `<img class="member-photo" src="assets/name.jpg" alt="Portrait of Name" width="400" height="400" loading="lazy">`. Use English alt text. Duplicate the encompassing group only when adding a new member category.
- **Teaching:** Replace course codes, titles, semesters, supervision information, and educational activities.
- **Contact:** Replace affiliation, email, and office placeholders. Once a real email address is available, use `<a href="mailto:name@example.edu">name@example.edu</a>` with the actual address.

Bracketed content and explicit placeholder notes are intentional. No unverified credentials, publications, projects, student names, or contact addresses are represented as real. Review the introductory research copy before publishing.

## Appearance and behavior

- Edit the CSS variables at the beginning of `styles.css` to change the color palette and maximum content width.
- The robotics diagram is an editable inline SVG in the Home section. It requires no image download.
- `script.js` controls the mobile menu, active section indicator, and copyright year.
- The design includes keyboard focus indicators, a skip link, reduced-motion support, responsive layouts, and print styles.
- Keep all visible text, metadata, captions, alternative text, and new content in English.
