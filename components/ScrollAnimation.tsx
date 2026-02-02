"use client";

import { useEffect } from "react";
import { animate } from "animejs";

interface RevealOptions {
    duration?: number;
    delay?: number;
    interval?: number;
    opacity?: [number, number];
    translateY?: [number, number];
    translateX?: [number, number];
    scale?: [number, number];
    easing?: string;
    viewport?: number;
}

export default function ScrollAnimation() {
    useEffect(() => {
        // Core Reveal Function Logic
        const reveal = (selector: string, options: RevealOptions = {}) => {
            const defaults = {
                duration: 1000,
                delay: 0,
                interval: 0,
                opacity: [0, 1],
                translateY: [20, 0],
                translateX: [0, 0],
                scale: [1, 1],
                easing: 'cubicBezier(0.25, 1, 0.5, 1)',
                viewport: 0.15
            };

            const config = { ...defaults, ...options };
            const elements = document.querySelectorAll(selector);

            if (elements.length === 0) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;

                        const staggerDelay = config.interval ? (index * config.interval) : config.delay;

                        animate(el, {
                            opacity: config.opacity as [number, number],
                            translateY: config.translateY as [number, number],
                            translateX: config.translateX as [number, number],
                            scale: config.scale as [number, number],
                            duration: config.duration,
                            delay: staggerDelay,
                            easing: config.easing,
                            begin: () => {
                                el.style.visibility = 'visible';
                                el.classList.remove('vibe-hidden');
                            }
                        });

                        observer.unobserve(el);
                    }
                });
            }, { threshold: config.viewport });

            elements.forEach(el => {
                (el as HTMLElement).style.opacity = '0';
                observer.observe(el);
            });
        };

        // Initialize Animations
        reveal('.hero-logo-entry', { duration: 1000, translateY: [-50, 0], opacity: [0, 1], delay: 300 });
        reveal('.hero-text-entry', { duration: 1000, translateY: [50, 0], opacity: [0, 1], delay: 600 });
        reveal('.hero-tag-entry', { duration: 1000, translateY: [30, 0], opacity: [0, 1], delay: 900 });
        reveal('.hero-cta-entry', { duration: 1000, translateY: [30, 0], opacity: [0, 1], delay: 1200 });
        reveal('.hero-visual-entry', { duration: 1200, translateY: [50, 0], scale: [0.95, 1], opacity: [0, 1], delay: 1400 });
        reveal('.vibe-hidden', { duration: 1000, interval: 200, viewport: 0.15, opacity: [0, 1], translateY: [40, 0] });
        reveal('.gallery-item', { duration: 600, interval: 100, opacity: [0, 1], scale: [0.9, 1], viewport: 0.1 });

    }, []); // Run once on mount

    return null;
}
