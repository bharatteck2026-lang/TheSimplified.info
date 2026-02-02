"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function StatsCounter() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const counters = containerRef.current?.querySelectorAll('.counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const targetValue = parseInt(el.getAttribute('data-target') || '0', 10);

                    const obj = { count: 0 };
                    animate(obj, {
                        count: targetValue,
                        duration: 2000,
                        ease: 'out-expo',
                        onRender: () => {
                            el.innerText = Math.floor(obj.count).toString();
                        }
                    });

                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.2 });

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
