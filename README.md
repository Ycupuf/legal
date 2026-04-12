# Legal Site

This repository is the standalone public legal site for Wardrobe.

## What is in this repo

- `content/`: source policy documents in English and Turkish
- `scripts/build-legal-site.mjs`: static site generator
- repo root output: deployable static pages and assets

## Before publishing

Update [site.config.json](/Users/main/Documents/GitHub/legal/site.config.json) with the real production values:

- `supportEmail`
- `baseUrl`

## Build

```bash
npm run build
```

This generates the deployable site directly in the repository root:

- `/index.html`
- `/privacy/`
- `/terms/`
- `/account-deletion/`
- `/support/`
- `/tr/...`
- `/assets/styles.css`
- `/.nojekyll`

## Deploy

You can deploy this repository as a static site on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

If the host asks for an output directory, use the repository root after running the build.
