// ==========================================
// SMOOTH SCROLLING & NAVIGATION
// ==========================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// ANIMATED STATS COUNTER
// ==========================================
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const isDecimal = target % 1 !== 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isDecimal ? target.toFixed(2) : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        }
    }, duration / steps);
}

let statsAnimated = false;
const statsSection = document.querySelector('.stats-section');

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, index) => {
                    setTimeout(() => {
                        animateCounter(stat);
                    }, index * 150); // Stagger the animations
                });
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// ==========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(`
        .glass-card,
        .project-card,
        .skill-category,
        .timeline-item,
        .cert-card,
        .contact-method,
        .section-header,
        .stat-card
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add stagger effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add stagger effect to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ==========================================
// FLOATING SHAPES PARALLAX EFFECT
// ==========================================
const shapes = document.querySelectorAll('.shape');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
});

// Smooth parallax animation
function animateShapes() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const x = (currentX - 0.5) * speed * 50;
        const y = (currentY - 0.5) * speed * 50;

        shape.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animateShapes);
}

if (shapes.length > 0) {
    animateShapes();
}

// ==========================================
// DOWNLOAD CV BUTTON
// ==========================================
const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00D9FF, #0066FF);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 8px 32px rgba(0, 217, 255, 0.4);
        animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = 'CV download feature - Please contact for latest CV';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
});

// Add keyframe animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// SMOOTH SCROLL BEHAVIOR (Enhanced)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// CURSOR GLOW EFFECT (OPTIONAL ENHANCEMENT)
// ==========================================
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 217, 255, 0.6), transparent);
    pointer-events: none;
    z-index: 9999;
    filter: blur(10px);
    transition: transform 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

// Only show cursor effect on desktop
if (window.innerWidth > 768) {
    cursor.style.display = 'block';

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .glass-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// ==========================================
// TYPING EFFECT FOR HERO TITLE (Optional)
// ==========================================
function createTypingEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;

    const originalText = titleElement.innerHTML;
    titleElement.innerHTML = originalText.replace('Gerald Loppies', '<span class="gradient-text" id="typingText"></span>');

    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const text = 'Gerald Loppies';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 500);
}

// Uncomment to enable typing effect
// createTypingEffect();

// ==========================================
// PERFORMANCE: REDUCE ANIMATIONS ON LOW-END DEVICES
// ==========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable complex animations for users who prefer reduced motion
    document.querySelectorAll('.shape').forEach(shape => {
        shape.style.animation = 'none';
    });
}

// ==========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ==========================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00D9FF, #0066FF);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 217, 255, 0.4);
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1) translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 6px 30px rgba(0, 217, 255, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.4)';
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Welcome to Gerald Loppies Portfolio!', 'color: #00D9FF; font-size: 20px; font-weight: bold;');
console.log('%cIoT Developer • IT Support • Data Analyst • UI/UX Designer', 'color: #9CA3AF; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #00FFA3; font-size: 12px;');
