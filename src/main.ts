import './index.css';

// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('glass-panel', 'py-4');
        navbar?.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar?.classList.remove('glass-panel', 'py-4');
        navbar?.classList.add('bg-transparent', 'py-6');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu?.classList.remove('hidden');
        mobileMenu?.classList.add('flex');
        mobileMenuBtn!.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu?.classList.add('hidden');
        mobileMenu?.classList.remove('flex');
        mobileMenuBtn!.innerHTML = '<i data-lucide="menu"></i>';
    }
    // @ts-ignore
    lucide.createIcons();
}

mobileMenuBtn?.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
