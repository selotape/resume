// Renders public/resume.html to the PDF the site serves, so the HTML is the
// single source. Run from the repo root: node scripts/pdf.mjs
// Needs playwright-core; on CI it uses the runner's installed Chrome.
import { chromium } from 'playwright-core';
import { pathToFileURL } from 'node:url';

const browser = await chromium.launch({ channel: process.env.CI ? 'chrome' : undefined });
const page = await browser.newPage();
await page.goto(pathToFileURL('public/resume.html').href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
// Page size and margins come from the page's own @media print rules.
await page.pdf({ path: 'Ron Visbord - Resume.pdf', preferCSSPageSize: true, printBackground: true });
await browser.close();
