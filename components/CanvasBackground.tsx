"use client";

import { useEffect, useRef } from "react";

interface ParticleConfig {
    particleColor: string;
    lineColor: string;
    particleAmount: number;
    defaultSpeed: number;
    variantSpeed: number;
    linkRadius: number;
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    width: number;
    height: number;
    config: ParticleConfig;

    constructor(width: number, height: number, config: ParticleConfig) {
        this.width = width;
        this.height = height;
        this.config = config;
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
        if (this.x < 0 || this.x > this.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.height) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.config.particleColor;
        ctx.fill();
    }
}

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width: number, height: number;
        let particles: Particle[] = [];
        let animationFrameId: number;

        const config = {
            particleColor: 'rgba(212, 175, 55, 0.5)', // Accent Gold with opacity
            lineColor: 'rgba(212, 175, 55, 0.15)', // Faint Gold lines
            particleAmount: 80, // Number of particles
            defaultSpeed: 0.5,
            variantSpeed: 1,
            linkRadius: 150, // Distance to connect particles
        };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const init = () => {
            resize();

            // Create particles based on screen size
            const particleCount = window.innerWidth < 768 ? 40 : config.particleAmount;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(width, height, config));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach((p, index) => {
                p.update();
                p.draw(ctx);

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

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div id="canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%)', pointerEvents: 'none' }}></div>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
        </div>
    );
}
