// Vibe Animation Library (Antigravity Enhanced)
const vibe = {
    // Core Reveal Function
    reveal: (selector, options = {}) => {
        const defaults = {
            duration: 1000,
            delay: 0,
            interval: 0, // Stagger interval
            opacity: [0, 1],
            translateY: [20, 0],
            translateX: [0, 0],
            scale: [1, 1],
            easing: 'cubicBezier(0.25, 1, 0.5, 1)', // easeOutCubic
            viewport: 0.15 // 15% of viewport must be visible
        };

        const config = { ...defaults, ...options };
        const elements = document.querySelectorAll(selector);

        if (elements.length === 0) return;

        // Intersection Observer for scroll triggering
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    // Calculate delay based on stagger interval if part of a group
                    const staggerDelay = config.interval ? (index * config.interval) : config.delay;

                    anime({
                        targets: el,
                        opacity: config.opacity,
                        translateY: config.translateY,
                        translateX: config.translateX,
                        scale: config.scale,
                        duration: config.duration,
                        delay: staggerDelay,
                        easing: config.easing,
                        begin: () => {
                            el.style.visibility = 'visible'; // Ensure visibility
                            el.classList.remove('vibe-hidden');
                        }
                    });

                    observer.unobserve(el);
                }
            });
        }, { threshold: config.viewport });

        elements.forEach(el => {
            el.style.opacity = '0'; // Initial state
            //el.style.visibility = 'hidden'; // Optional: depending on CSS
            observer.observe(el);
        });
    },

    // Parallax Effect
    parallax: (selector, speed = 0.5) => {
        const el = document.querySelector(selector);
        if (!el) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const limit = el.offsetHeight;

            if (scrolled <= limit) {
                el.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
};

// Initialize Global Behaviors
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Parallax Hero Background (Removed in Video update)
    // vibe.parallax('#hero-parallax-bg', 0.4); 
});

/* ------------------------------------------------------------
   GOOGLE SHEETS FORM SUBMISSION
   Replace the URL below with your Web App URL from the setup guide.
------------------------------------------------------------ */
const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE'; // <--- PASTE YOUR GOOGLE SCRIPT URL HERE

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Send';
            if (submitBtn) submitBtn.innerText = 'Sending...';

            // DEMO MODE: If URL is placeholder, simulate success
            if (GOOGLE_SCRIPT_URL === 'YOUR_SCRIPT_URL_HERE') {
                setTimeout(() => {
                    if (submitBtn) submitBtn.innerText = 'Sent (Demo)!';
                    form.reset();
                    setTimeout(() => {
                        if (submitBtn) submitBtn.innerText = originalText;
                    }, 3000);
                }, 1500);
                return;
            }

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: new FormData(form)
            })
                .then(response => {
                    if (submitBtn) submitBtn.innerText = 'Sent Successfully!';
                    form.reset();
                    setTimeout(() => {
                        if (submitBtn) submitBtn.innerText = originalText;
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    if (submitBtn) submitBtn.innerText = 'Sent! (Check Sheet)';
                    form.reset();
                    setTimeout(() => {
                        if (submitBtn) submitBtn.innerText = originalText;
                    }, 3000);
                });
        });
    }
});