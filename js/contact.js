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
        const appointmentBtns = document.querySelectorAll('.btn-primary');
        appointmentBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Thank you for choosing TGP Hospital! Our appointment booking system is loading...');
            });
        });

        // FAQ Accordion functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });

        // Contact form validation
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !subject || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // If validation passes, show success message
                alert('Thank you for your message! We will get back to you within 24 hours.');
                contactForm.reset();
            });
        }