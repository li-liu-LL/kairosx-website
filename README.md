# KairosX Website — Source

Private source repository for the KairosX corporate website. This is where the
team edits the site. **Live site:** https://li-liu-ll.github.io/kairosx-website/

## How publishing works

This repo is private. GitHub Pages (free) only serves public repos, so a GitHub
Action publishes the site for us:

- Push to `main` → `.github/workflows/deploy.yml` runs → it copies the site files
  to the public repo **`li-liu-LL/kairosx-website`**, which hosts the live Pages site.
- Deploys take ~1–2 minutes after a push. Watch them under the **Actions** tab.
- **Do not edit `li-liu-LL/kairosx-website` directly** — it is auto-generated and
  every deploy overwrites it. All changes happen here, in this repo.

Auth uses an SSH **deploy key**: the private key is stored as the repo secret
`DEPLOY_KEY`; the matching public key is a write-enabled deploy key on the public repo.

## Editing

It's a plain static site — HTML + one CSS file + one JS file. No build step.

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `about.html` | About |
| `jurisdictions.html` | Jurisdictions — Bhutan fact sheet + timeline |
| `contact.html` | Contact (mailto form) |
| `privacy.html` | Privacy & legal notice |
| `404.html` | Not-found page (uses `/kairosx-website/…` absolute paths for the subpath) |
| `styles.css` | All styling — gold (`#c8a96b`) on navy (`#0a1a35`), Inter |
| `script.js` | Contact-form `mailto:` (set `CONTACT_INBOX` here) |
| `assets/` | Logos, favicon, fonts |

## Preview locally

```sh
python3 -m http.server 4173
# open http://localhost:4173/
```

## Workflow

1. Create a branch, edit, open a pull request.
2. Merge to `main` → it auto-deploys to the live site.

## Notes

- Brand: gold-on-navy, Inter, the signature gold bar. Keep regulatory wording
  conservative; the Bhutan facts (KairosX Gelephu Pte. Ltd., In-Principle Approval
  from the Gelephu Mindfulness City Authority, subject to conditions) must stay exact.
- `404.html` uses root-absolute `/kairosx-website/…` paths because it can render at
  any URL depth. If the site moves to a custom domain, change those back to `/…`.
