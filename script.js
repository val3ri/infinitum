// ==================== CONFIGURATION ====================
const CONFIG = {
    navTriggerPoint: 0.5
};

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('main');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('.contact-form');

// ==================== UTILITY FUNCTIONS ====================

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}

// ==================== NAVIGATION ====================

function handleNavigation() {
    if (!heroSection) return;

    if (prefersReducedMotion()) {
        navbar.classList.add('visible');
        return;
    }

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const triggerPoint = heroSection.offsetHeight * CONFIG.navTriggerPoint;

    if (scrollY > triggerPoint) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

// ==================== MOBILE MENU ====================

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function handleNavLinkClick() {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// ==================== SMOOTH SCROLLING ====================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== FORM HANDLING ====================

function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
    if (prefersReducedMotion()) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.section').forEach(section => observer.observe(section));
}

// ==================== INITIALIZATION ====================

const handleScroll = throttle(() => {
    handleNavigation();
}, 16);

function init() {
    window.addEventListener('scroll', handleScroll);

    if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', handleNavLinkClick));
    }

    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

    initSmoothScroll();
    initScrollAnimations();
    handleNavigation();

    console.log('🚀 Infinitum website initialized successfully!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('resize', throttle(() => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250));
