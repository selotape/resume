# resume

Ron Visbord's resume, live at https://selotape.dev/resume.

- `Ron Visbord - CV.pdf` is the source PDF. The deploy copies it to
  `/resume.pdf`, which the page's Download PDF button serves.
- `public/resume.html` is the web version of the PDF, served at `/resume`.
  It prints to one US Letter page.
- `public/resume-assets/` holds the logos, taken from the PDF.

Deploys: Cloudflare Workers Builds runs `npx wrangler deploy` (config in
`wrangler.jsonc`) on every push to `main`. The Worker serves only the route
`selotape.dev/resume*`.
