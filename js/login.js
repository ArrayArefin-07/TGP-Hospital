
        // Simple form validation and animation
        document.querySelector('.login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!username || !password) {
                // Add shake animation to empty fields
                const inputs = this.querySelectorAll('input');
                inputs.forEach(input => {
                    if (!input.value) {
                        input.style.borderColor = 'var(--accent)';
                        input.classList.add('shake');
                        setTimeout(() => {
                            input.classList.remove('shake');
                        }, 500);
                    }
                });
                return;
            }
            
            // Simulate login process
            const loginBtn = this.querySelector('.login-button');
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            loginBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Login successful! Redirecting to your dashboard...');
                loginBtn.innerHTML = 'Login';
                loginBtn.disabled = false;
                // In a real scenario, you would redirect to the dashboard
                // window.location.href = 'dashboard.html';
            }, 1500);
        });
        
        // Add shake animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            .shake {
                animation: shake 0.5s;
            }
        `;
        document.head.appendChild(style);