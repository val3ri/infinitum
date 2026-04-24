# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Site

No build step required. Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

## Architecture

Static single-page marketing website — no framework, no dependencies, no build tool.

**Files:**
- `index.html` — All markup; five sections with anchor IDs: `#main`, `#who-we-are`, `#what-we-do`, `#contact`, and footer
- `styles.css` — All styling; uses CSS variables, Flexbox/Grid, CSS animations; mobile breakpoint at 768px
- `script.js` — All interactivity: scroll-triggered rocket launch animation, navbar reveal, Intersection Observer fade-ins, hamburger menu, form handler

## Key Design System

CSS variables defined in `:root`:
- `--primary-blue: #4169E1`, `--primary-purple: #9B59B6`, `--primary-pink: #E91E63`, `--primary-yellow: #FFD700`

All animations respect `prefers-reduced-motion`.

## Rocket Animation

The signature feature: on scroll past 100px, the `logo.JPG` rocket "launches" from the hero section and lands in the navbar. State is tracked in `rocketState` object in `script.js`. The navbar itself appears when the user scrolls 50% through the hero section.

## Pending Work (from README/tasks.md)

- Replace placeholder stock images (`who-we-are.jpg` 1200×800px, `what-we-do-bg.jpg` 1920×1080px)
- Wire up the contact form to a backend/email service
- Add SEO meta tags and Open Graph tags
