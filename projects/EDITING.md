# Editing the project archive

This directory uses plain HTML, CSS, and vanilla JavaScript. Open the files directly or serve them with GitHub Pages; there is no build step.

## Add an archive entry

Add an object to `archive-data.js` with `slug`, `title`, `summary`, `period`, and `role`. The slug is the detail-page filename without ".html". Keep periods in the form YYYY.MM – YYYY.MM. `archive.js` renders every object through the same accessible row template and sorts by end date, then start date, descending. The corresponding plain link can also be added to the archive page's noscript fallback.

## Reuse the detail-page template

Copy `self-priming-pump-cfd.html` to a new slug. Its static section pattern is shared by all six archive detail pages:

1. Project hero: title, summary, period, role, original conceptual SVG.
2. Two-column research challenge and objective.
3. Core concept and system pipeline.
4. Methodology, with optional parallel branches.
5. Optional project-specific comparison or architecture.
6. Key technical components.
7. Research timeline.
8. Project information and archive link.

Update the document title, description, text, image accessibility label, and supplied project facts. Retain the standard navigation, stylesheet references, IDs, and archive links. Each page remains readable without JavaScript.

Reusable visual patterns in `project.css` and `archive.css`:
- `flow`: ordered process; set --stages to its number of items.
- `combined-flow`: complementary elements joined with plus signs.
- `parallel-sources`: inputs that converge into a shared process.
- `feedback-loop`: sensing and control feedback.
- `components`, `timeline`: responsive technical components and research phases.

Use only confirmed project information. If research milestones are unavailable, show only the supplied project start and end. Keep diagrams conceptual and avoid implying measured performance or completed outcomes.

The three existing featured cards in the main page are maintained separately and remain unchanged.
