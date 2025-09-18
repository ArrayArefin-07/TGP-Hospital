
        // Home link functionality
        document.getElementById('homeLink').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        
        // Step management
        let currentStep = 1;
        const totalSteps = 3;
        
        function updateStepIndicator(step) {
            // Update all steps
            for (let i = 1; i <= totalSteps; i++) {
                const stepElement = document.getElementById(`step${i}`);
                const formStep = document.getElementById(`formStep${i}`);
                
                if (i < step) {
                    stepElement.classList.remove('active');
                    stepElement.classList.add('completed');
                    formStep.classList.remove('active');
                } else if (i === step) {
                    stepElement.classList.add('active');
                    stepElement.classList.remove('completed');
                    formStep.classList.add('active');
                } else {
                    stepElement.classList.remove('active', 'completed');
                    formStep.classList.remove('active');
                }
            }
        }
        
        function nextStep(step) {
            // Validate current step before proceeding
            if (step === 1) {
                const email = document.getElementById('emailInput').value;
                if (!validateEmail(email)) {
                    showError(document.getElementById('emailInput'), 'Please enter a valid email address');
                    return;
                }
            } else if (step === 2) {
                const code = document.getElementById('codeInput').value;
                if (code.length !== 6 || isNaN(code)) {
                    showError(document.getElementById('codeInput'), 'Please enter a valid 6-digit code');
                    return;
                }
            }
            
            // Move to next step
            currentStep = step + 1;
            updateStepIndicator(currentStep);
        }
        
        function prevStep(step) {
            // Move to previous step
            currentStep = step - 1;
            updateStepIndicator(currentStep);
        }
        
        function resetPassword() {
            // Validate passwords
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword.length < 8) {
                showError(document.getElementById('newPassword'), 'Password must be at least 8 characters long');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                showError(document.getElementById('confirmPassword'), 'Passwords do not match');
                return;
            }
            
            // Simulate password reset process
            const resetBtn = document.querySelector('#formStep3 .btn-next');
            resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Resetting...';
            resetBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                document.getElementById('formStep3').classList.remove('active');
                document.getElementById('successMessage').style.display = 'block';
            }, 1500);
        }
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        function showError(input, message) {
            input.style.borderColor = 'var(--accent)';
            input.classList.add('shake');
            
            // Remove any existing error message
            const existingError = input.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Create error message
            const error = document.createElement('div');
            error.className = 'error-message';
            error.style.color = 'var(--accent)';
            error.style.fontSize = '0.8rem';
            error.style.marginTop = '5px';
            error.textContent = message;
            
            input.parentNode.appendChild(error);
            
            setTimeout(() => {
                input.classList.remove('shake');
            }, 500);
        }
        
        // Resend code functionality
        document.getElementById('resendCode').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulate resending code
            const resendLink = document.getElementById('resendCode');
            resendLink.textContent = 'Sending...';
            resendLink.style.pointerEvents = 'none';
            
            setTimeout(() => {
                alert('Verification code has been resent to your email.');
                resendLink.textContent = 'Resend code';
                resendLink.style.pointerEvents = 'auto';
            }, 1000);
        });
        
        // Auto-advance code input
        document.getElementById('codeInput').addEventListener('input', function() {
            if (this.value.length === 6) {
                // Auto-verify if code is 6 digits
                nextStep(2);
            }
        });
  