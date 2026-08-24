# The Italian Reset — Landing Page

A promo landing page for The Italian Reset retreat (Puglia, Italy — June 19–26, 2027).

## Files

- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — mobile nav toggle

## Before publishing

- [ ] Replace the `#book` / `#` placeholder links on the "Reserve My Spot" buttons with the real Stripe checkout/payment link
- [ ] Swap the placeholder host and testimonial circles for real photos (add descriptive `alt` text)
- [ ] Confirm the `<link rel="canonical">` and Open Graph URLs in `index.html` match wherever this page actually lives (custom domain vs. github.io)
- [ ] If pointing a custom domain (e.g. `promo.theitalianreset.com`) at this repo, add a `CNAME` file with that domain — GitHub Pages settings will prompt for this

## Local preview

Open `index.html` directly in a browser, or run a simple local server from this folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
