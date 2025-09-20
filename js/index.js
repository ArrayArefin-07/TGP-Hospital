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

        // Appointment button functionality
        // const appointmentBtns = document.querySelectorAll('.btn-primary');
        // appointmentBtns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         alert('Thank you for choosing TGP Hospital! Our appointment booking system is loading...');
        //     });
        // });
        
        // Smooth scrolling for navigation links
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
        
        // Testimonial carousel functionality
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        
        if (testimonials.length > 0) {
            function showTestimonial(n) {
                testimonials.forEach(testimonial => testimonial.style.display = 'none');
                currentTestimonial = (n + testimonials.length) % testimonials.length;
                testimonials[currentTestimonial].style.display = 'block';
            }
            
            // Initialize testimonials
            showTestimonial(0);
            
            // Auto-rotate testimonials
            setInterval(() => {
                showTestimonial(currentTestimonial + 1);
            }, 3000);
        }