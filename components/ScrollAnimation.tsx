"use client";

import { useEffect } from "react";
import { animate, createTimeline, remove } from "animejs";
import { usePathname } from "next/navigation";

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
                    animate(entry.target, {
                        opacity: [0, 1],
                        translateY: [20, 0], // Reduced range
                        ease: 'out-expo',     // Standard v4
                        duration: 800,        // Faster
                        delay: 100            // Less delay
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 }); // Lower threshold

        hiddenElements.forEach(el => observer.observe(el));

        const heroText = document.querySelector(".hero-text-entry");
        if (heroText) {
            // Pre-set visibility to avoid any "pop-in" if JS is slow
            const heroElements = [".hero-text-entry", ".hero-tag-entry", ".hero-cta-entry"];
            heroElements.forEach(sel => {
                const el = document.querySelector(sel) as HTMLElement;
                if (el) el.style.opacity = "0";
            });

            createTimeline({
                defaults: {
                    ease: 'out-expo',
                    duration: 900
                }
            })
                .add('.hero-text-entry', {
                    opacity: [0, 1],
                    translateY: [20, 0],
                    delay: 100
                })
                .add('.hero-tag-entry', {
                    opacity: [0, 1],
                    translateY: [15, 0],
                    duration: 800
                }, '-=800')
                .add('.hero-cta-entry', {
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 700
                }, '-=600');
        }

        return () => {
            observer.disconnect();
            remove('.vibe-hidden');
            remove('.hero-text-entry');
            remove('.hero-tag-entry');
            remove('.hero-cta-entry');
        };
    }, [pathname]);

    return null;
}
