// Loading screen fade out
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        mainContent.style.opacity = '1';
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation;
        }
    });
}, observerOptions);

// Observe all animated sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll to sections
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

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-out';
            
            // Restart particle animations
            const particles = entry.target.querySelector('.skill-particles');
            if (particles) {
                particles.style.animation = 'none';
                setTimeout(() => {
                    particles.style.animation = '';
                }, 10);
            }
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Add mouse follow effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            const heroBefore = document.querySelector('.hero::before');
            if (heroBefore) {
                heroBefore.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            }
        }
    }
});

// Parallax effect for sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('section');
    
    parallaxElements.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
});

// Typewriter effect for title (optional enhancement)
function typeWriterEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize on page load
window.addEventListener('load', () => {
    // Add floating animation to expertise icons
    document.querySelectorAll('.expertise-icon').forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });
});

// Detect if page is loading and set initial opacity
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 2000);
});

// Add particles effect on skill bars
function createParticle(container) {
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px #ffd700;
    `;
    
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() - 0.5) * 40;
    const endY = Math.random() * 40 - 20;
    
    particle.animate([{
            left: startX + '%',
            top: '50%',
            opacity: 1
        },
        {
            left: endX + '%',
            top: (50 + endY) + '%',
            opacity: 0
        }
    ], {
        duration: 1500,
        easing: 'ease-out'
    });
    
    container.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1500);
}

// Trigger particles on skill bar animations
const skillParticlesContainers = document.querySelectorAll('.skill-particles');
skillParticlesContainers.forEach(container => {
    // Create particles at intervals
    setInterval(() => {
        if (Math.random() > 0.7) {
            createParticle(container);
        }
    }, 300);
});

// Add page transition effects
window.addEventListener('beforeunload', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '1';
    }
});

console.log('🎮 Dr1xyDev Portfolio Loaded!');
console.log('💫 Cyberpunk theme activated!');