# Infinitum Bulgaria Website TODO

## 1. Content

- [x] Replace placeholder English copy with final English content.
- [x] Add Bulgarian copy for all sections.
- [x] Use the approved slogan:
  - EN: "Endless possibilities. Practical solutions."
  - BG: "Безкрайни възможности. Практични решения."
- [x] Present the company as a consulting partner for business development, IT, technical support, commercial support, and product market introduction.
- [x] Keep the messaging broad enough for different types of business clients.
- [x] Do not mention EBK or any specific client.

## 2. Sections

- [x] Main / Начало
  - Company name: Infinitum Bulgaria / Инфинитум България.
  - Add slogan and short positioning statement.
  - Use the logo as the main visual element.
- [x] Who We Are / Кои сме ние
  - Explain that the company connects business, technology, and practical execution.
  - Use a human/business consulting tone.
- [x] What We Do / Какво правим
  - Add service areas:
    - Business Development
    - Technical & Commercial Consulting
    - Product Introduction & Market Support
    - On-site & Remote Support
- [x] Contact / Контакти
  - Remove contact form.
  - Remove phone number.
  - Add only clickable email: info@infinitum-bulgaria.bg.
  - Use `mailto:info@infinitum-bulgaria.bg`.

## 3. Images

- [x] Use one background image per main section.
- [x] Recommended current image mapping:
  - Main: `website-pictures_unsplash/nasa-Q1p7bh3SHj8-unsplash.jpg`
  - Who We Are: `website-pictures_unsplash/dylan-gillis-KdeqA3aTnBY-unsplash.jpg`
  - What We Do: `website-pictures_unsplash/homa-appliances-_XDK4naBbgw-unsplash.jpg` or `website-pictures_unsplash/4_zhenyu-luo-kE0JmtbvXxM-unsplash.jpg`
  - Contact: `website-pictures_unsplash/andrew-neel-cckf4TsHAuw-unsplash.jpg`
- [x] Tune `background-position` for each section on desktop and mobile.
- [x] Add overlays where needed for text readability.
- [x] Keep unused images as reserves.

## 4. Design & UX

- [x] Keep the site as a polished one-page business card website.
- [x] Preserve the existing section anchors:
  - `#main`
  - `#who-we-are`
  - `#what-we-do`
  - `#contact`
- [x] Update navigation labels for bilingual support.
- [x] Keep the rocket/logo animation only if it still feels polished after the redesign.
- [x] Ensure all animations respect `prefers-reduced-motion`.
- [x] Make sure every section works well on mobile.
- [x] Avoid stock-looking or overly literal presentation.

## 5. Bilingual Version

- [x] Decide implementation approach:
  - Single page with language toggle, or
  - Separate `index.html` and `bg.html`.
- [x] English should be the main/default version.
- [x] Bulgarian version should be easily accessible from the navigation.
- [x] Keep URLs and anchors clean.

## 6. Technical

- [x] Add SEO meta tags.
- [x] Add Open Graph tags.
- [x] Set correct page title and description.
- [x] Add `legal.html` with Legal Notice information.
- [x] Add `privacy.html` with Privacy Policy information.
- [x] Link legal and privacy pages from the footer.
- [x] Include company details:
  - Legal entity: Инфинитум България ЕООД / Infinitum Bulgaria Ltd.
  - UIC/VAT: 208021678 / BG208021678
  - Registered address: БЪЛГАРИЯ, гр. София (1000), р-н Оборище, ул. "Георги Бенковски", 14, ет. 3
  - Managing director: Валери Пенчев
  - Email: info@infinitum-bulgaria.bg
- [x] Mention that the current site does not use analytics, tracking cookies, embedded media, or contact forms.
- [x] Mention local language preference storage.
- [x] Check image sizes and optimize if needed.
- [ ] Test local opening directly from `index.html`.
- [x] Optionally test with `python3 -m http.server 8000`.

## 7. Deployment

- [ ] Confirm hosting requirements.
- [ ] Confirm domain is pointed to the hosting provider.
- [ ] Upload final static files.
- [ ] Test the live domain on desktop and mobile.
- [ ] Test email link from the live site.

## 8. Version 2 Ideas

- [ ] Explore a scroll-based logo animation for the main section.
- [ ] Concept: the rocket launches upward from the infinity logo while scrolling down.
- [ ] On reverse scroll, the rocket should return and visually rebuild the full logo.
- [ ] Prepare separate logo assets before implementation:
  - Full logo fallback.
  - Infinity symbol without the rocket.
  - Rocket as a separate transparent PNG or SVG.
- [ ] Implement with vanilla JavaScript and CSS transforms if possible.
- [ ] Keep the animation optional and disable it for `prefers-reduced-motion`.
- [ ] Test carefully on desktop and mobile before enabling it on the live site.
