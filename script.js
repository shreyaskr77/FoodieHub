/**
 * FoodieHub Main Script
 * Handles Scroll Animations, Navbar, and Form Logic
 */

// 1. SCROLL REVEAL LOGIC
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
};

// 2. NAV & PROGRESS BAR LOGIC
const handleScroll = () => {
    const nav = document.getElementById("navbar");
    const progress = document.getElementById("progress-bar");
    
    // Navbar background
    if (nav) {
        if (window.scrollY > 100) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    }

    // Progress Bar
    if (progress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
    }

    reveal();
};

window.addEventListener("scroll", handleScroll);

// 3. MOBILE MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// 4. RESERVATION VALIDATION
const bookingForm = document.getElementById('bookingForm');
const resDate = document.getElementById('res-date');
const successMsg = document.getElementById('success-msg');

if (resDate) {
    const today = new Date().toISOString().split('T')[0];
    resDate.setAttribute('min', today);
}

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        bookingForm.style.opacity = '0.3';
        bookingForm.style.pointerEvents = 'none';
        if (successMsg) successMsg.style.display = 'block';
    });
}

// 5. INITIAL RUN
document.addEventListener("DOMContentLoaded", () => {
    reveal(); // Load animations for top of page
});