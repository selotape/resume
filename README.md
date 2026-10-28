# resume

Ron Visbord's resume, live at https://selotape.dev/resume.

- `public/resume.html` is the resume, served at `/resume`. Edit this one.
- `Ron Visbord - Resume.pdf` is built from it by `scripts/pdf.mjs`. The `pdf`
  workflow rebuilds and commits it after every change to the page. The site
  serves it at `/resume.pdf`, behind the page's Download PDF button.
- `public/resume-assets/` holds the logos.

Deploys: Cloudflare Workers Builds runs `npx wrangler deploy` (config in
`wrangler.jsonc`) on every push to `main`. The Worker serves only the route
`selotape.dev/resume*`. The `check-live` workflow then checks the live page,
the PDF and the resume's links, and does so daily as well.

To build the PDF locally: `npm install --no-save playwright-core`, then
`node scripts/pdf.mjs`.
