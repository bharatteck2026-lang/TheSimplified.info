"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function StatsCounter() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +(counter.getAttribute('data-target') || 0);

                    animate(counter, {
                        innerHTML: [0, target],
                        round: 1,
                        easing: 'easeInOutExpo',
                        duration: 2000
                    });
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        const counters = containerRef.current?.querySelectorAll('.counter');
        counters?.forEach(counter => observer.observe(counter));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="stats-grid">
            <div className="counter-box">
                <h3 className="counter" data-target="5">0</h3>
                <p className="counter-label">Years Exp.</p>
            </div>
            <div className="counter-box">
                <h3 className="counter" data-target="150">0</h3>
                <p className="counter-label">Projects Done</p>
            </div>
            <div className="counter-box">
                <h3 className="counter" data-target="100">0</h3>
                <p className="counter-label">Happy Clients</p>
            </div>
        </div>
    );
}
