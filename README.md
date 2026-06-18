# KairosX Website

Static frontend prototype for `KairosX.com`, using the supplied KairosX media assets and brand system.

## Pages

- `index.html` - Home page and corporate positioning.
- `about.html` - KairosX identity, mission, focus, and governance placeholder.
- `businesses.html` - Digital assets, payments, financial infrastructure, strategic investments, and emerging markets.
- `jurisdictions.html` - KairosX Bhutan, KairosX Luxembourg, and future jurisdiction evaluation.
- `contact.html` - External contact form (mailto handoff).
- `privacy.html` - Privacy and legal notice (footer-linked).
- `404.html` - Branded not-found page (uses root-absolute paths).
- `styles.css` - Shared institutional layout, gold-on-navy brand, and responsive styling.
- `script.js` - Contact-form mailto composition.
- `assets/` - KairosX logos, favicon, symbol, and Inter font files.

## Run Locally

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173/` from inside `08_website`.

## Notes

- Design direction: Institutional Corporate, on the official KairosX brand — gold (`#c8a96b`) on deep navy (`#0a1a35`), Inter type, and the signature short gold bar above hero/page headings. Matches the regulatory deck in `07_slides/`.
- Public positioning: KairosX is a financial infrastructure company first, with jurisdiction-specific activity described separately.
- Regulatory claims use conservative wording: KairosX Bhutan is described as in-principle approved, and KairosX Luxembourg MiCA-related activity is described as subject to authorisation.
- The contact form composes a `mailto:` message to `info@kairosx.com` (set via `CONTACT_INBOX` in `script.js`). It opens the visitor's mail client and stores nothing server-side. Update `CONTACT_INBOX` if the destination changes before launch.
- `404.html` uses root-absolute (`/...`) paths so it renders correctly when served for an arbitrary missing URL. The other pages use relative (`./...`) paths and assume the site is served with `08_website/` as the web root.
