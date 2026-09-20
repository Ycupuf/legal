# Legal Site

This repository is the standalone public legal site for Wardrobe.

## What is in this repo

- `content/`: source policy documents in English and Turkish
- `scripts/build-legal-site.mjs`: static site generator
- `public/`: deployable static pages and assets after build

## Before publishing

This site intentionally contains exactly four public surfaces:

- `/privacy/` — Apple App Store privacy-policy URL and the full data disclosure
- `/terms/` — service, AI output, social content, and purchase terms
- `/account-deletion/` — the deletion path and what the app removes
- `/support/` — the App Store support URL and `help@wardrobeinfo.com` contact

The home pages are navigation only; they are not additional legal policies.

`[SUPPORT EMAIL]` is resolved from `site.config.json` and is currently
configured as `help@wardrobeinfo.com`. The public pages intentionally do not
publish a home address or a governing-law clause; those are separate account
or legal-contract concerns, not Apple Privacy URL fields. Update
`site.config.json` with the final public host before deployment.

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

On Vercel, the output directory is `public`. `vercel.json` adds a restrictive
content-security policy, clickjacking protection, MIME sniffing protection,
referrer policy, and permissions policy.
