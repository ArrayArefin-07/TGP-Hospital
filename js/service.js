// Mobile Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
overlay.classList.toggle('active');
body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});

overlay.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
overlay.classList.remove('active');
body.style.overflow = '';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
overlay.classList.remove('active');
body.style.overflow = '';
});
});


// Services Filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
// Remove active class from all buttons
filterButtons.forEach(btn => btn.classList.remove('active'));

// Add active class to clicked button
button.classList.add('active');

const filter = button.getAttribute('data-filter');

// Show/hide service cards based on filter
serviceCards.forEach(card => {
if (filter === 'all' || card.getAttribute('data-category') === filter) {
card.style.display = 'flex';
} else {
card.style.display = 'none';
}
});
});
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth'
});
}
});
});