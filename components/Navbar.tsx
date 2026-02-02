"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const isActive = (path: string) => pathname === path ? "active" : "";

    return (
        <header className={isOpen ? "menu-open" : ""}>
            <div className="container">
                <nav>
                    <Link href="/" className="nav-logo">
                        <Image
                            src="/logo.png"
                            alt="Simplified Media Studio"
                            width={200}
                            height={60}
                            style={{ height: '45px', width: 'auto' }}
                            priority
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className={`menu-toggle ${isOpen ? "active" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`nav-links ${isOpen ? "active" : ""}`}>
                        <div className="nav-links-inner">
                            <Link href="/" className={isActive("/")} onClick={() => setIsOpen(false)}>Home</Link>
                            <Link href="/about" className={isActive("/about")} onClick={() => setIsOpen(false)}>About</Link>
                            <Link href="/services" className={isActive("/services")} onClick={() => setIsOpen(false)}>Services</Link>
                            <Link href="/portfolio" className={isActive("/portfolio")} onClick={() => setIsOpen(false)}>Portfolio</Link>
                            <Link href="/contact" className={isActive("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
