# Colby Reichenbach Portfolio

Static GitHub Pages portfolio for Colby Reichenbach, positioned as an `Applied Data Systems Engineer`.

## Structure

```text
index.html
static/style.css
static/script.js
project_previews/
static/images/
robots.txt
sitemap.xml
```

## Content model

- `index.html` contains the site structure, SEO metadata, JSON-LD, project cards, and project modals.
- `static/style.css` contains layout, responsive behavior, accessibility states, filters, cards, and modal styles.
- `static/script.js` handles the 3D card interaction, project filters, modal loading, keyboard accessibility, contact modal behavior, and analytics events.
- `project_previews/` contains the markdown loaded into project modals.

## Current project preview set

- `AIBS_preview.md`
- `draftkings_preview.md`
- `masters_preview.md`
- `opportunity_radar_preview.md`
- `proactive_retention_agent.md`
- `pulse_preview.md`
- `shelfops_preview.md`
- `spec-nyc_preview.md`

## Maintenance notes

- Keep the site static unless there is a deliberate decision to migrate stacks.
- Project cards and modal copy should stay aligned with the corresponding markdown files in `project_previews/`.
- External links that open new tabs should include `rel="noopener noreferrer"`.
- Any structured-data updates should keep the JSON-LD in `index.html` valid JSON.
- If a project is deprioritized, move it lower in the homepage hierarchy instead of making every project equally prominent.

## Local validation

```bash
node --check static/script.js
node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const blocks=[...html.matchAll(/<script type=\"application\\/ld\\+json\">([\\s\\S]*?)<\\/script>/g)]; for (const b of blocks) JSON.parse(b[1]); console.log('JSON-LD OK')"
python3 -m http.server 4173
```
