// js/main.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navigation Functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    // Add further form handling logic, such as AJAX submission here.
});

// Subtle Animations
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
    element.classList.add('fade-in');
});
