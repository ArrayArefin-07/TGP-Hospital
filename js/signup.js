
        // Home link functionality
        document.getElementById('homeLink').addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Password strength indicator
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('passwordStrengthBar');
        
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Check password strength
            if (password.length >= 8) strength += 25;
            if (/[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 25;
            if (/[^A-Za-z0-9]/.test(password)) strength += 25;
            
            // Update strength bar
            strengthBar.style.width = strength + '%';
            
            // Change color based on strength
            if (strength < 50) {
                strengthBar.style.background = '#e74c3c'; // Red
            } else if (strength < 75) {
                strengthBar.style.background = '#f39c12'; // Orange
            } else {
                strengthBar.style.background = '#2ecc71'; // Green
            }
        });
        
        // Form validation
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = this.querySelector('input[type="password"][placeholder="Confirm Password"]').value;
            const terms = document.getElementById('terms').checked;
            
            // Check if passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
            
            // Check if terms are accepted
            if (!terms) {
                alert('Please accept the Terms of Service and Privacy Policy.');
                return;
            }
            
            // Simulate signup process
            const signupBtn = this.querySelector('.signup-button');
            signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
            signupBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Account created successfully! Please check your email to verify your account.');
                signupBtn.innerHTML = 'Create Account';
                signupBtn.disabled = false;
                this.reset();
                strengthBar.style.width = '0';
            }, 2000);
        });
  