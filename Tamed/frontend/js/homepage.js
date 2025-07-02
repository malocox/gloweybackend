document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded successfully');
    initNavigation();
    handleStatsFallback();
    initFormSubmission();
});

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        console.log('Hamburger and nav-links found');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            const isExpanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
            console.log('Hamburger clicked, nav-links active:', navLinks.classList.contains('active'));
        });

        navLinks.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                console.log('Nav-link clicked, menu closed');
            }
        });

        document.querySelectorAll('.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    console.log('Smooth scrolling to:', this.getAttribute('href'));
                } else {
                    console.warn('Target not found for href:', this.getAttribute('href'));
                }
            });
        });
    } else {
        console.warn('Hamburger or nav-links not found in the DOM');
    }
}

function handleStatsFallback() {
    const iframe = document.querySelector('#stats-widget iframe');
    if (iframe) {
        console.log('Stats widget iframe found');
        iframe.addEventListener('load', () => {
            document.querySelector('.fallback-text').style.display = 'none';
            console.log('Stats widget loaded');
        });

        iframe.addEventListener('error', () => {
            document.querySelector('.fallback-text').style.display = 'block';
            console.warn('Stats widget failed to load');
        });
    } else {
        console.warn('Stats widget iframe not found');
    }
}

function initFormSubmission() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        console.log('Contact form found');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form submitted with:', Object.fromEntries(formData));
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    } else {
        console.warn('Contact form not found');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        console.log('Tab key pressed, user-is-tabbing added');
    }
});

window.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
    console.log('Mouse clicked, user-is-tabbing removed');
});