# Infinitum Website

A modern, single-page website featuring full-viewport sections and scroll-triggered animations.

## 🚀 Features

- **Rocket Launch Animation**: Logo animates with parallax effect as you scroll
- **Full-Viewport Sections**: Each section takes up the entire screen
- **Responsive Navigation**: Appears on scroll, mobile-friendly hamburger menu
- **Smooth Scrolling**: Seamless navigation between sections
- **Accessibility**: Respects `prefers-reduced-motion` setting
- **Mobile Responsive**: Optimized for all screen sizes

## 📁 File Structure

```
infinitum-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and layout
├── script.js           # Animations and interactions
├── logo.JPG            # Infinitum logo (rocket + infinity symbol)
├── content.md          # Content planning document
├── layout.md           # Layout specifications
└── README.md           # This file
```

## 🎨 Sections

1. **Main (Hero)** - Rocket logo with headline and subheadline
2. **Who We Are** - Split layout with text and abstract visual
3. **What We Do** - Background overlay with services list
4. **Contact** - Contact form and information
5. **Footer** - Copyright and links

## 🖼️ Images To Replace

Currently using gradient placeholders. Replace with actual stock photos:

### Who We Are Section
- **File**: `who-we-are.jpg` (or update HTML)
- **Specs**: Abstract tech visual (nodes, circuits, digital patterns)
- **Colors**: Blues, purples, teals
- **Size**: Min 1200x800px
- **Update in**: `index.html` line 59

### What We Do Background
- **File**: `what-we-do-bg.jpg`
- **Specs**: Precision tech imagery (circuit boards, code, tech details)
- **Size**: Min 1920x1080px
- **Update in**: `styles.css` line 285 (uncomment background-image)

### Stock Photo Resources
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

## 🚀 How to View

Simply open `index.html` in a web browser:

```bash
# Option 1: Double-click index.html

# Option 2: Use a local server (recommended for testing)
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

## ⚙️ Customization

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #4169E1;
    --primary-purple: #9B59B6;
    /* ... more colors */
}
```

### Update Content
All text content is in `index.html`. Search for section IDs:
- `#main` - Hero section
- `#who-we-are` - About section
- `#what-we-do` - Services section
- `#contact` - Contact section

### Adjust Animation
Modify settings in `script.js`:
```javascript
const CONFIG = {
    navTriggerPoint: 0.7,  // When nav appears (0-1)
    // ... more settings
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px

## 🎯 Next Steps

1. **Source Images**: Find and add stock photos for "Who We Are" and "What We Do"
2. **Test**: Open in different browsers and devices
3. **Form Integration**: Connect contact form to backend/email service
4. **SEO**: Add meta tags, Open Graph tags
5. **Analytics**: Add Google Analytics or similar
6. **Deploy**: Host on Netlify, Vercel, GitHub Pages, etc.

## 🛠️ Form Submission

Currently the form shows an alert. To connect to a backend:

1. **Email Service** (Formspree, EmailJS)
2. **Backend API** (Node.js, PHP, etc.)
3. **Serverless** (Netlify Forms, AWS Lambda)

Update the `handleFormSubmit()` function in `script.js`.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

© 2026 Infinitum. All rights reserved.

---

Built with ❤️ using HTML, CSS, and vanilla JavaScript.
