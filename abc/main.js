// Luxavi main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form Handling
    const form = document.getElementById('waitlistForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    if (form) {
        // Show thank you message after redirection or when form is submitted locally
        const params = new URLSearchParams(window.location.search);
        if (params.get('submitted') === 'true') {
            form.style.display = 'none';
            thankYouMessage.classList.remove('hidden');
            thankYouMessage.classList.add('animate-fadeIn');
        }
        
        // Local form handling for preview - will be replaced by the actual FormSubmit handler
        form.addEventListener('submit', function(e) {
            // This is just for local preview
            if (!window.location.hostname.includes('formsubmit.co')) {
                e.preventDefault();
                
                // Form validation
                const fullName = document.getElementById('fullName').value;
                const email = document.getElementById('email').value;
                const dob = document.getElementById('dob').value;
                
                if (!fullName || !email || !dob) {
                    return;
                }
                
                // Hide form and show thank you message
                form.style.display = 'none';
                thankYouMessage.classList.remove('hidden');
                thankYouMessage.classList.add('animate-fadeIn');
                
                console.log('Form submitted:', { fullName, email, dob });
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Create additional scent swirls for background
    const createScentSwirls = () => {
        const mainContent = document.querySelector('main');
        for (let i = 0; i < 5; i++) {
            const swirl = document.createElement('div');
            swirl.classList.add('scent-swirl');
            swirl.style.left = `${Math.random() * 100}%`;
            swirl.style.top = `${Math.random() * 100}%`;
            swirl.style.animationDelay = `${i * 2}s`;
            swirl.style.opacity = '0.2';
            mainContent.appendChild(swirl);
        }
    };
    
    createScentSwirls();
}); 