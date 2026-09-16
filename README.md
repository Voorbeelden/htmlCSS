# Web Fundamentals — HTML/CSS Demo

## About the Project

A small, self-contained component demo — no framework, no build step, no
`package.json`. Just semantic HTML, a design-token-driven stylesheet, and
a handful of lines of vanilla JavaScript for the one bit of interactivity
(the mobile nav toggle) that genuinely needs it.

This sits alongside [AnglerHub Web](https://github.com/Voorbeelden/AnglerWeb)
(Blade + Tailwind) and [AnglerHub Mobile](https://github.com/Voorbeelden/AnglerMobile)
(XAML) deliberately: those show framework-based front-end work, this shows
the plain HTML/CSS/JS underneath that both of them ultimately compile down
to — the same fundamentals used day to day running
[Websexpert](https://www.web-designs.eu), a small web design & hosting
business run alongside development work (see [About Websexpert](#about-websexpert)
below).

It's intentionally small. The point isn't scale — it's that the same
care (design tokens, fluid type, real accessibility, respecting a user's
motion preference) shows up whether the underlying tool is a full
framework or nothing at all.

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

## Technologies

- Semantic HTML5
- CSS3 — custom properties, `clamp()`, `grid`, `@media` feature queries
  (`prefers-reduced-motion`)
- Vanilla JavaScript (ES6), no dependencies

## Development Approach

Built the way a small, framework-free page should be built: markup first
(what is this content, structurally — a nav, a hero, a set of cards —
before any of it has a single style applied), then a design-token layer
that every component style pulls from, then the one piece of behaviour
that genuinely needs JavaScript, added last and kept as small as
possible. Nothing here reaches for a dependency a native CSS or HTML
feature already covers — no JS framework for a toggle, no CSS framework
for a spacing scale.

## Architecture

**A token layer, not scattered values.** Every color, spacing value,
radius and shadow used anywhere in `style.css` is declared once on
`:root` and referenced by name everywhere else — changing the whole
page's palette is a change to a handful of lines, not a find-and-replace
across the file.

**Fluid type instead of breakpoint jumps.** The heading's `font-size`
uses `clamp(1.9rem, 4vw + 1rem, 3rem)` — it scales continuously with the
viewport between those two bounds, rather than snapping between fixed
sizes at specific breakpoints the way a more traditional responsive
stylesheet would.

**Accessibility as a default, not an add-on.** The nav toggle is a real
`<button>` (not a styled `<div>` with a click handler), keeps
`aria-expanded` in sync with its actual state, and the page never
suppresses a focus ring — `:focus-visible` is restyled to match the dark
theme instead of being removed with `outline: none`, which is a common
but genuinely harmful shortcut for keyboard users.

## Repository scope

This is the entire project — there's no larger, curated-down original
behind it the way the other repositories in this organization have one.
It's a standalone demo written specifically to show plain HTML/CSS/JS
technique, not an excerpt of something bigger.

## Files

- `index.html` — semantic markup (`<header>`, `<nav>`, `<main>`,
  `<section>`, `<article>`, `<footer>`)
- `style.css` — the design-token layer and every component style
- `script.js` — the nav toggle, nothing else

## Running it

No build step — open `index.html` directly in a browser, or serve the
folder with any static file server.

## Future Improvements

- **No `<picture>`/responsive-image handling** — there's no imagery in
  this particular demo to need it, but a follow-up version with a real
  hero image would be the natural place to show `srcset`/`sizes` alongside
  the fluid-type approach already here.
- **No dark/light theme toggle** — the page is dark-only. Adding a
  `prefers-color-scheme`-aware light variant of the token layer would be
  a small, natural extension of the design-token approach already in
  place.

## What this demonstrates

- Semantic, accessible HTML written without a component framework
- A CSS custom-property-driven design-token system
- Fluid typography via `clamp()`
- Real accessibility defaults: keyboard-operable controls, synced ARIA
  state, and focus rings that are restyled rather than removed
- Respecting `prefers-reduced-motion` rather than assuming animation is
  always welcome
- Knowing when *not* to reach for a framework or dependency

## Development Summary

A deliberately small demo, built to show that the fundamentals — a
token-driven stylesheet, fluid type, and accessibility treated as a
default rather than an afterthought — hold up with nothing but plain
HTML, CSS and a few lines of JavaScript. No framework, no build step, no
dependency doing something a native browser feature already does.

---

## About Websexpert

Beyond application development, I also design and run infrastructure for
small business clients through **Websexpert** ([web-designs.eu](https://www.web-designs.eu)):
websites, webshops and small SaaS platforms, but also the server
management behind them — hardening, domain/DNS configuration, SSL
certificate provisioning and renewal, and ongoing hosting. Client
dashboards built through Websexpert include GDPR-compliant cookie/consent
handling, spam protection (invisible reCAPTCHA, honeypot fields, no
scrapeable contact details in the page source), and a full login audit
log for the owner-only admin area — the same kind of security-minded
default shown throughout the other repositories in this organization,
applied at the infrastructure layer instead of the application layer.

## License

Shared for portfolio purposes only. Not licensed for reuse, redistribution
or use as a starting point for a similar project.
