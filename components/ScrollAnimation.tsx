"use client";

import { useEffect } from "react";
// In animejs v4 (beta/RC), the main export is often 'animate' or the default is removed.
// We'll try a flexible import to handle potential env differences.
import * as animeModule from "animejs";
import { usePathname } from "next/navigation";

const anime = (animeModule as any).animate || (animeModule as any).default || animeModule;

export default function ScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".vibe-hidden");

        hiddenElements.forEach(el => {
            (el as HTMLElement).style.opacity = "0";
            (el as HTMLElement).style.transform = "translateY(30px)";
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (typeof anime === 'function') {
                        anime({
                            targets: entry.target,
                            opacity: [0, 1],
                            translateY: [30, 0],
                            easing: 'easeOutExpo',
                            duration: 1200,
                            delay: 200
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(el => observer.observe(el));

        const heroText = document.querySelector(".hero-text-entry");
        if (heroText && typeof anime.timeline === 'function') {
            anime.timeline({ easing: 'easeOutExpo' })
                .add({
                    targets: '.hero-text-entry',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1500,
                    delay: 500
                })
                .add({
                    targets: '.hero-tag-entry',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                }, '-=800')
                .add({
                    targets: '.hero-cta-entry',
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 800,
                }, '-=600');
        }

        return () => {
            observer.disconnect();
            if (typeof anime.remove === 'function') {
                anime.remove('.vibe-hidden');
                anime.remove('.hero-text-entry');
                anime.remove('.hero-tag-entry');
                anime.remove('.hero-cta-entry');
            }
        };
    }, [pathname]);

    return null;
}
