# brightschool-website

The Bright School website (www.brightschoolonline.com): an Astro static site, hosted on AWS Amplify, replacing the Wix site.

## Run it

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # output in dist/
```

Needs Node 22 or newer.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/pages/` | One file per URL. `index.astro` is the home page. |
| `src/data/site.ts` | Contact details, hours, prices, facts, team. Change facts here only. |
| `src/content/courses/` | One Markdown file per course or AI module. Adding a course is adding a file. |
| `src/content.config.ts` | The fields every course file must have. |
| `src/components/` | Header, footer and the sun logo. |
| `src/layouts/Base.astro` | Page shell: title, description, canonical URL, header and footer. |
| `src/styles/global.css` | Colours, fonts, spacing, buttons. |
| `DESIGN.md` | The design rules ("Blocks"). Read before adding a page. |
| `docs/url-map.md` | Every old Wix URL and what happens to it. |
| `docs/amplify-redirects.json` | The 301 list to paste into Amplify (Rewrites and redirects). |
| `amplify.yml` | Amplify build settings. |

## Rules

- URLs match the old site exactly: `www` host, no trailing slash. Check `docs/url-map.md` before renaming or removing a page.
- Never commit contact lists or anything with children's names. `.gitignore` blocks `*.csv`, `*.xlsx` and `contacts/`.
- `public/robots.txt` blocks all crawlers until launch. Swap it on launch day (the file says how).
- Course files start with `draft: true`; a page goes live when its copy is approved.
- Pages use the names in `global.css`, never raw colour or size values.

## Status

Home page built. Other pages linked from it (`/curriculum`, `/ai`, `/pricing`, `/about`, `/faq`, `/book-now`, course pages) do not exist yet.

To check on the first Amplify preview: that `/beginner` is served without a trailing slash or `.html` (the build writes `beginner.html`).
