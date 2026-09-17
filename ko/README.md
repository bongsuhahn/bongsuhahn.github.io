# Korean mirror

The English site remains at the repository root. Every English HTML page has a matching Korean HTML page under `ko/`, with the same filenames and section IDs. Both versions work directly on GitHub Pages without a build step.

## Editing

- Edit Korean page copy directly in the corresponding HTML file. Update both languages when research content changes.
- Keep publication titles, author formatting, citations, DOI links, formal project titles, personal names, and official course titles in their original English form.
- Project dates, funding organizations, titles, and slugs remain in `../projects/archive-data.js`. Korean archive summaries and interface labels are in `locale.js`.
- Shared styles and behavior live outside `ko/`. `../language.css` contains language-selector styles and Korean-specific typography. Do not duplicate images or stylesheets here.
- Keep internal page links relative to the Korean directory structure. Only the EN selector should lead back to English pages.
- When adding a page, create its counterpart and add reciprocal `hreflang` links and page-specific EN / KO links. `../language.js` preserves section anchors; there are no automatic redirects.

Preview through a local HTTP server when checking the footer's CSS image mask; file URLs may be blocked by browser security rules.
