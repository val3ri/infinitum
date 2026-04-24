// ==================== CONFIGURATION ====================
const CONFIG = {
    launchTrigger: 100, // Start launch after 100px scroll
    launchSpeed: 3, // Speed multiplier for rocket launch
    navTriggerPoint: 0.5, // Show nav when scrolled 50% through hero section
    animationDuration: 600,
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
};

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('main');
const heroLogo = document.querySelector('.hero-logo');
const navLogo = document.querySelector('.nav-logo img');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('.contact-form');

// ==================== ROCKET ANIMATION STATE ====================
let rocketState = {
    isLaunching: false,
    hasLanded: false,
    isReturning: false,
    flyingRocket: null,
    trail: null,
    initialPosition: null
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Throttle function to limit execution rate
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// ==================== NAVIGATION ====================

/**
 * Show/hide navigation bar based on scroll position
 */
function handleNavigation() {
    if (!heroSection || prefersReducedMotion()) {
        // Show nav immediately if reduced motion is preferred
        if (navbar) navbar.classList.add('visible');
        return;
    }

    const heroHeight = heroSection.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerPoint = heroHeight * CONFIG.navTriggerPoint;

    if (scrollY > triggerPoint) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

/**
 * Trigger the rocket launch — starts a time-based CSS animation from
 * the hero logo's current viewport position to the navbar logo position.
 */
function initRocketLaunch() {
    if (!heroLogo || rocketState.isLaunching) return;
    rocketState.isLaunching = true;

    const heroRect = heroLogo.getBoundingClientRect();

    // Compute where the nav logo sits when the navbar is visible.
    // The navbar has transform:translateY(-100%) while hidden, so offset by that.
    const navMatrix = new DOMMatrix(getComputedStyle(navbar).transform);
    const navOffsetY = navMatrix.m42; // translateY in px (negative when hidden)
    const navRawRect = navLogo.getBoundingClientRect();
    const navCenterX = navRawRect.left + navRawRect.width / 2;
    const navCenterY = navRawRect.top - navOffsetY + navRawRect.height / 2;

    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;

    const dx = navCenterX - heroCenterX;
    const dy = navCenterY - heroCenterY;
    const scale = navRawRect.height / heroRect.height;

    // Clone the hero logo and position it fixed at the same spot
    const flyingRocket = heroLogo.cloneNode(true);
    flyingRocket.className = 'rocket-flying';
    flyingRocket.style.top = `${heroRect.top}px`;
    flyingRocket.style.left = `${heroRect.left}px`;
    flyingRocket.style.width = `${heroRect.width}px`;
    flyingRocket.style.height = `${heroRect.height}px`;
    flyingRocket.style.setProperty('--rocket-dx', `${dx}px`);
    flyingRocket.style.setProperty('--rocket-dy', `${dy}px`);
    flyingRocket.style.setProperty('--rocket-scale', scale);
    document.body.appendChild(flyingRocket);
    rocketState.flyingRocket = flyingRocket;

    heroLogo.style.opacity = '0';

    // Start animation on next frame so the element is painted at its start position first
    requestAnimationFrame(() => {
        flyingRocket.style.animation = `rocketLaunch ${CONFIG.animationDuration}ms ${CONFIG.easing} forwards`;
    });

    flyingRocket.addEventListener('animationend', landRocket, { once: true });
}

/**
 * One-shot trigger: fires initRocketLaunch when scroll crosses the threshold.
 */
function handleRocketAnimation() {
    if (prefersReducedMotion() || rocketState.isLaunching || rocketState.hasLanded) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > CONFIG.launchTrigger) {
        initRocketLaunch();
    }
}

/**
 * Fly the logo back from navbar to hero when the user scrolls back up.
 */
function reverseRocketAnimation() {
    // Compute the nav logo's real viewport position, accounting for the navbar's
    // translateY offset (navbar may be hidden/off-screen at this point)
    const navMatrix = new DOMMatrix(getComputedStyle(navbar).transform);
    const navOffsetY = navMatrix.m42;
    const navRawRect = navLogo.getBoundingClientRect();
    const navCenterX = navRawRect.left + navRawRect.width / 2;
    const navCenterY = navRawRect.top - navOffsetY + navRawRect.height / 2;

    const heroRect = heroLogo.getBoundingClientRect();
    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;

    // Offset from hero position to nav position (used as starting transform)
    const dx = navCenterX - heroCenterX;
    const dy = navCenterY - heroCenterY;
    const scale = navRawRect.height / heroRect.height;

    // Clone sized as the hero logo, but starts transformed to the nav logo position
    const returningRocket = heroLogo.cloneNode(true);
    returningRocket.className = 'rocket-flying';
    returningRocket.style.top = `${heroRect.top}px`;
    returningRocket.style.left = `${heroRect.left}px`;
    returningRocket.style.width = `${heroRect.width}px`;
    returningRocket.style.height = `${heroRect.height}px`;
    returningRocket.style.setProperty('--rocket-dx', `${dx}px`);
    returningRocket.style.setProperty('--rocket-dy', `${dy}px`);
    returningRocket.style.setProperty('--rocket-scale', scale);
    document.body.appendChild(returningRocket);
    rocketState.flyingRocket = returningRocket;

    requestAnimationFrame(() => {
        returningRocket.style.animation = `rocketReturn ${CONFIG.animationDuration}ms ${CONFIG.easing} forwards`;
    });

    returningRocket.addEventListener('animationend', () => {
        returningRocket.remove();
        rocketState.flyingRocket = null;
        heroLogo.style.opacity = '1';
        rocketState.isLaunching = false;
        rocketState.hasLanded = false;
        rocketState.isReturning = false;
    }, { once: true });
}

/**
 * Trigger the return animation when the user scrolls back above the launch point.
 */
function resetRocket() {
    if (!rocketState.hasLanded || rocketState.isReturning) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY < CONFIG.launchTrigger) {
        rocketState.isReturning = true;
        navbar.classList.remove('rocket-landed');
        reverseRocketAnimation();
    }
}

/**
 * Complete the landing: remove clone and reveal the nav logo.
 */
function landRocket() {
    if (rocketState.hasLanded) return;
    rocketState.hasLanded = true;

    if (rocketState.flyingRocket) {
        rocketState.flyingRocket.remove();
        rocketState.flyingRocket = null;
    }

    navbar.classList.add('rocket-landed');
}

/**
 * Mobile menu toggle
 */
function toggleMobileMenu() {
    navLinks.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
}

/**
 * Close mobile menu when clicking a link
 */
function handleNavLinkClick() {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// ==================== SMOOTH SCROLLING ====================

/**
 * Smooth scroll to section when clicking nav links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== FORM HANDLING ====================

/**
 * Handle contact form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    // Show success message (customize as needed)
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    contactForm.reset();

    // TODO: Replace with actual form submission logic
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
}

// ==================== SCROLL EVENT HANDLER ====================

/**
 * Main scroll handler - throttled for performance
 */
const handleScroll = throttle(() => {
    handleNavigation();
    handleRocketAnimation();
    resetRocket();
}, 16); // ~60fps

// ==================== INTERSECTION OBSERVER ====================

/**
 * Fade in sections as they come into view
 */
function initScrollAnimations() {
    if (prefersReducedMotion()) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ==================== INITIALIZATION ====================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Set up event listeners
    window.addEventListener('scroll', handleScroll);

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize scroll animations
    initScrollAnimations();

    // Initial check for navigation visibility
    handleNavigation();

    // Console message
    console.log('🚀 Infinitum website initialized successfully!');
}

// ==================== LOAD EVENT ====================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==================== RESIZE HANDLER ====================

/**
 * Handle window resize events
 */
window.addEventListener('resize', throttle(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250));
