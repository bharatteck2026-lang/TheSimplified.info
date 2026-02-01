const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

// Configuration
const config = {
    particleColor: 'rgba(212, 175, 55, 0.5)', // Accent Gold with opacity
    lineColor: 'rgba(212, 175, 55, 0.15)', // Faint Gold lines
    particleAmount: 80, // Number of particles
    defaultSpeed: 0.5,
    variantSpeed: 1,
    linkRadius: 150, // Distance to connect particles
};

// Resize handling
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.defaultSpeed;
        this.vy = (Math.random() - 0.5) * config.defaultSpeed;
        this.size = Math.random() * 2 + 1; // Random size 1-3px
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
    }
}

// Initialize
function init() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    container.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Behind content

    resize();
    window.addEventListener('resize', resize);

    // Create particles based on screen size
    const particleCount = window.innerWidth < 768 ? 40 : config.particleAmount;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    animate();
}

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

            if (distance < config.linkRadius) {
                ctx.beginPath();
                ctx.strokeStyle = config.lineColor;
                ctx.lineWidth = 1 - distance / config.linkRadius;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animate);
}

// Start when content loads
document.addEventListener('DOMContentLoaded', init);
