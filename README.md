# Legal Site

This repository is the standalone public legal site for Wardrobe.

## What is in this repo

- `content/`: source policy documents in English and Turkish
- `scripts/build-legal-site.mjs`: static site generator
- `public/`: deployable static pages and assets after build

## Before publishing

Update [site.config.json](/Users/main/Documents/GitHub/legal/site.config.json) with the real production values:

- `baseUrl`

If you later want a public contact channel, you can extend the support page with a form URL or email.

## Build

```bash
npm run build
```

This generates the deployable site into `public/`:

- `public/index.html`
- `public/privacy/`
- `public/terms/`
- `public/account-deletion/`
- `public/support/`
- `public/tr/...`
- `public/assets/styles.css`
- `public/.nojekyll`

## Deploy

You can deploy this repository as a static site on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

On Vercel, the output directory is `public`.
