 // Mobile dropdown functionality
        document.addEventListener('DOMContentLoaded', function() {
            const dropdowns = document.querySelectorAll('.dropdown');
            
            // For mobile view, toggle dropdown on click
            if (window.innerWidth <= 768) {
                dropdowns.forEach(dropdown => {
                    const link = dropdown.querySelector('a');
                    
                    link.addEventListener('click', function(e) {
                        if (dropdown.classList.contains('active')) {
                            dropdown.classList.remove('active');
                        } else {
                            // Close any open dropdowns
                            document.querySelectorAll('.dropdown.active').forEach(item => {
                                item.classList.remove('active');
                            });
                            dropdown.classList.add('active');
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    });
                });
                
                // Close dropdowns when clicking elsewhere
                document.addEventListener('click', function(e) {
                    if (!e.target.closest('.dropdown')) {
                        document.querySelectorAll('.dropdown.active').forEach(item => {
                            item.classList.remove('active');
                        });
                    }
                });
            }
        });
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