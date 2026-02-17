// Dropdown Menu Functionality
const menuIcon = document.getElementById('menuIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

if (menuIcon && dropdownMenu) {
    // Toggle dropdown on menu icon click
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Close dropdown when clicking a menu item
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.service-card, .review-card, .faq-item, .doctor-profile, .specialist-card');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact button interaction
const contactBtn = document.querySelector('.contact-btn');

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        // You can add functionality here, like opening a contact form
        alert('Contact form coming soon!');
    });
}

// Navigate to Services Page
const exploreServicesBtn = document.querySelector('.btn-explore');

if (exploreServicesBtn) {
    exploreServicesBtn.addEventListener('click', () => {
        window.location.href = 'services.html';
    });
}

// CTA button interactions
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-view-more');

ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .scroll-top {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    .faq-icon {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero background (disabled for fixed positioning)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroBackground = document.querySelector('.hero-background');
//     
//     if (heroBackground && scrolled < 1000) {
//         heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Stats counter animation
const statsValues = document.querySelectorAll('.stat-value');
let statsAnimated = false;

const animateStats = () => {
    statsValues.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.match(/\d+/)[0]);
        const suffix = text.replace(/\d+/, '');
        
        let current = 0;
        const increment = number / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(counter);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 30);
    });
    statsAnimated = true;
};

// Trigger stats animation when stats section is visible
const statsCard = document.querySelector('.stats-card');
if (statsCard) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsCard);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Punarjanii website loaded successfully! 🎉');
