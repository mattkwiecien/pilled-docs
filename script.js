// ============================================
// PILLED LANDING PAGE INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
    initNotifyForm();
    initSmoothScroll();
    initCTAButtons();
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    const animatedElements = document.querySelectorAll(
        '.feature-card, .privacy-text, .tech-badge, .download-content, .meta-item'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NOTIFY FORM HANDLING
// ============================================

function initNotifyForm() {
    const form = document.getElementById('notifyForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');
            const email = emailInput.value;

            // Validate email
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }

            // Simulate submission (replace with actual API call)
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                // Success state
                submitButton.textContent = 'You\'re on the list!';
                submitButton.style.background = 'linear-gradient(135deg, #A8E6CF, #4ECDC4)';
                emailInput.value = '';

                showFormMessage('Thanks! We\'ll notify you when Pilled launches.', 'success');

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = 'Notify Me';
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 3000);
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(message, type) {
    const form = document.getElementById('notifyForm');

    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageEl = document.createElement('p');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: var(--radius-sm);
        font-weight: 500;
        text-align: center;
        animation: fadeIn 0.3s ease-out;
    `;

    if (type === 'success') {
        messageEl.style.background = 'rgba(168, 230, 207, 0.2)';
        messageEl.style.color = '#2D3748';
        messageEl.style.border = '1px solid rgba(78, 205, 196, 0.4)';
    } else {
        messageEl.style.background = 'rgba(255, 107, 157, 0.2)';
        messageEl.style.color = '#2D3748';
        messageEl.style.border = '1px solid rgba(255, 107, 157, 0.4)';
    }

    form.appendChild(messageEl);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(-10px)';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}

// ============================================
// CTA BUTTON INTERACTIONS
// ============================================

function initCTAButtons() {
    const primaryCTA = document.querySelector('.hero-cta .btn-primary');

    if (primaryCTA) {
        primaryCTA.addEventListener('click', () => {
            // Scroll to download section
            const downloadSection = document.getElementById('download');
            if (downloadSection) {
                const headerOffset = 80;
                const elementPosition = downloadSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Focus email input after scroll
                setTimeout(() => {
                    const emailInput = document.querySelector('#notifyForm input[type="email"]');
                    if (emailInput) {
                        emailInput.focus();
                    }
                }, 800);
            }
        });
    }
}

// ============================================
// EASTER EGG: PILL ICON INTERACTION
// ============================================

const pillIcons = document.querySelectorAll('.pill-icon');
let clickCount = 0;

pillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        clickCount++;

        // Add rotation animation
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

        setTimeout(() => {
            icon.style.transform = '';
        }, 600);

        // Easter egg after 5 clicks
        if (clickCount === 5) {
            createConfetti();
            clickCount = 0;
        }
    });
});

function createConfetti() {
    const colors = ['#FF6B9D', '#4ECDC4', '#A8E6CF', '#B8A4E8', '#FFCBA4'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}vw;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 10000;
            animation: confettiFall ${2 + Math.random() * 2}s ease-out forwards;
        `;

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PERFORMANCE: Reduce motion for users who prefer it
// ============================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}
