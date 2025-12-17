// ========================================
// Mobile Menu Toggle
// ========================================
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Hero Slider
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (!slides.length) return; // Exit if no slides exist on the page
    
    // Wrap around
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    if (dots.length) {
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
    }
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    
    // Activate current dot
    if (dots.length) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function currentSlideFunc(n) {
    showSlide(n);
}

// Auto advance slides every 5 seconds
if (slides.length > 0) {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default if it's not just "#"
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Form Submission Handlers
// ========================================
function handleQuoteSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this data to a server
    console.log('Quote Request:', data);
    
    // Show success message
    alert('Thank you for your quote request! We will get back to you within 24 hours.');
    
    // Reset form
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this data to a server
    console.log('Contact Form:', data);
    
    // Show success message
    alert('Thank you for contacting us! We will respond to your message as soon as possible.');
    
    // Reset form
    event.target.reset();
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .capability-item, .equipment-card, .category-card, .process-step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ========================================
// Active Page Navigation Highlighting
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Image Error Handling
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // If image has an onerror attribute, it's already handled in HTML
        if (!img.hasAttribute('onerror')) {
            img.addEventListener('error', function() {
                // Hide broken image icon
                this.style.display = 'none';
                
                // If there's a next sibling (like logo-text), show it
                if (this.nextElementSibling) {
                    this.nextElementSibling.style.display = 'flex';
                }
            });
        }
    });
});

// ========================================
// Form Validation Enhancement
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#2ecc71';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#2ecc71';
                } else {
                    this.style.borderColor = '';
                }
            });
        });
    });
});

// ========================================
// File Upload Display
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('files');
    
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            const files = Array.from(this.files);
            
            if (files.length > 0) {
                const fileNames = files.map(f => f.name).join(', ');
                
                // Create or update file list display
                let fileList = this.nextElementSibling?.nextElementSibling;
                
                if (!fileList || !fileList.classList.contains('file-list')) {
                    fileList = document.createElement('div');
                    fileList.classList.add('file-list');
                    fileList.style.marginTop = '10px';
                    fileList.style.fontSize = '0.9rem';
                    fileList.style.color = '#7f8c8d';
                    this.parentNode.appendChild(fileList);
                }
                
                fileList.innerHTML = `<strong>Selected files:</strong> ${fileNames}`;
            }
        });
    }
});

// ========================================
// Back to Top Button (Optional Enhancement)
// ========================================
function createBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.setAttribute('id', 'backToTop');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTop);

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🔧 Rapid Laser Website', 'color: #0168e9; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #2c3e50; font-size: 12px;');

