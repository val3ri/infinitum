# Layout Plan

## Concept
Full-viewport scroll sections with "scroll down" indicators between each section.
Main section features rocket animation that transitions into navigation logo on scroll.

## Structure (top to bottom)
1. Main Section (Hero) — No visible navigation
2. **Scroll indicator** ↓
3. Navigation Bar appears (sticky)
4. Who We Are
5. **Scroll indicator** ↓
6. What We Do
7. **Scroll indicator** ↓
8. Contact
9. Footer

---

## Navigation Bar
**Behavior**: Hidden on page load, appears when scrolling past Main section

**Trigger:**
- Appears when user scrolls ~80% through Main section
- Rocket from Main section "flies up" and becomes nav logo

**Desktop Layout:**
- Position: Sticky/fixed at top
- Logo (small version of rocket) on left
- Navigation links on right: Home | Who We Are | What We Do | Contact
- Background: White or semi-transparent with subtle shadow
- Animation: Smooth fade-in or slide-down from top

**Mobile Layout:**
- Logo on left
- Hamburger menu icon on right
- Menu expands to full-screen or dropdown with section links

**Fallback (No Animation):**
- Traditional nav bar visible from page load
- Static logo on left, links on right
- Fully functional without JavaScript

---

## Main Section Layout (Hero)
**Style**: Logo-focused with scroll-triggered rocket animation

**Desktop:**
- Full viewport height (100vh)
- No navigation bar visible initially (clean, distraction-free)
- Logo image (logo.jpg) prominently displayed — centered
- **Rocket Animation**: As user scrolls down:
  - Rocket moves upward (parallax effect)
  - Scales down as it "flies"
  - Transitions into navigation bar logo position
  - Nav bar fades in simultaneously
- Headline + subheadline positioned below/around logo
- "Scroll down" indicator at bottom (animated arrow or text)

**Mobile:**
- Same concept, scaled appropriately
- Lighter animation for performance
- Logo/rocket remains focal point

**Animation Technical Details:**
- Scroll listener or Intersection Observer API
- CSS transforms (translateY, scale) for 60fps performance
- Smooth transition from full-size logo to nav logo
- Optional: GSAP ScrollTrigger for advanced effects

**Accessibility & Fallback Strategy:**

1. **Progressive Enhancement:**
   - Base: Static logo + visible nav bar (works without JS)
   - Enhanced: Rocket animation + appearing nav (with JS)

2. **Reduced Motion Support:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     /* Disable rocket animation */
     /* Show static logo + nav immediately */
   }
   ```

3. **Performance Detection:**
   - Check device capabilities and network speed
   - Fallback to static version on low-end devices

4. **Graceful Degradation:**
   - If animation fails: Static rocket logo + traditional nav bar from load
   - Site remains fully functional and professional
   - No broken layout or missing navigation

5. **Loading States:**
   - Display static logo immediately (prevent blank screen)
   - Prevent FOUC (Flash of Unstyled Content)

---

## Who We Are Layout
**Style**: Split layout — Image on one side, text on the other

**Desktop:**
- Full viewport height (100vh)
- 50/50 split: Text on left, image on right
- Text side: white background with padding, vertically centered content
- Image side: full-bleed image

**Mobile:**
- Stack vertically
- Image on top (50vh)
- Text below (white background, padding)

---

## What We Do Layout
**Style**: Background image with text card overlay

**Desktop:**
- Full viewport height (100vh)
- Background image covering full section
- Text card in bottom-left or top-right corner
- Card: white/semi-transparent background, listing services
- Padding around card for breathing room

**Mobile:**
- Background image adapts
- Text card repositions to bottom-center
- Full-width card with padding

---

## Contact Layout
**Style**: Split layout or centered design

**Desktop:**
- Full viewport height (100vh)
- Option A: Split (image left, contact form/details right)
- Option B: Centered contact form with subtle background
- Include email, phone, and simple form

**Mobile:**
- Centered layout works best
- Form fields stack vertically

---

## Footer
**Style**: Simple, minimal footer

**Content:**
- Copyright notice: "© 2026 [Company Name]. All rights reserved."
- Links: Privacy Policy, Terms of Service (if applicable)
- Social media icons (optional)
- Dark background with light text
- Height: ~80-100px

**Mobile:**
- Same layout, potentially stacked links

---

## Scroll Indicators
- Animated down arrow icon or "Scroll ↓" text
- Positioned at bottom center of each section
- Subtle animation (bounce or fade)
- Disappears on last section before footer
