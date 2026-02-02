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
                        translateY: [30, 0],
                        ease: 'outExpo',
                        duration: 1200,
                        delay: 200
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(el => observer.observe(el));

        const heroText = document.querySelector(".hero-text-entry");
        if (heroText) {
            createTimeline({
                defaults: { ease: 'outExpo' }
            })
                .add('.hero-text-entry', {
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1500,
                    delay: 500
                })
                .add('.hero-tag-entry', {
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                }, '-=800')
                .add('.hero-cta-entry', {
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 800,
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
