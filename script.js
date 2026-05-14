const CONFIG = {
    navTriggerPoint: 0.45,
    defaultLanguage: 'en'
};

const TRANSLATIONS = {
    en: {
        pageTitle: 'Infinitum Bulgaria | Endless possibilities. Practical solutions.',
        pageDescription: 'Infinitum Bulgaria is a consulting partner for business development, technology, product introduction, and practical technical and commercial support.',
        'legal.pageTitle': 'Legal Notice | Infinitum Bulgaria',
        'legal.pageDescription': 'Legal notice and company information for Infinitum Bulgaria Ltd.',
        'privacy.pageTitle': 'Privacy Policy | Infinitum Bulgaria',
        'privacy.pageDescription': 'Privacy policy for the Infinitum Bulgaria website.',
        brand: 'Infinitum Bulgaria',
        'nav.home': 'Home',
        'nav.who': 'Who We Are',
        'nav.what': 'What We Do',
        'nav.contact': 'Contact',
        'hero.title': 'Endless possibilities. Practical solutions.',
        'hero.subtitle': 'Consulting for business development, technology, market entry, and practical support where strategy needs real execution.',
        'hero.cta': 'Start a conversation',
        scroll: 'Explore',
        'who.eyebrow': 'Who We Are',
        'who.title': 'A practical partner between business and technology.',
        'who.body': 'Infinitum Bulgaria supports companies that need clear thinking, hands-on coordination, and reliable guidance across commercial and technical challenges. We help turn complex situations into structured next steps.',
        'what.eyebrow': 'What We Do',
        'what.title': 'Support for growth, products, and operations.',
        'service.business.title': 'Business Development',
        'service.business.body': 'Support for entering new markets, positioning products, and developing commercial opportunities.',
        'service.consulting.title': 'Technical & Commercial Consulting',
        'service.consulting.body': 'Practical guidance for resolving technical, operational, and business challenges.',
        'service.market.title': 'Product Introduction & Market Support',
        'service.market.body': 'Assistance with presenting and introducing products to commercial and industrial clients.',
        'service.support.title': 'On-site & Remote Support',
        'service.support.body': 'Flexible support delivered remotely or on location, depending on the needs of the client and the project.',
        'contact.eyebrow': 'Contact',
        'contact.title': 'Let’s talk.',
        'contact.body': 'Tell us where your business is headed and what needs to move next.',
        'footer.copy': '© 2026 Infinitum Bulgaria. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.legal': 'Legal Notice',
        'footer.back': 'Back to top',
        'footer.website': 'Back to website',
        'legal.eyebrow': 'Legal Notice',
        'legal.title': 'Legal Notice',
        'legal.company': 'Company Information',
        'legal.entityLabel': 'Legal entity:',
        'legal.entity': 'Инфинитум България ЕООД / Infinitum Bulgaria Ltd.',
        'legal.uicLabel': 'UIC:',
        'legal.vatLabel': 'VAT number:',
        'legal.addressLabel': 'Registered address:',
        'legal.address': 'Bulgaria, Sofia 1000, Oborishte district, 14 Georgi Benkovski St., floor 3',
        'legal.represented': 'Represented By',
        'legal.directorLabel': 'Managing director:',
        'legal.director': 'Valeri Penchev',
        'legal.contact': 'Contact',
        'legal.emailLabel': 'Email:',
        'legal.responsible': 'Responsible for Website Content',
        'legal.responsibleText': 'Infinitum Bulgaria Ltd.',
        'legal.note': 'This page is provided as a practical legal notice draft for the website. It should be reviewed before publication if specific legal wording is required for a target market.',
        'privacy.eyebrow': 'Privacy Policy',
        'privacy.title': 'Privacy Policy',
        'privacy.controller': 'Controller',
        'privacy.controllerText': 'The controller responsible for this website is Инфинитум България ЕООД / Infinitum Bulgaria Ltd.',
        'privacy.dataTitle': 'What Data We Process',
        'privacy.dataNoTracking': 'This website does not include a contact form, user accounts, analytics scripts, tracking pixels, embedded videos, or third-party maps.',
        'privacy.dataEmail': 'If you contact us by email, we may process the personal data included in your message, such as your name, email address, company information, and the content of your inquiry.',
        'privacy.purposeTitle': 'Purpose of Processing',
        'privacy.purposeText': 'We process contact data in order to respond to inquiries, communicate with potential or existing business partners, and manage business correspondence.',
        'privacy.legalBasisTitle': 'Legal Basis',
        'privacy.legalBasisText': 'The processing of email inquiries is generally based on our legitimate interest in business communication and, where applicable, pre-contractual or contractual communication.',
        'privacy.languageTitle': 'Language Preference',
        'privacy.languageText': 'The website may store your selected language preference in your browser using local storage. This is used only to remember whether you selected the English or Bulgarian version of the website. It is not used for tracking or advertising.',
        'privacy.cookiesTitle': 'Cookies and Tracking',
        'privacy.cookiesText': 'The current version of this website does not use analytics, advertising, tracking cookies, or cookie-based personalization.',
        'privacy.recipientsTitle': 'Recipients',
        'privacy.recipientsText': 'We do not sell personal data. Personal data may be processed by service providers that support our email communication or website hosting, where such processing is necessary for operating the website and communication channels.',
        'privacy.retentionTitle': 'Retention',
        'privacy.retentionText': 'Email correspondence is retained only for as long as necessary for communication, business administration, legal obligations, or legitimate record keeping.',
        'privacy.rightsTitle': 'Your Rights',
        'privacy.rightsText': 'Subject to applicable law, you may have the right to request access, correction, deletion, restriction of processing, objection to processing, and data portability. You may also have the right to lodge a complaint with a competent data protection authority.',
        'privacy.contactTitle': 'Contact for Privacy Requests',
        'privacy.contactText': 'For privacy-related questions, contact us at',
        'privacy.note': 'This privacy policy is a practical website draft based on the current no-tracking setup. It should be reviewed before publication if analytics, cookies, forms, maps, embedded media, or marketing tools are added later.'
    },
    bg: {
        pageTitle: 'Инфинитум България | Безкрайни възможности. Практични решения.',
        pageDescription: 'Инфинитум България е консултантски партньор за бизнес развитие, технологии, въвеждане на продукти и практическа техническа и търговска подкрепа.',
        'legal.pageTitle': 'Правна информация | Инфинитум България',
        'legal.pageDescription': 'Правна информация за Инфинитум България ЕООД.',
        'privacy.pageTitle': 'Политика за поверителност | Инфинитум България',
        'privacy.pageDescription': 'Политика за поверителност за уебсайта на Инфинитум България.',
        brand: 'Инфинитум България',
        'nav.home': 'Начало',
        'nav.who': 'Кои сме ние',
        'nav.what': 'Какво правим',
        'nav.contact': 'Контакти',
        'hero.title': 'Безкрайни възможности. Практични решения.',
        'hero.subtitle': 'Консултантска подкрепа за бизнес развитие, технологии, пазарно въвеждане и практически решения там, където стратегията трябва да се превърне в действие.',
        'hero.cta': 'Свържете се с нас',
        scroll: 'Разгледайте',
        'who.eyebrow': 'Кои сме ние',
        'who.title': 'Практичен партньор между бизнеса и технологиите.',
        'who.body': 'Инфинитум България подкрепя компании, които имат нужда от ясна посока, координация и надеждни решения при търговски и технически предизвикателства. Помагаме сложните ситуации да се превърнат в конкретни следващи стъпки.',
        'what.eyebrow': 'Какво правим',
        'what.title': 'Подкрепа за развитие, продукти и операции.',
        'service.business.title': 'Бизнес развитие',
        'service.business.body': 'Подкрепа при навлизане на нови пазари, позициониране на продукти и развитие на търговски възможности.',
        'service.consulting.title': 'Техническо и търговско консултиране',
        'service.consulting.body': 'Практически насоки при решаване на технически, оперативни и бизнес предизвикателства.',
        'service.market.title': 'Представяне и въвеждане на продукти',
        'service.market.body': 'Съдействие при представяне и въвеждане на продукти пред търговски и индустриални клиенти.',
        'service.support.title': 'Дистанционна и присъствена подкрепа',
        'service.support.body': 'Гъвкава помощ според нуждите на клиента, проекта и конкретната ситуация.',
        'contact.eyebrow': 'Контакти',
        'contact.title': 'Нека поговорим.',
        'contact.body': 'Разкажете ни накъде се развива вашият бизнес и коя е следващата важна стъпка.',
        'footer.copy': '© 2026 Инфинитум България. Всички права запазени.',
        'footer.privacy': 'Поверителност',
        'footer.legal': 'Правна информация',
        'footer.back': 'Към началото',
        'footer.website': 'Към сайта',
        'legal.eyebrow': 'Правна информация',
        'legal.title': 'Правна информация',
        'legal.company': 'Информация за дружеството',
        'legal.entityLabel': 'Юридическо лице:',
        'legal.entity': 'Инфинитум България ЕООД / Infinitum Bulgaria Ltd.',
        'legal.uicLabel': 'ЕИК:',
        'legal.vatLabel': 'ДДС номер:',
        'legal.addressLabel': 'Седалище и адрес на управление:',
        'legal.address': 'България, гр. София 1000, р-н Оборище, ул. "Георги Бенковски", 14, ет. 3',
        'legal.represented': 'Представляващ',
        'legal.directorLabel': 'Управител:',
        'legal.director': 'Валери Пенчев',
        'legal.contact': 'Контакт',
        'legal.emailLabel': 'Имейл:',
        'legal.responsible': 'Отговорен за съдържанието на сайта',
        'legal.responsibleText': 'Инфинитум България ЕООД',
        'legal.note': 'Тази страница е практична чернова на правна информация за уебсайта. Добре е текстът да бъде прегледан преди публикуване, ако е необходима специфична правна формулировка за конкретен пазар.',
        'privacy.eyebrow': 'Политика за поверителност',
        'privacy.title': 'Политика за поверителност',
        'privacy.controller': 'Администратор',
        'privacy.controllerText': 'Администратор на данните за този уебсайт е Инфинитум България ЕООД / Infinitum Bulgaria Ltd.',
        'privacy.dataTitle': 'Какви данни обработваме',
        'privacy.dataNoTracking': 'Текущата версия на сайта не използва контактна форма, потребителски профили, analytics скриптове, tracking pixels, embedded videos или карти от трети страни.',
        'privacy.dataEmail': 'Ако се свържете с нас по имейл, можем да обработваме личните данни, които включите в съобщението си, например име, имейл адрес, информация за компания и съдържание на запитването.',
        'privacy.purposeTitle': 'Цел на обработването',
        'privacy.purposeText': 'Обработваме данни от имейл кореспонденция, за да отговаряме на запитвания, да комуникираме с потенциални или настоящи бизнес партньори и да управляваме бизнес кореспонденция.',
        'privacy.legalBasisTitle': 'Правно основание',
        'privacy.legalBasisText': 'Обработването на имейл запитвания обичайно се основава на легитимния ни интерес от бизнес комуникация и, когато е приложимо, на преддоговорна или договорна комуникация.',
        'privacy.languageTitle': 'Езиково предпочитание',
        'privacy.languageText': 'Сайтът може да запази избрания език в local storage на браузъра, единствено за да помни предпочитанието между английска и българска версия. Това не се използва за проследяване или реклама.',
        'privacy.cookiesTitle': 'Cookies и проследяване',
        'privacy.cookiesText': 'Текущата версия на този сайт не използва analytics, advertising, tracking cookies или cookie-базирана персонализация.',
        'privacy.recipientsTitle': 'Получатели',
        'privacy.recipientsText': 'Не продаваме лични данни. Лични данни могат да бъдат обработвани от доставчици, които подпомагат имейл комуникацията или хостинга на сайта, когато това е необходимо за работата на сайта и комуникационните канали.',
        'privacy.retentionTitle': 'Срок на съхранение',
        'privacy.retentionText': 'Имейл кореспонденцията се съхранява само толкова дълго, колкото е необходимо за комуникация, бизнес администрация, законови задължения или легитимно водене на архив.',
        'privacy.rightsTitle': 'Вашите права',
        'privacy.rightsText': 'Съгласно приложимото право можете да имате право на достъп, корекция, изтриване, ограничаване на обработването, възражение срещу обработването и преносимост на данните. Можете също да имате право да подадете жалба до компетентен орган за защита на личните данни.',
        'privacy.contactTitle': 'Контакт за въпроси относно поверителността',
        'privacy.contactText': 'За въпроси относно поверителността можете да се свържете с нас на',
        'privacy.note': 'Тази политика за поверителност е практична чернова според текущата конфигурация без проследяване. Добре е текстът да бъде прегледан преди публикуване, ако по-късно бъдат добавени analytics, cookies, форми, карти, embedded media или маркетинг инструменти.'
    }
};

const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('main');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-links');
const languageButtons = document.querySelectorAll('.language-btn');

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}

function handleNavigation() {
    if (!heroSection || !navbar) return;
    navbar.classList.add('visible');
}

function closeMobileMenu() {
    navMenu?.classList.remove('active');
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
    const isOpen = navMenu?.classList.toggle('active');
    hamburger?.classList.toggle('active', isOpen);
    hamburger?.setAttribute('aria-expanded', String(Boolean(isOpen)));
}

function handleNavLinkClick() {
    if (window.innerWidth <= 900) closeMobileMenu();
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });
}

function setMetaDescription(content) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', content);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', content);
}

function setLanguage(lang) {
    const dictionary = TRANSLATIONS[lang] || TRANSLATIONS[CONFIG.defaultLanguage];
    const page = document.body.dataset.page;
    const titleKey = page ? `${page}.pageTitle` : 'pageTitle';
    const descriptionKey = page ? `${page}.pageDescription` : 'pageDescription';

    document.documentElement.lang = lang;
    document.title = dictionary[titleKey] || dictionary.pageTitle;
    setMetaDescription(dictionary[descriptionKey] || dictionary.pageDescription);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.textContent = dictionary[key];
    });

    languageButtons.forEach(button => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    try {
        localStorage.setItem('infinitum-language', lang);
    } catch {
        // Local storage may be unavailable in restrictive browser modes.
    }
}

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem('infinitum-language');
        if (TRANSLATIONS[savedLanguage]) return savedLanguage;
    } catch {
        // Fall back to the default language.
    }

    return CONFIG.defaultLanguage;
}

function initScrollAnimations() {
    if (prefersReducedMotion()) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.section').forEach(section => observer.observe(section));
}

const handleScroll = throttle(handleNavigation, 16);

function init() {
    window.addEventListener('scroll', handleScroll);

    hamburger?.addEventListener('click', toggleMobileMenu);

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang || CONFIG.defaultLanguage);
            closeMobileMenu();
        });
    });

    initSmoothScroll();
    initScrollAnimations();
    setLanguage(getInitialLanguage());
    handleNavigation();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('resize', throttle(() => {
    if (window.innerWidth > 900) closeMobileMenu();
}, 250));
