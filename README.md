# Colby Reichenbach Portfolio

Static GitHub Pages portfolio for Colby Reichenbach, positioned around AI/ML and data product engineering.

## Structure

```text
index.html
me/
work/
project_previews/
static/
robots.txt
sitemap.xml
```

## Content Model

- `static/projects.js` is the shared project source for homepage orbit cards, the work grid, and modal readouts.
- `static/script.js` renders project cards, filters work projects, opens modals, restores focus after modal close, and traps focus inside open modals.
- `work/*/index.html` contains static project case-study pages for sharing, search, and LinkedIn Featured links.
- `project_previews/` contains markdown summaries aligned with the six primary audited projects.
- `static/style.css` contains the visual system, responsive layout, project cards, modal styles, capability grid, and case-study layout.

## Primary Project Set

- `AppTrail`
- `ShelfOps`
- `Pulse`
- `AiBS / ABS Observatory`
- `SPEC-NYC`
- `Augusta Defended`

## Maintenance Notes

- Keep the site static unless there is a deliberate decision to migrate stacks.
- Keep modal/card data in `static/projects.js`; avoid duplicating project claims in page-specific JavaScript.
- Keep project language claim-safe and aligned with the codebase audit boundaries in `portfolio_rewrite_spec.md`.
- External links that open new tabs should include `rel="noopener noreferrer"`.
- If analytics are added later, use basic portfolio events only: resume click, project modal open, repo/live click, case-study page view, and contact click.

## Local Validation

```bash
node --check static/projects.js
node --check static/script.js
node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const blocks=[...html.matchAll(/<script type=\"application\\/ld\\+json\">([\\s\\S]*?)<\\/script>/g)]; for (const b of blocks) JSON.parse(b[1]); console.log('JSON-LD OK')"
python3 -m http.server 4173
```
