
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
    