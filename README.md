# Web Fundamentals — HTML/CSS Demo

A small, self-contained component demo — no framework, no build step, no
package.json. Just semantic HTML, a design-token-driven stylesheet, and a
handful of lines of vanilla JavaScript for the one bit of interactivity
(the mobile nav toggle) that genuinely needs it.

This sits alongside [AnglerHub Web](https://github.com/Voorbeelden/anglerhub-web)
(Blade + Tailwind) and [AnglerHub Mobile](https://github.com/Voorbeelden/anglerhub-mobile)
(XAML) deliberately: those show framework-based front-end work, this shows
the plain HTML/CSS/JS underneath that both of them ultimately compile down
to — the same fundamentals I use day to day running [Websexpert](https://www.web-designs.eu),
a small web design & hosting business I own and run alongside development
work (see below).

## What it demonstrates

- **Design tokens over magic numbers** — every color, radius and shadow is
  a CSS custom property on `:root`; nothing below that block is a
  hardcoded value.
- **Fluid typography** — the heading scales smoothly between a minimum
  and maximum size via `clamp()`, instead of jumping at fixed breakpoints.
- **A genuinely accessible nav toggle** — real `<button>`, keyboard
  operable, `aria-expanded` kept in sync with the actual open/closed
  state so a screen reader announces the change, not just a visual one.
- **`prefers-reduced-motion` respected** — the small card entrance
  animation is skipped entirely for anyone who has that system setting
  on.
- **Focus rings never suppressed** — `:focus-visible` is styled to match
  the theme rather than removed with `outline: none`.

## Files

- `index.html` — semantic markup (`<header>`, `<nav>`, `<main>`,
  `<section>`, `<article>`, `<footer>`)
- `style.css` — the design-token layer and every component style
- `script.js` — the nav toggle, nothing else

## Running it

No build step — open `index.html` directly in a browser, or serve the
folder with any static file server.

---

### About Websexpert

Beyond application development, I also design and run infrastructure for
small business clients through **Websexpert** ([web-designs.eu](https://www.web-designs.eu)):
websites, webshops and small SaaS platforms, but also the server
management behind them — hardening, domain/DNS configuration, SSL
certificate provisioning and renewal, and ongoing hosting. Client
dashboards built through Websexpert include GDPR-compliant cookie/consent
handling, spam protection (invisible reCAPTCHA, honeypot fields, no
scrapeable contact details in the page source), and a full login audit
log for the owner-only admin area — the same kind of security-minded
default shown throughout the three application repositories in this
organization, applied at the infrastructure layer instead of the
application layer.
