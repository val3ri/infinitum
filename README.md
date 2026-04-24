# Infinitum Website

A modern, single-page marketing website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Scroll-triggered navbar**: Appears after scrolling 50% through the hero section, with the logo
- **Full-viewport sections**: Each section takes up the entire screen
- **Responsive navigation**: Mobile-friendly hamburger menu
- **Smooth scrolling**: Seamless navigation between sections
- **Fade-in animations**: Sections animate into view via Intersection Observer
- **Accessibility**: Respects `prefers-reduced-motion`
- **Mobile responsive**: Breakpoint at 768px

## File Structure

```
infinitum-website/
├── index.html      # All markup
├── styles.css      # All styling
├── script.js       # All interactivity
├── logo.JPG        # Infinitum logo (rocket + infinity symbol)
└── README.md
```

## Sections

1. **Main (Hero)** — Logo, headline, subheadline
2. **Who We Are** — Split layout with text and image placeholder
3. **What We Do** — Services with background overlay
4. **Contact** — Contact form
5. **Footer**

## How to Run

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #4169E1;
    --primary-purple: #9B59B6;
    --primary-pink: #E91E63;
    --primary-yellow: #FFD700;
}
```

### Navbar trigger point
```javascript
const CONFIG = {
    navTriggerPoint: 0.5  // 0–1, fraction of hero height
};
```

## Pending (Phase 1)

- Replace placeholder images (`who-we-are.jpg` 1200×800px, `what-we-do-bg.jpg` 1920×1080px)
- Wire up the contact form (Formspree, EmailJS, or custom backend)
- Add SEO meta tags and Open Graph tags

## Phase 2

- Rocket launch animation: logo flies from hero to navbar on scroll, returns on scroll back up

## Browser Support

Chrome, Firefox, Safari (latest versions), mobile browsers.

---

© 2026 Infinitum. All rights reserved.
