// script.js
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:pakanyacoffee@gmail.com?subject=${encodeURIComponent(subject)} - PAKANYA COFFEE Inquiry&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client will open. If it doesn\'t, please email us at pakanyacoffee@gmail.com');
        
        // Reset form
        contactForm.reset();
    });
}

// WhatsApp Order Button Enhancement
document.querySelectorAll('.btn-whatsapp, .whatsapp-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Product Image Hover Effect
document.querySelectorAll('.product-image, .gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.feature, .product-card, .tip, .value-card, .location-card, .faq-item').forEach(el => {
    observer.observe(el);
});

// Current Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-brown);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 999;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
`;

backToTopButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'var(--dark-brown)';
    this.style.transform = 'translateY(-3px)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'var(--primary-brown)';
    this.style.transform = 'translateY(0)';
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Coffee Brewing Animation (for fun)
const coffeeCups = document.querySelectorAll('.product-card, .tip');
coffeeCups.forEach(cup => {
    cup.addEventListener('mouseenter', function() {
        if (this.querySelector('i.fa-mug-hot')) {
            this.querySelector('i.fa-mug-hot').style.animation = 'steam 2s infinite';
        }
    });
    
    cup.addEventListener('mouseleave', function() {
        if (this.querySelector('i.fa-mug-hot')) {
            this.querySelector('i.fa-mug-hot').style.animation = '';
        }
    });
});

// Add CSS for steam animation
const style = document.createElement('style');
style.textContent = `
    @keyframes steam {
        0% { transform: translateY(0) scale(1); opacity: 0.7; }
        50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
        100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
    }
`;
document.head.appendChild(style);