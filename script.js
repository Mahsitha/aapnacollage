// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animation trigger
    const animateElements = document.querySelectorAll('.animate-text');
    
    animateElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add validation logic
            alert('Registration successful!');
        });
    }
});