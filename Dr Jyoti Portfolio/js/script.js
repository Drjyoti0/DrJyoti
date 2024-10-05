// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name === '' || email === '' || message === '') {
            formMessage.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
            return;
        }

        // Here, you would typically send the form data to your server or an email service.
        // For this example, we'll just display a success message.

        formMessage.innerHTML = '<div class="alert alert-success">Thank you for your message! I will get back to you soon.</div>';

        // Reset the form
        contactForm.reset();
    });
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});
// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
